import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Project = ({ projectRef }) => {
	const [hover, setHover] = useState(0);
	const closed = {
		default: {
			opacity: 0,
		},
	};

	const open = {
		default: {
			opacity: 1,
		},
	};

	return (
		<div ref={projectRef} className='flex flex-nowrap gap-3 relative h-screen shrink-0 justify-center items-center px-[100px] lg:px-[500px]'>
			<Link
				onMouseEnter={() => setHover(1)}
				onMouseLeave={() => setHover(0)}
				id='portfolio'
				href='projects/gidicruise'
				className='w-[320px] h-[180px] lg:w-[930px] lg:h-[525px] shrink-0 flex justify-center items-center bg-[#161616] rounded-[14px] overflow-hidden'
			>
				<motion.div
					variants={hover === 1 ? open : closed}
					animate='default'
					transition={{ ease: "easeOut", duration: 0.5 }}
					className='w-[930px] rounded-[14px] flex-col h-[525px] backdrop-blur-sm flex justify-center items-center absolute bg-black/50'
				>
					<h1 className='text-[72px] font-["shallota"] leading-[40px]'>GidiCruise</h1>
					<p className='font-["helvetica-extended"] font-[400] '>graphic design</p>
				</motion.div>
				<video className='' autoPlay={true} loop={true} muted={true} src='/portfolio/gidicruise.mp4' controls={false} />
			</Link>
			<Link
				onMouseEnter={() => setHover(2)}
				onMouseLeave={() => setHover(0)}
				id='portfolio'
				href='projects/agrify'
				className='w-[320px] h-[180px] lg:w-[930px] lg:h-[525px] shrink-0 bg-[#161616]  rounded-[14px] overflow-hidden'
			>
				<motion.div
					variants={hover === 2 ? open : closed}
					animate='default'
					transition={{ ease: "easeOut", duration: 0.5 }}
					className='w-[930px] rounded-[14px] flex-col h-[525px] backdrop-blur-sm flex justify-center items-center absolute bg-black/50'
				>
					<h1 className='text-[72px] font-["shallota"] leading-[40px]'>Agrify</h1>
					<p className='font-["helvetica-extended"] font-[400] '>Frontend & Blockchain Development</p>
				</motion.div>
				<Image alt='floatplane' className='object-fill object-center h-auto w-full' src='/portfolio/agrify.jpeg' width={600} height={317} />
			</Link>
			<Link
				onMouseEnter={() => setHover(3)}
				onMouseLeave={() => setHover(0)}
				id='portfolio'
				href='projects/ml-percussion'
				className='w-[320px] h-[180px] lg:w-[930px] lg:h-[525px] shrink-0 bg-[#161616] rounded-[14px] overflow-hidden'
			>
				<motion.div
					variants={hover === 3 ? open : closed}
					animate='default'
					transition={{ ease: "easeOut", duration: 0.5 }}
					className='w-[320px] h-[180px] lg:w-[930px] lg:h-[525px] rounded-[14px] flex-col backdrop-blur-sm flex justify-center items-center absolute bg-black/50'
				>
					<h1 className='text-[72px] font-["shallota"] leading-[40px]'>Ml Percussion</h1>
					<p className='font-["helvetica-extended"] font-[400] '>Design & Development</p>
				</motion.div>
				<video className='' autoPlay={true} loop={true} muted={true} src='/portfolio/wood-chipping.mp4' controls={false} />
			</Link>
			<Link
				onMouseEnter={() => setHover(4)}
				onMouseLeave={() => setHover(0)}
				id='portfolio'
				href='projects/rivet'
				className='w-[320px] h-[180px] lg:w-[930px] lg:h-[525px] shrink-0 bg-[#161616] rounded-[14px] overflow-hidden'
			>
				<motion.div
					variants={hover === 4 ? open : closed}
					animate='default'
					transition={{ ease: "easeOut", duration: 0.5 }}
					className='w-[930px] rounded-[14px] flex-col h-[525px] backdrop-blur-sm flex justify-center items-center absolute bg-black/50'
				>
					<h1 className='text-[72px] font-["shallota"] leading-[40px]'>Rivet App</h1>
					<p className='font-["helvetica-extended"] font-[400] '>UI/UX Design</p>
				</motion.div>
				<Image alt='rivet' className='object-fill object-center w-full' src='/portfolio/card.jpg' width={600} height={317} />
			</Link>
		</div>
	);
};

export default Project;
