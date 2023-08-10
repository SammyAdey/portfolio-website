import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Landing({ landingRef, setSection }) {
	useEffect(() => {
		const textred = document.querySelector("#textred");
		const textblue = document.querySelector("#textblue");
		const rescale = (val, oMin, oMax, min, max) => {
			return ((val - oMin) * (max - min)) / (oMax - oMin) + min;
		};

		const animateTextRed = (e) => {
			var x = rescale(e.clientX, 0, window.screen.width, -6, 6);
			var y = rescale(e.clientY, 0, window.screen.height, -3, 3);
			textred.animate(
				{
					marginLeft: `${Math.round(x)}px`,
					marginTop: `${Math.round(y)}px`,
					// filter: `blur(${e.clientX / 500}px)`,
				},
				{ duration: 1000, fill: "forwards" }
			);
			textblue.animate(
				{
					marginLeft: `${Math.round(-x)}px`,
					marginTop: `${Math.round(-y)}px`,
				},
				{ duration: 1000, fill: "forwards" }
			);
		};

		window.addEventListener("mousemove", animateTextRed);

		return () => {
			window.removeEventListener("mousemove", animateTextRed);
		};
	}, []);

	useEffect(() => {
		setSection("projects");
	}, []);

	return (
		<div ref={landingRef} className='flex shrink-0 justify-center items-center relative z-[10] w-screen h-screen'>
			<div id='textred' className='flex flex-col lg:flex-row lg:justify-center absolute z-[30] text-truered items-center mix-blend-screen'>
				<h1 className='text-[46px] lg:text-[64px] font-["helvetica-extended"] font-[600] mr-4'>CREATIVE</h1>
				<h1 className='text-[80px] lg:text-[100px] font-["shallota"] font-[300] mb-[-24px] mt-[-25px] lg:mt-[0px]'>designer</h1>
			</div>
			<div className='flex flex-col lg:flex-row lg:justify-center absolute text-truegreen mft-[-10px] items-center mix-blend-screen'>
				<h1 className='text-[46px] lg:text-[64px] font-["helvetica-extended"] font-[600] mr-4'>CREATIVE</h1>
				<h1 className='text-[80px] lg:text-[100px] font-["shallota"] font-[300] mb-[-24px] mt-[-25px] lg:mt-[0px]'>designer</h1>
			</div>
			<div id='textblue' className='flex flex-col lg:flex-row lg:justify-center absolute text-trueblue items-center mix-blend-screen'>
				<h1 className='text-[46px] lg:text-[64px] font-["helvetica-extended"] font-[600] mr-4 '>CREATIVE</h1>
				<h1 className='text-[80px] lg:text-[100px] font-["shallota"] font-[300] mb-[-24px] mt-[-25px] lg:mt-[0px]'>designer</h1>
			</div>
		</div>
	);
}
