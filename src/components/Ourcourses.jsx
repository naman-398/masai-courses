import React from 'react'
import software_development from ".././assets/images/webp/software-development.png";
import data_analytics from ".././assets/images/webp/data-analiys.png";
import { RightArrow } from './common/Icons';
import header_elipse from "../assets/images/webp/header-elipse.png";
const cardData = [
    {
      title: "Software Development",
      imgSrc: software_development,
      pointFirst:"Become job-ready in 30 weeks",
      pointSecond:"Full Stack Developer, Software Engineer & much more.",
      imgbg:"bg-vodka"
    },
    {
      title: "Data Analytics",
      imgSrc: data_analytics,
      pointFirst:"Become job-ready in 25 weeks",
      pointSecond:" Data Engineer, Data Analyst, Machine Learning Engineer &amp; much more.",
      imgbg:"bg-powder-blue"
    },
  ];
const Ourcourses = () => {
    return (
      <div className='relative'>
        <img src={header_elipse} alt="header_elipse" className='top-0 right-0 absolute' />
        <div className='max-w-[1474px] mx-auto px-4 relative z-10'>
            <h2 className='font-bold text-4xl md:text-5xl font-poppins text-center pt-8'>Our Courses</h2>
            <p className='font-normal text-sm sm:text-base font-sans text-dark-liver text-center mt-2 sm:mt-3'>Become a Software Developer, Testing Engineer or a Data Analyst at ZERO upfront fees.</p>
            <div className='flex items-center lg:flex-row flex-col justify-center gap-8 py-12'>
            {cardData.map((card, index) => (
        <div
          key={index}
          className='max-w-[410px] w-full border border-anti-flash-white rounded-xl flex flex-col shadow-[0px_6px_34px_0px_rgba(215, 216, 222, 0.41)]'
        >
          <div className={`${card.imgbg} h-[180px] sm:h-[200px] md:h-[230px] flex items-center justify-center w-full rounded-t-xl`}>
            <img src={card.imgSrc} alt={card.title} className=' size-20 sm:size-28 md:size-[140px]' />
          </div>
          <div className='sm:p-4 p-3 md:p-6 rounded-b-xl'>
            <p className='text-xl font-bold text-dark-gunmetal font-poppins'>{card.title}</p>
            <div className="flex items-center gap-[4px] bg-ghost-white border border-violet-blue max-w-full mt-1.5 sm:mt-2.5 px-4 md:px-3 py-1 rounded-[100px]">
              <p className="font-semibold text-xs sm:text-sm font-sans md:px-3 leading-[150%]">
              For 12th, Diploma & College Graduates, 
                <span className='block'>18-28 years</span>
              </p>
            </div>
            <hr className="mt-3 text-chinese-silver" />
            <div className='flex flex-col gap-2 mt-3 sm:mt-4'>
            <p class="text-sm text-eerie-black font-semibold flex gap-1.5">
                                <span><RightArrow /></span>
                                {card.pointFirst}
                            </p>
                            <p class=" flex gap-1.5">
                                <span><RightArrow /></span>
                                <p className='text-sm text-eerie-black font-semibold'>
                                    <strong>Opportunities: </strong>
                                    {card.pointSecond}</p>
                            </p>
                            <p class="text-sm text-eerie-black font-semibold flex gap-1.5">
                                <span><RightArrow /></span>
                                100% live learning with expert instructors.
                            </p>
                            <p class="text-sm text-eerie-black font-semibold flex gap-1.5">
                                <span><RightArrow /></span>
                                Pay After Placement
                            </p>
            </div>
            <button className='uppercase bg-munsell-red hover:bg-red-500 duration-300 ease-linear py-3 px-4 mt-4 rounded-lg w-full text-center text-white font-sans font-semibold text-sm tracking-[1.25px]'>
              view details
            </button>
          </div>
        </div>
      ))}
            </div>
        </div>
        </div>
    )
}

export default Ourcourses