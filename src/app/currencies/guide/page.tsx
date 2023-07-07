import Image from 'next/image'
import btcImage from '../../../images/btcImg.jpeg'
import BitcoinImg from '../../../images/BitcoinImg.jpeg'
import ethImage from '../../../images/ethImg.png'
import adaImg from '../../../images/adaImg.png'
import avaxImgResized from '../../../images/avaxImgResized.png'
import Link from 'next/link'

// import RootLayout from '../layout'


const page = ({ }) => {

    return <div className="container w-full md:max-w-4xl mx-auto pt-26 dark:text-[#cccbcb] text-slate-900">
        <div className="w-full mt-10 px-4 md:px-6 text-l leading-normal">
            {/* <!--Title--> */}

            <div>
                <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">What is Cryptocurrency?<br /> The  <span className="underline underline-offset-3 decoration-8 decoration-blue-600">Digital Currency<br /> Revolution</span></h1>
                <p className="text-lg font-normal mt-3 mb-8 text-gray-700 lg:text-xl dark:text-gray-400"> In the ever-evolving landscape of digital finance, cryptocurrencies have emerged as a disruptive force, reshaping the way we perceive and transact value. We recognize the<br /> immense potential of this digital currency revolution, where technology and innovation<br /> are poised to change the world.</p>
                <Image src={btcImage} alt='photo' width={900} height={10} className='mb-5' />

            </div>
            {/* TITLE END */}

            {/* LORE */}
            <p className="mb-3 text-gray-700 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-green-600 dark:first-letter:text-green-500 first-letter:mr-1 first-letter:float-left">C <br />ryptocurrency is such a cryptic concept, isn&apos;t it? Many people have difficulty understanding the technology that powers cryptocurrency, let alone how it works as an investment. Over the past decade, the worth of cryptocurrency has skyrocketed beyond many investor&apos;s expectations. We intend to shed light on this concept.<br /> <br />

                This beginner&apos;s guide will provide you with a solid foundation in understanding cryptocurrencies, blockchain technology, and the distinctions between various projects and blockchains. Armed with this knowledge, you&apos;ll be empowered to contemplate which specific cryptocurrency or blockchain aligns best with your interests and goals.<br /><br /></p><p className="text-lg font-normal mt-3 mb-3 text-gray-700 lg:text-xl dark:text-gray-400"> So, let&apos;s dive in and unlock the world of digital finance together!</p>
            {/* LORE END */}



            {/* SUB HEADER 1 */}
            <h5 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white"><span className="underline underline-offset-3 decoration-8 decoration-blue-600"><br /> Brief Introduction </span></h5>

            {/* P */}
            <p className="py-6">Cryptocurrency has emerged as a disruptive force in the world of finance and technology. It represents a new form of digital currency that operates independently of traditional banking systems. In this article, we will delve into the concept of cryptocurrency, its underlying technology, and its potential implications.<br /><br />
                Cryptocurrency is a digital or virtual form of currency that uses cryptography for secure financial transactions, control the creation of new units, and verify the transfer of assets. Unlike traditional fiat currencies, such as the US Dollar or Euro, cryptocurrencies are decentralized and not governed by any central authority or government.
            </p>

            {/* SUBH EADER 2 */}
            <h1 className="border-l-4 dark:border-green-500 border-green-600 text-lg font-medium italic my-8 pl-8 md:pl-12">Key Characteristics that you should know about </h1>

            {/* P1 */}
            <p className="py-6"><li className="mb-2 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white">Decentralization</li>Cryptocurrencies operate on decentralized networks called blockchains, which are distributed ledgers maintained by a network of participants. This means that no single entity has control over the currency or its transactions. Instead, transactions are verified and recorded by multiple participants, ensuring transparency and security. Decentralization eliminates the need for intermediaries, such as banks, and allows for direct peer-to-peer transactions.</p>

            {/* P2 */}
            <p className="py-6"><li className="mb-2 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white">Cryptography</li>Cryptocurrencies rely on cryptographic techniques to secure transactions and control the creation of new units. Encryption ensures the privacy and integrity of the transactions, protecting them from unauthorized access or manipulation. Cryptography is used to secure the digital wallets that store cryptocurrencies and to verify the authenticity of transactions.</p>

            {/* P3 */}
            <p className="py-6"><li className="mb-2 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white">Blockchain Technology</li> Cryptocurrencies are built on blockchain technology, which serves as a transparent and immutable record of all transactions. A blockchain is a digital ledger that consists of blocks of information linked together in a chain. Each block contains a list of transactions, and once a block is added to the chain, it cannot be altered. This provides a high level of security and transparency, as the entire transaction history is publicly available for anyone to view.</p>



            {/* SUB HEADER 3 */}
            <h5 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white"><span className="underline underline-offset-3 decoration-8 decoration-blue-600"><br />Types of Cryptocurrencies</span></h5>

            {/* P4 */}
            <p className="text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-400">While Bitcoin reigns as the undisputed king of cryptocurrencies, the digital landscape is home to a vast array of other digital assets, each with its own distinctive characteristics and objectives. Let us show you a few exciting curated collection of remarkable cryptocurrencies that we firmly believe possess a solid foundation and a promising future in the ever-evolving crypto ecosystem.</p>

            {/* CRYPTOS */}

            <div className='mt-10 mb-10 py-10'>
                {/* BTC */}
                <div className='py-1 mb-5'>
                    <h3 className='flex items-baseline'>
                        <Image src={BitcoinImg} width={40} height={5} alt='' className='' />
                        <h5 className=" mb-1 text-2xl font-extrabold leading-none tracking-tight text-[#f7931a] md:text-2xl lg:text-3xl dark:text-[#f7931a] border-l-4 border-transparent md:pl-1">Bitcoin</h5>
                        <span className='text-sm italic ml-2  text-[#f7931a] dark:text-[#f7931a]'>( btc )</span>
                    </h3>
                    <p>
                        Bitcoin, created in 2009 by the anonymous Satoshi Nakamoto, is a decentralized digital currency operating on blockchain technology. It offers numerous benefits due to its independent nature. Unlike traditional currencies controlled by central banks, Bitcoin is free from censorship, manipulation, and government interference. The blockchain, a distributed ledger, ensures transparency and security by recording all transactions.

                        One of Bitcoin&apos;s strengths is its limited supply. With only 21 million coins ever to exist, Bitcoin gains value through scarcity. Additionally, Bitcoin&apos;s decentralized network of nodes makes it extremely secure, as transactions are validated and verified by multiple participants.

                        Bitcoin facilitates peer-to-peer transactions globally, bypassing intermediaries like banks. Its low fees and quick settlement times make it a popular choice for international transactions and remittances. This is particularly beneficial in regions with limited access to traditional banking services or unstable economies.

                        <br /><br />

                        In summary, Bitcoin&apos;s decentralized nature, limited supply, and use of blockchain technology offer several advantages. It empowers individuals with financial sovereignty, enables low-cost global transactions, serves as a hedge against inflation, and provides diversification for investment portfolios.
                    </p>
                </div>
                <div className="border-b-2 border-slate-800"></div>


                {/* ETH */}
                <div className='mt-10 py-1 mb-5'>
                    <h3 className='flex items-baseline'>
                        <Image src={ethImage} width={40} height={5} alt='' className='' />
                        <h5 className=" mb-1 text-2xl font-extrabold leading-none tracking-tight dark:text-[#8c64fc] text-[#8c64fc] md:text-2xl lg:text-3xl border-l-4 border-transparent md:pl-1">Ethereum</h5>
                        <span className='text-sm italic ml-2  dark:text-[#8c64fc] text-[#8c64fc]'>( eth )</span>
                    </h3>
                    <p>
                        Ethereum, launched in 2015, is a decentralized blockchain platform that enables the development of smart contracts and decentralized applications (DApps). It was created by Vitalik Buterin and has gained significant traction in the world of cryptocurrencies.

                        At its core, Ethereum functions as a decentralized computing platform, allowing developers to build and deploy smart contracts. Smart contracts are self-executing agreements with the terms of the agreement directly written into code. They automatically execute when predefined conditions are met, eliminating the need for intermediaries and ensuring transparency and trust in transactions.

                        Ethereum&apos;s blockchain technology provides several advantages. Firstly, it allows for the creation and execution of DApps, which are applications that run on the Ethereum network. These DApps can be used for various purposes, such as decentralized finance (DeFi), gaming, and decentralized exchanges.<br />
                        <br />
                        Ethereum&apos;s platform offers programmable money, enabling developers to create innovative decentralized applications and tokens. This flexibility has led to the growth of the DeFi ecosystem, where users can access various financial services such as lending, borrowing, and decentralized exchanges, all without relying on traditional financial intermediaries.


                    </p>
                </div>
                <div className="border-b-2 border-slate-800"></div>


                {/* CARDANO */}
                <div className='mt-10 py-1 mb-5'>
                    <h3 className='flex items-baseline'>
                        <Image src={adaImg} width={40} height={5} alt='' className='' />
                        <h5 className=" mb-1 text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-3xl dark:text-[#1F51FF] text-[#1F51FF] border-l-4 border-transparent md:pl-1">Cardano</h5>
                        <span className='text-sm italic ml-2 dark:text-[#1F51FF] text-[#1F51FF]'>( ada )</span>
                    </h3>
                    <p>
                        Cardano is a decentralized blockchain platform that aims to provide a secure and scalable infrastructure for the development of decentralized applications and the execution of smart contracts. Launched in 2017, Cardano distinguishes itself through a scientific approach and rigorous peer-reviewed research.

                        One of the key features of Cardano is its focus on sustainability and scalability. It utilizes a unique proof-of-stake consensus algorithm called Ouroboros, which allows for energy-efficient transaction processing and ensures the long-term viability of the network. Cardano&apos;s layered architecture separates the settlement layer from the computational layer, enabling efficient scalability and upgrades without compromising security.<br />

                        Cardano also places a strong emphasis on security and formal verification. By leveraging Haskell, a highly secure and functional programming language, and conducting thorough peer-reviewed audits of its code, Cardano aims to minimize the risks of vulnerabilities and bugs, providing a robust and reliable platform for developers and users.<br /><br />


                        In summary, Cardano is a decentralized blockchain platform known for its scientific approach, scalability, security, and commitment to financial inclusion. It provides a solid foundation for building decentralized applications and executing smart contracts while prioritizing sustainability and partnerships with institutions.
                    </p>
                </div>
                <div className="border-b-2 border-slate-800"></div>


                {/* AVAX */}
                <div className='mt-10  py-1'>
                    <h3 className='flex items-baseline'>
                        <Image src={avaxImgResized} width={40} height={5} alt='' className='' />
                        <h5 className=" mb-1 text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-3xl  dark:text-[#E84142] text-[#E84142] border-l-4 border-transparent md:pl-1">Avalance</h5>
                        <span className='text-sm italic ml-2  dark:text-[#E84142]  text-[#E84142]'>( avax )</span>
                    </h3>
                    <p>
                        Avalanche is a decentralized blockchain platform designed to provide high scalability, speed, and security for the development of decentralized applications and the execution of smart contracts. Launched in 2020, Avalanche aims to address the limitations of existing blockchain networks and offer a more efficient and user-friendly experience.<br />

                        One of the key strengths of Avalanche is its high scalability. It employs a unique consensus protocol known as Avalanche consensus, which enables the network to process a large number of transactions in parallel. This approach allows for high throughput, low latency, and efficient utilization of network resources, making it well-suited for demanding decentralized applications and financial use cases.

                        Speed is another notable advantage of the Avalanche platform. It boasts sub-second transaction finality, meaning that transactions are confirmed and settled in near real-time. This quick confirmation time enhances user experience and enables fast-paced applications such as decentralized exchanges and gaming platforms.<br /><br />

                        In summary, Avalanche is a decentralized blockchain platform known for its scalability, speed, and security. It offers a high-performance infrastructure for decentralized applications and smart contracts, prioritizes fast transaction finality, and ensures network security through its consensus mechanism. Interoperability with other blockchains further enhances its utility, and the native cryptocurrency AVAX facilitates network operations and governance.
                    </p>
                </div>
            </div>


            <div className="border-b-2 dark:border-green-500 border-green-600"></div>



            {/* QUOTE */}
            <blockquote className="border-l-4 border-green-600  dark:border-green-500 italic my-8 pl-8 md:pl-12">Cryptocurrencies have revolutionized the way we perceive and transact value. With their decentralized nature and blockchain technology, they offer a new paradigm of financial systems that are transparent, secure, and accessible to all.</blockquote>

        </div >

        {/* <!--Tags --> */}
        <div className="text-base md:text-sm text-gray-500 px-4 py-6" >
            <Link href="/" className="text-base md:text-sm text-slate-900 no-underline hover:no-underline rounded-lg py-3 px-6 dark:bg-green-500 bg-green-600 border-none hover:text-zinc-100 hover:bg-green-500 dark:hover:bg-green-600">Go Back</Link>
        </div >

    </div >

}

export default page
