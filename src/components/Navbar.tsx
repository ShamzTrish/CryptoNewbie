'use client'
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ui/ThemeToggle';
import Image from 'next/image';
import CryptoNewbieNoBg from '../images/CryptoNewbieNoBg.png'
import { Connect } from './ui/Connect';


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    };

    return (
        <nav className="bg-slate-900 border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-1">
                <Link href='/'>
                    <Image className='w-40 h-15' src={CryptoNewbieNoBg} alt='' />
                </Link>

                <div className='md:hidden flex'>
                    <span className='mt-1'>

                        <ThemeToggle />
                    </span>
                    <button
                        data-collapse-toggle="navbar-solid-bg"
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-400 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-700"
                        aria-controls="navbar-solid-bg"
                        aria-expanded={isMenuOpen}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } w-full md:block mt-1 md:w-auto `}
                    id="navbar-solid-bg"
                >
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-800 md:flex-row md:space-x-1 md:mt-0 md:border-0 md:bg-transparent md:dark:bg-transparent border-gray-700">

                        <li>
                            <Link
                                href="/currencies/guide"
                                className="block py-2 px-4 font-medium text-sm text-zinc-400 rounded-lg md:border md:border-transparent md:hover:border-solid hover:text-white mr-1 hover:md:shadow-lg"

                            >

                                Beginner’s Guide
                            </Link>
                        </li>


                        <li >
                            <Link
                                href="/currencies/wallets"
                                className="block py-2 px-4 font-medium text-sm text-zinc-400 rounded-lg md:border md:border-transparent md:hover:border-solid hover:text-white mr-1 hover:md:shadow-lg"
                            >
                                Hardware Wallets
                            </Link>
                        </li>

                        <li>
                            <Connect />
                        </li>
                        <li className='hidden md:block mt-1 pl-4'>
                            <ThemeToggle />
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
