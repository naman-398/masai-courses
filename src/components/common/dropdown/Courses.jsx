import React from 'react'
import software_development from "../../../assets/images/svg/software-development.svg";
import data_analytics from "../../../assets/images/svg/data-analyis.svg";
import iit_guhwati from "../../../assets/images/webp/iit-guhwati.webp";
import iit_mandi from "../../../assets/images/webp/iit-mandi.webp";
const Courses = () => {
    return (
        <div className="absolute right-0  lg:left-0 mt-2">
            <div className='sm:min-w-[400px] min-w-[300px] shadow-[0px_4px_6px_rgba(0,_0,_0,_0.11)] md:border md:min-w-[650px]  xl:min-w-[900px] w-full bg-white text-left py-4 px-4 md:px-9'>
                <div className='flex flex-col md:flex-row md:items-center gap-4'>
                    <div className="flex flex-col gap-3 md:gap-5 md:w-1/2">
                        <div>
                            <p className="font-semibold text-xl md:text-2xl font-inter">Masai Courses</p>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-5">
                            <a href="/">
                                <div className="flex items-center gap-2 md:gap-5 px-2.5 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
                                    <div className="flex items-center justify-center bg-gray-100 w-10 sm:w-16 h-10 sm:h-16 p-2 rounded-full shrink-0 border border-gray-200">
                                        <img src={software_development} alt="software" className='w-full h-full object-contain' />
                                    </div>
                                    <p className="font-semibold text-[14px] md:text-xl text-black">Software Development</p>
                                </div>
                            </a>
                            <a href="/">
                                <div className="flex items-center gap-2 md:gap-5 px-2.5 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
                                    <div className="flex items-center justify-center bg-gray-100 w-10 sm:w-16 h-10 sm:h-16 p-2 rounded-full shrink-0 border border-gray-200">
                                        <img src={data_analytics} alt="software" className='w-full h-full object-contain' />
                                    </div>
                                    <p className="font-semibold text-sm md:text-xl text-black">Data Analytics</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-5 md:w-1/2">
                        <div>
                            <p className="font-semibold text-xl md:text-2xl font-inter">IIT for All Courses</p>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-5">
                            <a href="/">
                                <div className="flex items-center gap-2 md:gap-5 px-2.5 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
                                    <div className="flex items-center justify-center bg-gray-100 w-10 sm:w-16 h-10 sm:h-16 p-2 rounded-full shrink-0 border border-gray-200">
                                        <img src={iit_guhwati} alt="software" className='w-full h-full object-contain' />
                                    </div>
                                    <div><p class="font-semibold text-sm md:text-xl text-black">IIT Guwahati</p>
                                        <p class="font-normal text-xs md:text-sm text-gray-500 break-words">Micro-Credit Program in Computer Science</p>
                                    </div>
                                </div>
                            </a>
                            <a href="/">
                                <div className="flex items-center gap-2 md:gap-5 px-2.5 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
                                    <div className="flex items-center justify-center bg-gray-100 w-10 sm:w-16 h-10 sm:h-16 p-2 rounded-full shrink-0 border border-gray-200">
                                        <img src={iit_mandi} alt="software" className='w-full h-full object-contain' />
                                    </div>
                                    <div><p class="font-semibold text-[14px] md:text-xl text-black">IIT Mandi</p>
                                        <p class="font-normal text-xs md:text-sm text-gray-500 break-words">Minor in Data Science and Machine Learning</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses