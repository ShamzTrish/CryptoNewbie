import Image from 'next/image'
import cnLogo from '../images/CNlogoMini.png'


const Footer = ({ }) => {
    return <>
        <footer className="shadow mt-8 bg-slate-900 border-gray-700">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
                <span className="flex items-center text-sm text-gray-500 sm:text-center">
                    <span>
                        <Image className='w-8 h-8' src={cnLogo} alt="" />
                    </span>
                    <span className='px-10'>
                        © 2023 CryptoNewbie™. All Rights Reserved.
                    </span>
                </span>
            </div>
        </footer>

    </>

}

export default Footer
