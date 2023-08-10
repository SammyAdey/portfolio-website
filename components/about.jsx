import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = ({ setHover, aboutRef }) => {
	return (
		<div ref={aboutRef} className='flex w-screen h-screenm relative shrink-0 justify-center items-center'>
			<div className='w-[70vw] font-["shallota"] leading-[38px] lg:leading-[64px] text-[40px] lg:text-[64px]'>
				Hi i am{" "}
				<span
					id='link'
					onMouseEnter={() => setHover("name")}
					onMouseLeave={() => setHover("")}
					className='font-["helvetica-extended"] font-[500] leading-[20px] lg:leading-[48px] text-[32px] lg:text-[48px]'
				>
					{" "}
					Samuel Adeyemi
				</span>
				, a highly skilled{" "}
				<span
					id='link'
					onMouseEnter={() => setHover("design")}
					onMouseLeave={() => setHover("")}
					className='font-["helvetica-extended"] leading-[20px] lg:leading-[48px] font-[500] text-[32px] lg:text-[48px]'
				>
					web designer
				</span>{" "}
				and{" "}
				<span
					id='link'
					onMouseEnter={() => setHover("engineer")}
					onMouseLeave={() => setHover("")}
					className='font-["helvetica-extended"] leading-[20px] lg:leading-[48px] font-[500] text-[32px] text-[22px] lg:text-[48px]'
				>
					software engineer
				</span>{" "}
				based in Brisbane, Australia. With{" "}
				<span className='font-["helvetica-extended"] leading-[20px] lg:leading-[48px] font-[500] text-[32px] lg:text-[48px]'>6 years</span> of
				experience in the industry.
			</div>
		</div>
	);
};

export default About;
