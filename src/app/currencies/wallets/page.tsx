import Image from 'next/image'
import { FC } from 'react'
import walletImg from '../../../images/wallet1.jpeg'
import LedgerNanoX from '../../../images/LedgerNanoXFinal.jpeg'
import BitBox from '../../../images/BitBox.jpeg'
import TrezorOne from '../../../images/TrezorOne.jpeg'
import Link from 'next/link'



const page = ({ }) => {
    return <>

        {/* Container */}
        <div className="container w-full md:max-w-4xl mx-auto pt-26 text-[#cccbcb]">

            <div className="w-full mt-10 px-4 md:px-6 text-l leading-normal">


                {/* <!--Title--> */}
                <div>
                    <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">Everything you need to<br /> know about <span className="underline underline-offset-3 decoration-8 decoration-blue-600"><br />Hardware Wallets</span></h1>
                    <p className="text-lg font-normal mt-3 mb-3 lg:text-xl text-gray-400"> In the world of cryptocurrency, security is paramount. That&apos;s where hardware wallets come in. These specialized devices provide a secure way to store and protect your private keys, ensuring the safety of your valuable digital assets. </p>
                    <Image src={walletImg} alt='photo' width={900} height={10} className='mb-6' />

                </div>

                {/* LORE */}
                <p className="mb-3 text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-green-500 first-letter:mr-1 first-letter:float-left">H<br />ardware wallet is essential for many of us. Aside from helping us feel more connected to our funds, hardware wallets keep us safe and give us peace of mind when using digital currencies.
                    <br />
                    My mission for the past few years is to help people understand cryptocurrencies and keep them safe when using them. A hardware wallet is one of the most essential components in securing your cryptocurrency.
                    <br /><br />
                    If you&apos;re looking for one, you will want the best hardware wallet for the crypto you can find.

                    Read through this guide to understand the difference between the different wallet providers. If you are in a hurry to find the best your money can buy, you&apos;ve also come to the right place.<br /> <br /></p>



                {/* SUB HEADER 1 */}
                <h5 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-4xl text-white"><span className="underline underline-offset-3 decoration-8 decoration-blue-600"><br /> What are hardware wallets? </span></h5>

                {/* P1 */}
                <p className="py-6">The short of it is that hardware wallets are portable devices that give us secure access to our crypto. They function by generating a user&apos;s private keys in a secure, offline environment while featuring an easy-to-use display. They usually connect via USB or Bluetooth to internet-connected devices like your computer. A separate screen on the wallet is used to verify and approve transactions to help prevent the disclosure of sensitive information to the internet-connected device. This combines to be very handy as you don&apos;t have to worry about a computer being compromised.
                    <br /> <br />
                    Aside from security advantages, a hardware wallet also gives users tactile control over their funds. To many, having their funds in their hands is a familiar feeling paramount for adoption.
                </p>

                {/* SUBH HEADER 2 */}
                <h5 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-4xl text-white"><span className="underline underline-offset-3 decoration-8 decoration-blue-600"><br />Swiss Bank in your pocket !</span></h5>

                {/* P2 */}
                <p className="py-6">In addition to the aforementioned benefits, it is crucial to emphasize the importance of keeping track of your passwords and securely storing them! When using a hardware wallet, it is common to have a recovery seed phrase—a series of words that acts as a backup to restore your wallet in case of loss or damage. This seed phrase should be treated with the utmost care and stored in a secure location, preferably offline and away from prying eyes.

                    <h1 className="border-l-4 border-green-500 font-medium text-xl italic my-8 pl-8 md:pl-12">NOT YOUR KEYS, NOT YOUR CRYPTO!</h1>

                    Remembering and storing passwords can be challenging, but it is essential to prioritize security. Consider using a password manager to securely store your login credentials and recovery seed phrase. Additionally, refrain from sharing your passwords or recovery phrases with anyone and avoid storing them digitally or in easily accessible places.
                    <br />   <br />
                    By maintaining a diligent approach to password security and following best practices for storing sensitive information, you can ensure that your hardware wallet remains a fortress protecting your valuable crypto assets.</p>




                {/* SUBH EADER 3 */}
                <h5 className="mb-8 text-4xl mt-10 font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl text-white">A Deep Dive into the <br />Pros & Cons of 3<span className="underline underline-offset-3 decoration-8 decoration-blue-600"><br />Popular Hardware Wallets<br /></span></h5>
                <p className="text-lg font-normal mt-3 mb-10 lg:text-xl text-gray-400">  We&apos;ve analyzed these three exceptional hardware wallets so you don&apos;t have to! Each with strong values and advanced features. Our in-depth comparison aims to guide you in finding the right fit. Let our analysis be your compass to safeguarding your digital wealth.</p>

                {/* 1# PRODUCTS HEADER # LEDGER */}
                <h5 className="mb-4 py-6 text-2xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-2xl text-white"><span># 1</span><span className="border-l-4 ml-4 border-green-500  text-xl italic my-2 pl-8 md:pl-12 ">Ledger Nano X Hardware Wallet </span></h5>
                <div className='flex justify-center'>
                    <Image src={LedgerNanoX} alt='photo' width={400} height={10} className='mb-6 ' />
                </div>

                {/* 1# paragraph */}
                <p className="py-6 mb-6">The Ledger Nano X is an advanced hardware wallet created by Ledger, a prominent company renowned for its expertise in providing secure solutions for cryptocurrency storage. Built as the successor to the Ledger Nano S, the Ledger Nano X aims to offer an enhanced and user-friendly experience for managing various cryptocurrencies. At its core, the Ledger Nano X serves as a physical device that securely stores private keys, which are essential for accessing and managing your cryptocurrency assets. By storing the private keys offline in a secure element within the device, it provides a robust defense against potential online threats like malware, viruses, and hacking attempts. This offline storage, also known as cold storage or hardware wallet, ensures that your private keys are kept safe and away from potential vulnerabilities that may exist in internet-connected devices. With its focus on security, the Ledger Nano X is regarded as one of the most reliable solutions for individuals looking to safeguard their cryptocurrency investments.

                    <br /> <br /> <br /> <br />
                    <span className='font-extrabold text-xl text-blue-600'>PROS: </span> Ledger is the most popular hardware wallet provider. The wallet allows you to store many different cryptocurrencies. The Ledger Nano X supports a wide range of cryptocurrencies, including major coins like Bitcoin (BTC), Ethereum (ETH), and Litecoin (LTC), as well as numerous altcoins and ERC-20 tokens. Its versatility makes it suitable for users with diverse cryptocurrency portfolios..There is a lot of community support in the form of software integration that uses a ledger to directly transact. These include many new decentralized exchanges. The device is constantly updated with new software.<br />
                    The Ledger Live software, which is used to manage the Ledger Nano X, provides a user-friendly interface that simplifies the process of managing cryptocurrencies. The software is intuitive and includes features like portfolio tracking, transaction history, and easy account management.


                    <br />
                    <br /><span className='font-extrabold text-xl text-blue-600'>CONS: </span> Interference layout makes it so that setting up or rebooting your wallet takes a considerable amount of time. The added mobile support is great but its main improvement, Bluetooth functionality, is far from being smooth. Many software updates affect user experience: often introducing lag & wallets that are not always immediately compatible. Only company to incorporate Bluetooth connectivity. While security concerns have not been substantiated, Bluetooth is looked on by the industry with suspicion as possibly introducing another attack vector.<br />
                    The Ledger Nano X is generally more expensive than other hardware wallets on the market. The additional cost is due to its advanced features and wireless connectivity. If you&apos;re on a tight budget, you might find the price of the Ledger Nano X to be a disadvantage.

                </p>
                <div className="border-b-2 border-slate-800"></div>


                {/* 2# PRODUCTS HEADER # TREZOR */}
                <h5 className="mb-4 py-6 text-2xl font-extrabold leading-none tracking-tight  md:text-4xl lg:text-2xl text-white"><span># 2</span><span className="border-l-4 ml-4 border-green-500 text-xl italic my-2 pl-8 md:pl-12 ">Trezor One Hardware Wallet</span></h5>
                <div className='flex justify-center'>
                    <Image src={TrezorOne} alt='photo' width={400} height={10} className='mb-6 ' />
                </div>

                {/* 2# paragraph */}
                <p className="py-6 mb-6">The Trezor One is one of the best hardware wallets for cryptocurrency on the market, and it comes at an affordable price. The Trezor was created by SatoshiLabs in 2014 and was the first cryptocurrency hardware wallet in the world. The Trezor hardware wallet, now called Trezor One, was the first product to offer a recovery seed and passphrase protection. Trezor has become immensely popular in the crypto community due to its security, affordability and ease of use. Our Trezor One review will help you decide if it is right for you.<br /><br />
                    The Trezor One is a beautifully simplistic little piece of kit that takes on a big job. Starting from the outside, the Model One is protected by a casing made of impact-resistant ABS plastic that can help protect against minor physical damage.

                    Under the hood is an ARM Cortex-M3 processor running at 120 MHz embedded on an STM32 F2 microcontroller. This is a similar setup used by many manufacturers as it provides seamless and secure access to a user&apos;s crypto assets.

                    There is no battery in Trezor products, they must be connected to a PC or Android phone via USB cable to be used.
                    <br /> <br />
                    The Trezor One supports a list of over 1,200 coins and tokens, and all 10,000 + ERC20 tokens either natively within Trezor Suite, or through one of the third-party integrated wallets.
                    <br /> <br />
                    It is good to note that the Trezor One supports slightly fewer assets than the premium Trezor Model T, which supports over 1,400, but still has many of the major coins covered. Take a look at the Trezor One Supported Coins page for a full list. Cardano is one notable exclusion that is supported on the Model T but not the Trezor One.
                    <br /> <br /> <br /> <br />
                    <span className='font-extrabold text-xl text-blue-600'>PROS: </span>Supports many cryptocurrencies. Allows conversion to fiat currency. In the wallet, exchanges have many functionalities including atomic swap and fiat exchange.
                    <br /> Trezor One is known for its high level of security. It stores private keys offline in the device, which means they are not exposed to potential online threats such as malware or hacking attempts. The device also requires physical confirmation for transactions, providing an additional layer of security.
                    <br />Trezor One&apos;s firmware is open source, which means it has been thoroughly reviewed and audited by the cryptocurrency community. This transparency allows independent experts to verify the security of the device and identify potential vulnerabilities, enhancing trust in the product.

                    <br />
                    <br /><span className='font-extrabold text-xl text-blue-600'>CONS: </span> Cons:  Trezor One has limited memory capacity, which means it can only store a certain number of wallets or accounts at a time. If you have a significant number of different cryptocurrencies or accounts, you may find the storage capacity to be restrictive.<br />
                    Single-factor authentication: Trezor One primarily relies on a PIN code for device authentication. While this provides a basic level of security, it does not offer the additional layer of protection provided by more advanced authentication methods like biometrics or passphrase options.

                </p>
                <div className="border-b-2 border-slate-800"></div>



                {/* 3# PRODUCTS HEADER # BITBOX02 */}
                <h5 className="mb-4 py-6 text-2xl font-extrabold leading-none tracking-tight  md:text-4xl lg:text-2xl text-white"><span># 3</span><span className="border-l-4 ml-4 border-green-500 text-xl italic my-2 pl-8 md:pl-12 ">BitBox02 Hardware Wallet</span></h5>
                <div className='flex justify-center'>
                    <Image src={BitBox} alt='photo' width={400} height={10} className='mb-6 ' />
                </div>

                {/* 3# paragraph */}
                <p className="py-6 mb-6">
                    <br /> <br />
                    The BitBox02 hardware wallet is a meticulously crafted device developed by Shift Cryptosecurity, a Swiss-based company renowned for its unwavering commitment to providing top-notch cryptocurrency security solutions. Built with a strong emphasis on both security and user experience, the BitBox02 aims to offer individuals a reliable and convenient means of safeguarding their digital assets.<br /> By utilizing cutting-edge encryption and incorporating robust security measures, this hardware wallet ensures that users&apos; private keys are stored offline in a secure chip, shielding them from potential online threats such as malware, phishing attacks, and hacking attempts.
                    <br /> <br />
                    <span className='font-extrabold text-xl text-blue-600'>PROS: </span>The BitBox02 prioritizes security and employs various measures to keep your private keys safe. It features offline storage, a secure chip, and a tamper-resistant design, providing robust protection against potential attacks and unauthorized access to your cryptocurrencies.<br /><br />
                    BitBox02 operates on open-source software, allowing for transparency and community auditing. This ensures that the codebase is continually reviewed for security vulnerabilities, giving users greater confidence in the wallet&apos;s integrity, designed with a user-friendly interface, making it accessible for both beginners and experienced cryptocurrency users. The device incorporates a clear OLED screen and a touch button for easy navigation and transaction verification.<br />
                    <br /><span className='font-extrabold text-xl text-blue-600'>CONS: </span>  While the BitBox02 supports a range of major cryptocurrencies, it may not have support for some of the less popular or newer coins. If you hold a specific cryptocurrency that is not supported by the BitBox02, you may need to consider alternative hardware wallets.<br />The BitBox02 is positioned in the higher price range compared to some other hardware wallets on the market. While it offers robust security and user-friendly features, the higher cost may be a consideration for budget-conscious users.

                </p>
                <div className="border-b-2 border-slate-800"></div>



                {/* PRODUCTS */}
                <p className="font-normal mt-16 mb-10 lg:text-xl text-gray-400 border-l-4 border-green-500 italic my-8 pl-8 md:pl-8">&quot;By equipping yourself with a hardware wallet, you&apos;re not merely joining the cryptocurrency revolution, you&apos;re securing your place in it. Safeguarding your digital assets becomes effortless, allowing you to explore the possibilities and potential of this exciting landscape with peace of mind.&quot;</p>
                <div className='flex gap-6 flex-wrap sm:gap-4 sm:flex-nowrap lg:gap-6'>
                    {/* Ledger Nano X */}
                    <div className="w-50 max-w-sm  border rounded-lg shadow bg-gray-800 border-gray-700">
                        <a href="https://shop.ledger.com/products/ledger-nano-x" target='_blank'>
                            <Image className="p-4  rounded-t-lg" src={LedgerNanoX} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="https://shop.ledger.com/products/ledger-nano-x" target='_blank'>
                                <h5 className="text-sm font-semibold tracking-tight text-white">Secure, buy, exchange, grow your crypto and your NFTs with our hardware wallet</h5>
                            </a>
                            <div className="flex items-center mt-2.5 mb-5">
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">5.0</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className='font-thin text-xs pt-2 mr-1'>from</span><span className="text-2xl font-bold text-white">$165</span>
                                </div>
                                <a href="https://shop.ledger.com/products/ledger-nano-x" target='_blank' className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-10 py-2 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">View</a>
                            </div>
                        </div>
                    </div>
                    {/* BitBox */}

                    <div className="w-50 max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
                        <a href="https://bitbox.swiss/bitbox02/" target='_blank'>
                            <Image className="p-8 rounded-t-lg w-lg" src={BitBox} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="https://bitbox.swiss/bitbox02/" target='_blank'>
                                <h5 className="text-sm font-semibold tracking-tight text-white">Protect your coins with the latest Swiss made hardware wallet</h5>
                            </a>
                            <div className="flex items-center mt-2.5 mb-5">
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">5.0</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className='font-thin text-xs pt-2 mr-1'>from</span><span className="text-2xl font-bold text-white">$148</span>
                                </div>
                                <a href="https://shop.ledger.com/products/ledger-nano-x" target='_blank' className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-10 py-2 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">View</a>
                            </div>
                        </div>
                    </div>

                    {/* Trezor One*/}
                    <div className="w-50 max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
                        <a href="https://trezor.io/trezor-model-one" target='_blank'>
                            <Image className="rounded-t-lg" src={TrezorOne} alt="product image" />
                        </a>
                        <div className="px-5 pb-1">
                            <a href="https://trezor.io/trezor-model-one" target='_blank'>
                                <h5 className="text-sm font-semibold tracking-tight text-white">The Trezor Model One is the #1 Bitcoin hardware wallet choice</h5>
                            </a>
                            <div className="flex items-center mt-2 mb-5">
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">5.0</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className='font-thin text-xs pt-2 mr-1'>from</span><span className="text-2xl font-bold text-white">$69</span>
                                </div>
                                <a href="https://shop.ledger.com/products/ledger-nano-x" target='_blank' className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-10 py-2 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">View</a>
                            </div>
                        </div>
                    </div>

                </div>
                {/* FINAL NOTES */}

                <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-8"> We trust that this article has served as your guiding light, paving the way for you to make an informed decision. With a newfound understanding of hardware wallets, you now recognize their indispensability in the vast realm of the cryptoverse.</blockquote>
            </div>

            {/* <!--Tags --> */}
            <div className="text-base md:text-sm text-gray-500 px-4 py-6" >
                <Link href="/" className="text-base md:text-sm text-slate-900 no-underline hover:no-underline rounded-lg py-3 px-6 bg-green-500 border-none hover:text-zinc-100 hover:bg-green-600">Home Page</Link>
            </div >
        </div>

    </>


}

export default page