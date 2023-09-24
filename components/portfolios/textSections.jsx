import { useState, useEffect, useRef } from "react";
import InfoSection from "/components/portfolios/info";
import { Hero, TwoColumn, OneColumn, Fullscreen } from "/components/portfolios/imgSections";
import NextProject from "/components/portfolios/nextProject";

const IntroText = ({ text }) => {
	return (
		<div className='flex flex-col lg:flex-row w-[90vw] lg:w-[70vw] items-center lg:justify-between'>
			<div className='text-center lg:text-left'>
				<h1 className='font-["helvetica-extended"] leading-[36px] text-[36px] text-black'>challenge &</h1>
				<h1 className='font-["shallota"] text-[50px] text-black'>solution</h1>
				<p className='mt-[-20px] text-[#B9B9B9] text-black'>experience</p>
			</div>
			<div className='w-[90%] lg:w-[70%]'>
				<p className='text-[20px] text-center lg:text-left lg:text-[28px] text-[#B9B9B9] text-black'>{text}</p>
			</div>
		</div>
	);
};

export default IntroText;
