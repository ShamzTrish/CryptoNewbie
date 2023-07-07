'use client'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import CryptoNewbieNoBg from '../images/CryptoNewbieNoBg.png'
import { Connect } from './ui/Connect';


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    }

    const toggleDropdown = () => {
        setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
    }

    const closeOption = () => {
        setIsDropdownOpen(false)
    }


    return (
        <nav className="bg-slate-900 border-gray-700 font-unbounded">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-1">
                <Link href='/'>
                    <Image className='w-40 h-15' src={CryptoNewbieNoBg} alt='' />
                </Link>

                <div className='md:hidden flex'>
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
                        } w-full md:block md:w-auto`}
                    id="navbar-solid-bg"
                >
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-800 md:flex-row md:space-x-1 md:mt-0 md:border-0 md:bg-transparent md:dark:bg-transparent border-gray-700">
                        <li className='hidden md:block'>
                            <button
                                id="dropdownNavbarLink"
                                data-dropdown-toggle="dropdownNavbar"
                                className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-sm text-zinc-400 rounded-lg md:border md:border-transparent md:hover:border-solid hover:text-white mr-1 hover:md:shadow-lg"
                                aria-expanded={isDropdownOpen}
                                onClick={toggleDropdown}
                            >
                                Guides
                                <svg
                                    className="w-2.5 h-2.5 ml-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>

                            {/* <!-- Dropdown menu --> */}
                            <div className={`z-50 ${isDropdownOpen ? 'absolute' : 'hidden'} mt-2 font-normal divide-y rounded-lg shadow w-44 bg-slate-900`}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li onClick={closeOption}>
                                        <Link
                                            href="/currencies/guide"
                                            className="block py-2 px-4 font-medium text-sm text-zinc-400 rounded-lg hover:text-white hover:bg-slate-800">
                                            Beginner’s Guide
                                        </Link>
                                    </li>

                                    <li onClick={closeOption}>
                                        <Link
                                            href="/currencies/wallets"
                                            className="block py-2 px-4 font-medium text-sm text-zinc-400 rounded-lg hover:text-white hover:bg-slate-800">
                                            Hardware Wallets
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <li className='md:hidden'>
                            <Link
                                href="/currencies/guide"
                                className="block py-2 px-4 font-medium text-sm text-zinc-400 rounded-lg hover:text-white hover:bg-slate-800">
                                Beginner’s Guide
                            </Link>
                        </li>

                        <li className='md:hidden'>
                            <Link
                                href="/currencies/wallets"
                                className="block py-2 px-4 font-medium text-sm text-zinc-400 rounded-lg hover:text-white hover:bg-slate-800">
                                Hardware Wallets
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/currencies/swap"
                                className="block py-2 px-4 font-medium text-sm text-zinc-400 rounded-lg md:border md:border-transparent md:hover:border-solid hover:text-white mr-1 hover:md:shadow-lg"
                            >
                                Swap
                            </Link>
                        </li>
                        <li>
                            <Connect />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

};

export default NavBar;
