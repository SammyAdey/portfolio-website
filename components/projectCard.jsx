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
				className='w-full max-w-[900px] lg:max-w-[700px] sm:max-w-[500px] h-auto lg:h-[380px] shrink-0 my-1 bg-[#161616] lg:rounded-[12px] overflow-hidden relative'
			>
				<motion.div
					variants={hover ? open : closed}
					animate='default'
					transition={{ ease: "easeOut", duration: 0.5 }}
					className='w-full h-full rounded-[12px] flex-col backdrop-blur-sm hidden lg:flex justify-center items-center absolute bg-black/50'
				>
					<h1 className='text-[4vw] lg:text-[72px] font-["shallota"] leading-[1.2]'>{title}</h1>
					<p className='font-["helvetica-extended"] font-[400]'>{role}</p>
				</motion.div>

				{isVideo ? (
					<video className='object-cover object-center h-full w-full' autoPlay loop muted src={image} controls={false} />
				) : (
					<Image alt={title} className='object-cover object-center h-full w-full' src={image} width={600} height={317} />
				)}
			</Link>

			<div className='lg:hidden flex flex-col items-center mt-2'>
				<h1 className='text-[8vw] sm:text-[36px] font-["shallota"]'>{title}</h1>
				<p className='text-[3vw] sm:text-[14px] font-["helvetica-extended"] font-[400]'>{role}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
