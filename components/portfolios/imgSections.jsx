import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = ({ img }) => {
	let ref = useRef(null);
	let { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "end start"] });
	let y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

	return (
		<div ref={ref} className='w-full grid grid-cols-1 mt-[80px] lg:mt-[150px] h-[300px] lg:h-[700px] bg-black '>
			<div className='w-full overflow-hidden'>
				<motion.img
					style={{ y: y }}
					animate='default'
					// transition={{ ease: "easeInOut", duration: 3 }}
					className='object-cover h-[400px] lg:h-auto lg:w-full'
					alt='my profile'
					src={img}
					fill
				/>
			</div>
		</div>
	);
};

export const TwoColumn = ({ img1, img2, height }) => {
	let ref = useRef(null);
	let { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "end start"] });
	let y = useTransform(scrollYProgress, [0, 1], ["0%", "-2%"]);

	return (
		<div className='flex w-[90vw] lg:w-[70vw] grid grid-cols-2 gap-4 justify-between mt-[15px]'>
			<div className={"w-full relative bg-black overflow-hidden"}>
				<motion.img className='object-cover w-full h-full' alt='my profile' src={img1} fill />
			</div>
			<div className='w-full relative bg-black'>
				<motion.img className='object-cover w-full h-full' alt='my profile' src={img2} fill />
			</div>
		</div>
	);
};

export const OneColumn = ({ img }) => {
	let ref = useRef(null);
	let { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "end start"] });
	let y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

	return (
		<div className='flex w-[90vw] lg:w-[70vw] justify-between mt-[15px]'>
			<div className='w-full h-[150px] lg:h-[500px] bg-black'>
				<motion.img className='object-cover w-full h-full' alt='my profile' src={img} fill />
			</div>
		</div>
	);
};

export const Fullscreen = ({ img }) => {
	let ref = useRef(null);
	let { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "end start"] });
	let y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

	return (
		<div className='flex w-full justify-between h-[250px] mt-[15px]'>
			<div className='w-full overflow-hidden'>
				<motion.img ref={ref} style={{ y: y }} animate='default' className='object-cover lg:w-full h-[300px]' alt='my profile' src={img} fill />
			</div>
		</div>
	);
};
