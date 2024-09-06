import React from 'react'
import footer_logo from '../../assets/images/svg/masai-logo-dark.svg'
import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from './Icons'
import telegram_img from "../../assets/images/webp/telegram.webp";
const links = [
    [
        { label: 'Success Stories', href: '/' },
        { label: 'Our Team', href: '/' },
        { label: 'Careers', href: '/' },
        { label: 'Masai Blog', href: '/' },
        { label: 'Talent Circle', href: '/' },
        { label: 'Masai School Admissions Test (MSAT)', href: '/' }
    ],
    [
        { label: 'Hire From Us', href: '/' },
        { label: 'Our Investors', href: '/' },
        { label: 'Newsroom', href: '/' },
        { label: 'Contact Us', href: '/' },
        { label: 'Become Coach', href: '/' }
    ],
    [
        { label: 'About Us', href: '/' },
        { label: 'FAQ', href: '/' },
        { label: 'Referral Program', href: '/' },
        { label: 'Masai Learn', href: '/' },
        { label: 'Industry Mentors', href: '/' }
    ]
];
const Footer = () => {
    return (
        <div className='bg-black rounded-t-[45px] lg:rounded-t-[64px]'>
            <div className='py-5 border-b border-opacity-20 border-white'>
                <div className='px-4 flex items-center flex-col md:flex-row justify-center gap-2 md:gap-4'>
                    <p class="block text-white text-center text-xl md:text-2xl font-semibold font-sans">Building your tech skills has never been easier.</p>
                    <button class="hover:bg-red-700 bg-munsell-red duration-300 ease-linear uppercase px-5 py-2.5 text-base font-medium rounded-md text-white">Start learning</button></div>
            </div>
            <div className='max-w-[1300px] mx-auto px-3 sm:px-5'>
                <div className='border-b border-opacity-20 border-white py-5 flex items-center justify-between gap-4'>
                    <a href="#">
                        <img src={footer_logo} alt="footer-logo" className='' />
                    </a>
                    <div className='flex items-center gap-3 sm:gap-4 md:gap-8'>
                        <p class="text-base leading-6 text-spanish-gray font-normal hidden md:block">Follow us -</p>
                        <a href="https://x.com/">
                            <Twitter />
                        </a>
                        <a href="https://facebook.com/">
                            <Facebook />
                        </a>
                        <a href="https://www.linkedin.com/">
                            <Linkedin />
                        </a>
                        <a href="https://www.instagram.com/">
                            <Instagram />
                        </a>
                        <a href="https://github.com/">
                            <Github />
                        </a>
                        <a href="https://www.youtube.com/">
                            <Youtube />
                        </a>
                    </div>
                </div>
                <div className='flex flex-row flex-wrap -mx-3 pt-10 pb-4 justify-between md:gap-3'>
                    <div className='md:w-1/3 w-full sm:w-1/2 flex flex-col gap-2 px-6 sm:mt-6 md:mt-0'>
                        <p className="duration-300 font-inter text-base font-semibold text-white">Masai Courses</p>
                        <a className="font-inter text-base font-normal text-chinese-silver leading-6 hover:text-munsell-red duration-300 ease-linear" href='/'>Software Development - Full Time </a>
                        <a className="font-inter text-base font-normal text-chinese-silver leading-6 hover:text-munsell-red duration-300 ease-linear" href='/'>Data Analytics - Full Time</a>
                        <p className="duration-300 font-inter text-base font-semibold text-white mt-2">IIT For All Courses</p>
                        <a className="font-inter text-base font-normal text-chinese-silver leading-6 hover:text-munsell-red duration-300 ease-linear" href='/'>IIT Guwahati - Micro-Credit Program in CS</a>
                        <a className="font-inter text-base font-normal text-chinese-silver leading-6 hover:text-munsell-red duration-300 ease-linear" href='/'>IIT Mandi - Minor in Data Science & ML</a>
                    </div>
                    {links.map((section, sectionIndex) => (
                        <div key={sectionIndex} className='sm:w-1/2 w-full md:w-[20%] md:mt-2 px-6 mt-6'>
                            <div className='flex flex-col gap-2 md:gap-3 lg:gap-4'>
                            {section.map((link, linkIndex) => (
                                <a
                                    key={linkIndex}
                                    className="font-inter text-base font-normal text-chinese-silver leading-6 hover:text-munsell-red duration-300 ease-linear"
                                    href={link.href}
                                >
                                    {link.label}
                                </a>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex sm:items-center justify-end sm:flex-row flex-col pb-9 gap-2 sm:gap-5'>
                <p class=" text-chinese-silver leading-6 text-xs md:text-base font-semibold">Connect with a growing <span className='md:block'> community of learners </span></p>
                <a target="_blank" href="/" class="tracking-[1.25px] max-w-[250px] leading-6 text-sm text-button-blue text-center items-center justify-between uppercase font-semibold cursor-pointer hover:bg-black-olive rounded-[10px] bg-raisin-black py-2 px-4 flex gap-2">
<img src={telegram_img} alt="telegram-img" className='size-8' />
    Join our Telegram</a>
                </div>
            </div>
            <div className='border-t border-opacity-20 py-4 sm:py-5 border-white'>
                <div className='max-w-[1280px] px-3 mx-auto flex md:items-center flex-col md:flex-row justify-between gap-1.5 md:gap-3'>
            <p class="xs:hidden lg:block text-chinese-silver uppercase leading-[22px] font-normal text-sm sm:text-base">Copyright © Nolan Edutech Private Limited. All rights reserved</p>
            <div className='cursor-pointer text-chinese-silver leading-4 lg:leading-[18px] text-[10px] lg:text-xs font-normal'>
                <a href="/privacy" rel="noreferrer" class="underline">Privacy Policy</a>
                 <span class="text-chinese-silver leading-4 lg:leading-[18px] text-[10px] lg:text-xs font-normal mx-0"> & </span> 
                 <a href="/terms" rel="noreferrer" class="underline">Terms and Conditions</a>
                 </div>
                 </div>
            </div>
        </div>
    )
}

export default Footer