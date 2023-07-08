'use client'

import { FC } from 'react'
import React, { useState, useEffect } from "react";
import { Input, Popover, Radio, Modal, message, RadioChangeEvent } from "antd";
import { ArrowDown, ChevronDown, Settings, } from 'lucide-react';
import tokenList from '../../helpers/tokens/token-list.json'
import { useSendTransaction, useWaitForTransaction, useConnect, useAccount } from "wagmi";

import Image from 'next/image';
import { TokenData } from '@/lib/coinTypes/tokenTypes';
import Moralis from 'moralis'
import axios from 'axios';


interface SwapProps {

}

const Swap: FC<SwapProps> = ({ }) => {

    const [tokenOne, setTokenOne] = useState<TokenData>(tokenList[0])
    const [tokenTwo, setTokenTwo] = useState<TokenData>(tokenList[1])
    const [tokenOneAmount, setTokenOneAmount] = useState<any>(null)
    const [tokenTwoAmount, setTokenTwoAmount] = useState<any>(null)
    const [prices, setPrices] = useState<any>(null)
    const [txDetails, setTxDetails] = useState({
        to: null,
        data: null,
        value: null
    })
    const [messageApi, contextHolder] = message.useMessage()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [changeToken, setChangeToken] = useState<number>(1)

    const [slippage, setSlippage] = useState<number>(2.5)


    const { address, isConnected } = useAccount();
    const { data, sendTransaction } = useSendTransaction({
        account: address,
        to: String(txDetails.to),
        data: txDetails.data as unknown as `0x${string}`,
        value: BigInt(`0x${txDetails.value || '0'}`), // Use '0' as default if txDetails.value is null or undefined
    });

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash
    })


    const openModal = (token: number) => {
        setChangeToken(token)
        setIsOpen(true)
    }

    const handleSlippageChange = (event: RadioChangeEvent) => {
        setSlippage(event.target.value)
    }

    const switchTokens = () => {
        // kdyz swapnu tokens, tak chci aby se me inputy resetovali a fetchunuli se novy prices do tech prohozenych inputu
        setPrices(null)
        setTokenOneAmount(null)
        setTokenTwoAmount(null)
        const one = tokenOne
        const two = tokenTwo
        setTokenOne(two)
        setTokenTwo(one)
        fetchPrices(two.address, one.address)
    }

    const modifyToken = (index: number) => {
        setPrices(null)
        setTokenOneAmount(null)
        setTokenTwoAmount(null) //kdyz swapnu coins , tak chci aby se inputy null
        if (changeToken === 1) { //kdyz zmenim tokenOne
            setTokenOne(tokenList[index])
            fetchPrices(tokenList[index].address, tokenTwo.address) //udelam novej request a fetchnu data toho tokenu ktery jsme vybrali spolecne s tou address and tokenTwo zustane stejnej
        } else {
            setTokenTwo(tokenList[index])
            fetchPrices(tokenOne.address, tokenList[index].address)
        }
        setIsOpen(false)
    }


    const changeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTokenOneAmount(event.target.value)
        if (event.target.value && prices) { //jestli je neco v inputu a zaroven mam fetched prices, tak me nastav input2 na to co jsem napsal do inputu * fetched prices
            const tokenOneAmount = parseFloat(event.target.value); // Convert to a numeric type
            setTokenTwoAmount((tokenOneAmount * prices.ratio).toFixed(2))
        } else {
            setTokenTwoAmount(null)
        }
    }


    const fetchPrices = async (address1: string, address2: string) => {
        try {
            const responseOne = await Moralis.EvmApi.token.getTokenPrice({
                address: address1
            })

            const responseTwo = await Moralis.EvmApi.token.getTokenPrice({
                address: address2
            })

            const usdPrices = {
                tokenOne: responseOne.raw.usdPrice,
                tokenTwo: responseTwo.raw.usdPrice,
                ratio: responseOne.raw.usdPrice / responseTwo.raw.usdPrice
            }
            setPrices(usdPrices)
            return usdPrices
        } catch (error) {
            console.log(error)
        }
    }

    const fetchDexSwap = async () => {
        // ziskani pro metamask allowence
        const allowance = await axios.get(`https://api.1inch.io/v5.0/1/approve/allowance?tokenAddress=${tokenOne.address}&walletAddress=${address}`)

        // povoleni k allowence
        if (allowance.data.allowance === "0") {
            const approve = await axios.get(`https://api.1inch.io/v5.0/1/approve/transaction?tokenAddress=${tokenOne.address}`)
            setTxDetails(approve.data);
            console.log("not approved")
            return
        }

        // transakce
        const tx = await axios.get(
            `https://api.1inch.io/v5.0/1/swap?fromTokenAddress=${tokenOne.address}&toTokenAddress=${tokenTwo.address}&amount=${tokenOneAmount.padEnd(tokenOne.decimals + tokenOneAmount.length, '0')}&fromAddress=${address}&slippage=${slippage}`
        )

        let decimals = Number(`1E${tokenTwo.decimals}`)
        setTokenTwoAmount((Number(tx.data.toTokenAmount) / decimals).toFixed(2));

        setTxDetails(tx.data.tx);
    }


    useEffect(() => {
        fetchPrices(tokenList[0].address, tokenList[1].address)
    }, [])

    useEffect(() => {
        if (txDetails && isConnected) {
            sendTransaction()
        }
    }, [txDetails])
    useEffect(() => {

        messageApi.destroy();

        if (isLoading) {
            messageApi.open({
                type: 'loading',
                content: 'Transaction is Pending...',
                duration: 0,
            })
        }

    }, [isLoading])

    useEffect(() => {
        messageApi.destroy();
        if (isSuccess) {
            messageApi.open({
                type: 'success',
                content: 'Transaction Successful',
                duration: 1.5,
            })
        } else if (txDetails.to) {
            messageApi.open({
                type: 'error',
                content: 'Transaction Failed',
                duration: 1.50,
            })
        }


    }, [isSuccess])


    //SlIPAGE OPTIONS FOR POPOVER 
    const settings = (
        <>
            <div>
                Slippage Tolerance
            </div>
            <div>
                <Radio.Group value={slippage} onChange={handleSlippageChange}>
                    <Radio.Button value={0.5}>0.5%</Radio.Button>
                    <Radio.Button value={2.5}>2.5%</Radio.Button>
                    <Radio.Button value={5}>5.0%</Radio.Button>
                </Radio.Group>
            </div>
        </>
    )



    return <div className='min-h-[100vh]'>
        {/*SWAP CARD */}
        <div className='flex flex-col lg:flex-row lg:w-[1000px] justify-center items-center mx-auto'>
            <div className="text-4xl mt-[70px] md:mt-[130px] px-10 lg:px-0 lg:mr-6 text-center lg:text-left">
                <span className="font-bold text-[22px] sm:text-[36px] neon-writing text-[#fff] mt-5 lg:mt-0 flex-col xl:w-3/5 justify-center lg:items-start overflow-y-hidden neon-writing font-unbounded leading-[60px]">SWAP YOUR <br /> <span className='text-[#04FFF7]'>TOKENS</span><span> WITH US!</span></span>
                <br />
                <br />
                <span className="text-base text-[#fff]">
                    <p className='font-unbounded'>Trade many tokens on ERC-20 Ethereum Smart Chain in seconds, just by connecting your wallet.</p>
                    <h3 className='text-2xl mt-[30px] sm:mt-[60px]'>
                        <span className="mr-2 font-unbounded">Whenever. <span className='ml-3 mr-2'>Safely. </span></span><span className="text-blue-700 font-unbounded">Instantly. </span>
                    </h3>
                </span>
            </div>
            <div className='mt-10 mb-20 md:mb-0 sm:mt-20 md:mt-40'>
                {contextHolder}
                <Modal
                    open={isOpen}
                    footer={null}
                    title='Select a Token'
                    onCancel={() => setIsOpen(false)}
                >
                    <div className='border-t border-[#363e54] mt-5 flex flex-col gap-2'>
                        {
                            tokenList?.map((oneToken, index) => {
                                return <div key={index} className='flex justify-start items-center pl-5 pt-2 pb-2 hover:cursor-pointer overflow-auto hover:bg-[#1f1639]' onClick={() => modifyToken(index)}>
                                    <Image src={oneToken.img} alt={oneToken.ticker} height={40} width={40} />
                                    <div>
                                        <div className='ml-2 text-sm font-medium'>
                                            {oneToken.name}
                                        </div>
                                        <div className='ml-2 text-sx font-light text-[#51596f]'>
                                            {oneToken.ticker}
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </Modal>
                <div className='w-[370px] sm:w-[500px] shadow-xl dark:shadow-md min-h-[300px] bg-slate-900 border-2 border-slate-900 rounded-xl flex flex-col justify-start items-start px-8'>

                    <div className='flex justify-between items-center w-[98%] py-4 text-zinc-300'>
                        <h4>Swap</h4>
                        <Popover
                            content={settings}
                            title='Settings'
                            trigger='click'
                            placement='bottomRight'
                        >
                            <Settings className='text-[#51586f] transition duration-300 hover:text-white hover:rotate-90 cursor-pointer' />
                        </Popover>
                    </div>

                    {/* INPUTS */}
                    <div className='relative'>
                        <Input
                            placeholder="0"
                            value={tokenOneAmount}
                            onChange={changeAmount}
                            disabled={!prices}
                        />
                        <Input
                            placeholder="0"
                            value={tokenTwoAmount}
                            disabled={true} />

                        <div className="bg-[#3a4157] w-6 h-6 flex items-center justify-center rounded-md absolute top-[86px] left-[147px] sm:left-[200px] text-[#5f6783] border-[3px] border-slate-900 text-sm transition duration-300 hover:cursor-pointer hover:text-white" onClick={switchTokens}>
                            <ArrowDown />
                        </div>

                        <div className="absolute min-w-[20px] h-[30px] bg-[#3a4157] top-9 right-2 rounded-full flex justify-start items-center gap-1 font-bold text-[17px] pr-2 hover:cursor-pointer text-zinc-300"
                            onClick={() => openModal(1)}>
                            <Image src={tokenOne.img} alt="assetOneLogo" height={14} width={23} className="ml-1" />
                            {tokenOne.ticker}
                            <ChevronDown />
                        </div>

                        <div className="absolute min-w-[20px] h-[30px] bg-[#3a4157] top-[131px] right-2 rounded-full flex justify-start items-center gap-1 font-bold text-[17px] pr-2 hover:cursor-pointer text-zinc-300"
                            onClick={() => openModal(2)}>
                            <Image src={tokenTwo.img} alt="assetTwoLogo" height={14} width={23} className="ml-1" />
                            {tokenTwo.ticker}
                            <ChevronDown />
                        </div>

                    </div>
                    {/* SWAP BUTTON */}
                    <button className="flex justify-center items-center bg-[#243056] w-full h-14 text-[20px] font-bold rounded-lg text-[#5981F3] transition duration-300 mb-7 mt-2 disabled:bg-[#243056] disabled:opacity-40 disabled:text-[#5982f39b] disabled:hover:cursor-not-allowed disabled:hover:bg-[#243056] hover:cursor-pointer hover:bg-[#3b4874]" disabled={!tokenOneAmount || !isConnected}
                        onClick={fetchDexSwap}>
                        Swap
                    </button>

                </div>
            </div>
        </div>
    </div>

}

export default Swap



