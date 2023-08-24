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
			<div className='flex flex-col items-center'>
				<Link
					onMouseEnter={() => setHover(1)}
					onMouseLeave={() => setHover(0)}
					id='portfolio'
					href='projects/gidicruise'
					className='w-[320px] h-[400px] lg:w-[930px] lg:h-[525px] shrink-0 flex justify-center items-center bg-[#161616] rounded-[14px] overflow-hidden'
				>
					<motion.div
						variants={hover === 1 ? open : closed}
						animate='default'
						transition={{ ease: "easeOut", duration: 0.5 }}
						className='w-[320px] h-[450px] lg:w-[930px] lg:h-[525px] rounded-[14px] hidden lg:flex flex-col backdrop-blur-sm justify-center items-center absolute bg-black/50'
					>
						<h1 className='text-[72px] font-["shallota"] leading-[40px]'>GidiCruise</h1>
						<p className='font-["helvetica-extended"] font-[400] '>graphic design</p>
					</motion.div>
					<video
						className='object-cover object-center h-full w-auto'
						autoPlay={true}
						loop={true}
						muted={true}
						src='/portfolio/gidicruise.mp4'
						controls={false}
					/>
				</Link>
				<div className='lg:hidden flex flex-col gap-0 items-center'>
					<h1 className='text-[36px] font-["shallota"] mt-2 mb-[-10px]'>GidiCruise</h1>
					<p className='text-[14px] font-["helvetica-extended"] font-[400] '>graphic design</p>
				</div>
			</div>
			<div className='flex flex-col items-center'>
				<Link
					onMouseEnter={() => setHover(2)}
					onMouseLeave={() => setHover(0)}
					id='portfolio'
					href='projects/agrify'
					className='w-[320px] h-[400px] lg:w-[930px] lg:h-[525px] shrink-0 bg-[#161616]  rounded-[14px] overflow-hidden'
				>
					<motion.div
						variants={hover === 2 ? open : closed}
						animate='default'
						transition={{ ease: "easeOut", duration: 0.5 }}
						className='w-[320px] h-[450px] lg:w-[930px] lg:h-[525px] rounded-[14px] hidden lg:flex flex-col backdrop-blur-sm justify-center items-center absolute bg-black/50'
					>
						<h1 className='text-[72px] font-["shallota"] leading-[40px]'>Agrify</h1>
						<p className='font-["helvetica-extended"] font-[400] '>Frontend & Blockchain Development</p>
					</motion.div>
					<Image
						alt='floatplane'
						className='object-cover lg:object-fill object-center h-full w-auto lg:h-auto lg:w-full'
						src='/portfolio/agrify.jpeg'
						width={600}
						height={317}
					/>
				</Link>
				<div className='lg:hidden flex flex-col gap-0 items-center'>
					<h1 className='text-[36px] font-["shallota"] mt-2 mb-[-10px]'>Agrify</h1>
					<p className='text-[14px] font-["helvetica-extended"] font-[400] '>Frontend & Blockchain Development</p>
				</div>
			</div>
			<div className='flex flex-col items-center'>
				<Link
					onMouseEnter={() => setHover(3)}
					onMouseLeave={() => setHover(0)}
					id='portfolio'
					href='projects/ml-percussion'
					className='w-[320px] h-[400px] lg:w-[930px] lg:h-[525px] shrink-0 bg-[#161616] rounded-[14px] overflow-hidden'
				>
					<motion.div
						variants={hover === 3 ? open : closed}
						animate='default'
						transition={{ ease: "easeOut", duration: 0.5 }}
						className='w-[320px] h-[450px] lg:w-[930px] lg:h-[525px] rounded-[14px] hidden lg:flex flex-col backdrop-blur-sm justify-center items-center absolute bg-black/50'
					>
						<h1 className='text-[72px] font-["shallota"] leading-[40px]'>Ml Percussion</h1>
						<p className='font-["helvetica-extended"] font-[400] '>Design & Development</p>
					</motion.div>
					<video
						className='object-cover lg:object-fill object-center h-full w-auto lg:h-auto lg:w-full'
						autoPlay={true}
						loop={true}
						muted={true}
						src='/portfolio/wood-chipping.mp4'
						controls={false}
					/>
				</Link>
				<div className='lg:hidden flex flex-col gap-0 items-center'>
					<h1 className='text-[36px] font-["shallota"] mt-2 mb-[-10px]'>Ml Percussion</h1>
					<p className='text-[14px] font-["helvetica-extended"] font-[400] '>Design & Development</p>
				</div>
			</div>
			<div className='flex flex-col items-center'>
				<Link
					onMouseEnter={() => setHover(4)}
					onMouseLeave={() => setHover(0)}
					id='portfolio'
					href='projects/rivet'
					className='w-[320px] h-[400px] lg:w-[930px] lg:h-[525px] shrink-0 bg-[#161616] rounded-[14px] overflow-hidden'
				>
					<motion.div
						variants={hover === 4 ? open : closed}
						animate='default'
						transition={{ ease: "easeOut", duration: 0.5 }}
						className='w-[320px] h-[450px] lg:w-[930px] lg:h-[525px] rounded-[14px] hidden lg:flex flex-col backdrop-blur-sm  justify-center items-center absolute bg-black/50'
					>
						<h1 className='text-[72px] font-["shallota"] leading-[40px]'>Rivet App</h1>
						<p className='font-["helvetica-extended"] font-[400] '>UI/UX Design</p>
					</motion.div>
					<Image
						alt='rivet'
						className='object-cover lg:object-fill object-center h-full w-auto lg:h-auto lg:w-full'
						src='/portfolio/card.jpg'
						width={600}
						height={317}
					/>
				</Link>
				<div className='lg:hidden flex flex-col gap-0 items-center'>
					<h1 className='text-[36px] font-["shallota"] mt-2 mb-[-10px]'>Rivet App</h1>
					<p className='text-[14px] font-["helvetica-extended"] font-[400] '>UI/UX Design</p>
				</div>
			</div>
		</div>
	);
};

export default Project;
