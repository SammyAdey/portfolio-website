import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ link, title, role, image, isVideo }) => {
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
		<div className='flex flex-col items-center'>
			<Link
				href={link}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				id='portfolio'
				className='2xl:w-[900px] xl:w-[700px] w-full 2xl:h-[510px] lg:h-[380px] shrink-0 my-1 bg-[#161616] lg:rounded-[12px] overflow-hidden'
			>
				<motion.div
					variants={hover === true ? open : closed}
					animate='default'
					transition={{ ease: "easeOut", duration: 0.5 }}
					className='2xl:w-[900px] xl:w-[700px] w-[200px] 2xl:h-[510px] lg:h-[380px] rounded-[12px] flex-col backdrop-blur-sm hidden lg:flex justify-center items-center absolute bg-black/50'
				>
					<h1 className='text-[72px] font-["shallota"] leading-[40px]'>{title}</h1>
					<p className='font-["helvetica-extended"] font-[400] '>{role}</p>
				</motion.div>

				{isVideo ? (
					<video className='object-fill object-center h-auto w-full' autoPlay={true} loop={true} muted={true} src={image} controls={false} />
				) : (
					<Image alt={title} className='object-fill object-center h-auto w-full' src={image} width={600} height={317} />
				)}
			</Link>
			<div className='lg:hidden flex flex-col gap-0 items-center'>
				<h1 className='text-[36px] font-["shallota"] mt-2 mb-[-10px]'>{title}</h1>
				<p className='text-[14px] font-["helvetica-extended"] font-[400] '>{role}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
