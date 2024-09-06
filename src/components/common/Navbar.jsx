import React, { useState } from 'react'
import masai_logo from "../../assets/images/webp/masai-logo.webp";
import { DownArrow, Navcross, Navline } from './Icons';
import Scholarship from './dropdown/Scholarship';
import Courses from './dropdown/Courses';
const Navbar = () => {
    const [first, setfirst] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [isOpentwo, setIsOpentwo] = useState(false);

    const toggleDropdowntwo = (b) => {
        b.preventDefault();
        setIsOpentwo(!isOpentwo);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    function show() {
        setfirst(!first)
        if (first === false) {
            document.body.classList.add('overflow_hidden')
        } else {
            document.body.classList.remove('overflow_hidden')
        }
    }

    return (
        <div className='border-b border-black border-opacity-20 sticky top-0 bg-white z-20'>
            <div className='max-w-[1472px] mx-auto px-4 py-3 sm:py-5 flex items-center justify-between'>
                <div className='flex items-center gap-5 w-full lg:w-auto justify-between lg:justify-center'>
                    <div className='flex items-center'>
                        <span onClick={show} className=' block lg:hidden relative z-[13]'>{first === false ? <Navline /> : <Navcross />}</span>
                        <img src={masai_logo} alt="masai-logo" className='cursor-pointer max-w-[114px] max-h-10 relative z-20' />
                    </div>
                    <div className="relative inline-block text-left">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center py-2 px-4 text-sm sm:text-base font-medium font-inter bg-azureish-white rounded-lg uppercase"
                        >
                            Courses
                            <span className="ml-2"><DownArrow /></span>
                        </button>

                        {isOpen && (
                           <Courses/>
                        )}
                    </div>
                </div>
                <div className={`${first === false ? "-left-full" : "left-0"}  flex items-center gap-8 font-medium text-xl lg:text-base text-vampire-black mobile-view`}>
                    <div className="relative inline-block text-left">
                        <a
                            href="/"
                            onClick={toggleDropdowntwo}
                            className="flex items-center hover:text-red-600 duration-300 relative"
                        >
                            Scholarship
                            <span className="font-medium inline-flex items-center justify-center px-2.5 py-0.5 text-xs bg-alabaster text-antique-brass rounded-full absolute right-[-14px] top-[-18px] uppercase">
                                New
                            </span>
                            <span className="ml-2">
                                <DownArrow />
                            </span>
                        </a>
                        {isOpentwo && (
                           <Scholarship onClick="show"/>
                        )}
                    </div>
                    <a href="/" onClick={show} className='hover:text-red-600 duration-300'>Success Stories
                    </a>
                    <a href="/" onClick={show} className='hover:text-red-600 duration-300'>Events
                    </a>
                    <a href="/" onClick={show} className='hover:text-red-600 duration-300'>Hire From Us
                    </a>
                    <a href="/" onClick={show} className='hover:text-red-600 duration-300'>Fees
                    </a>
                    <a href="/" onClick={show} className='py-3 px-4 bg-transparent border border-red-500 text-red-500 rounded-lg text-lg lg:text-xs font-semibold font-sans hover:bg-red-500 duration-300 ease-linear hover:text-white'>Register</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
