'use client'

import Link from "next/link";
import { useState } from "react";
function Navbar(props) {
    const [nav, setNev] = useState(false);
    const [hembarger, setHembarger] = useState(false);
    return (
        <div className="">
            <nav className="sm:hidden my-6 md:px-10 lg:px-[7rem] sm:px-12 px-6">
                <div className="flex justify-between px-2">
                    <div>
                        <Link href='/'><h2 className='font-bold'>ROBIUL HOQUE RAKIB</h2></Link>
                        
                        <p className='font-semibold text-gray-500'>Digital Knowledge Garden</p>
                    </div>
                    <div >
                        {
                            hembarger ?
                                <svg onClick={() => setHembarger(false)} xmlns="http://www.w3.org/2000/svg" fillRule="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg> : <svg onClick={() => setHembarger(true)} xmlns="http://www.w3.org/2000/svg" fillRole="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                        }
                    </div>
                </div>
                {
                    hembarger ? <div className="mt-5">
                        <ul>
                            <Link href='/blog' ><li className="mt-2 py-3 px-2 bg-gray-100">Blog</li></Link>
                            <Link href='/contact' ><li className="mt-2 py-3 px-2 bg-gray-100">Contact</li></Link>
                        </ul>
                    </div> : null
                }

            </nav>
            <nav className='md:flex sm:flex lg:flex xl:flex hidden justify-between items-center shadow-md py-6 md:px-10 lg:px-[7rem] sm:px-12 px-6'>
                <div>
                <Link href='/'><h2 className='font-bold'>ROBIUL HOQUE RAKIB</h2></Link>
                    <p className='font-semibold text-gray-500'>Digital Knowledge Garden</p>
                </div>
                <div className='flex'>
                <Link href='/blog' className='mr-12 text-gray-700 font-mediam cursor-pointer' >Blog</Link>
                    <Link href='/contact' className='mr-12 text-gray-700 font-mediam cursor-pointer'>Contact me</Link>
                    <div className='cursor-pointer text-gray-700'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </div>
            </nav>


        </div>

    );
}

export default Navbar;