import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutHover = ({ hover }) => {
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	const variants = {
		default: {
			x: mousePosition.x - 150,
			y: mousePosition.y - 150,
			scale: 0,
		},
	};
	const hoverVariants = {
		default: {
			x: mousePosition.x - 150,
			y: mousePosition.y - 150,
			scale: 1,
		},
	};

	useEffect(() => {
		const mouseMove = (e) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		};

		window.addEventListener("mousemove", mouseMove);

		return () => {
			window.removeEventListener("mousemove", mouseMove);
		};
	}, [hover]);
	return (
		<>
			<motion.div
				initial={{ scale: 0 }}
				variants={hover === "name" ? hoverVariants : variants}
				animate='default'
				transition={{ ease: "easeOut", duration: 0.3 }}
				className='flex fixed z-[5] top-0 left-0 pointer-events-none justify-center items-center overflow-hidden w-[300px] h-[300px] rounded-[50%] '
			>
				<Image alt='jungle fever' src='/gifs/profile.gif' width={300} height={100} />
			</motion.div>
			<motion.div
				initial={{ scale: 0 }}
				variants={hover === "design" ? hoverVariants : variants}
				animate='default'
				transition={{ ease: "easeOut", duration: 0.3 }}
				className='flex fixed z-[5] top-0 left-0 pointer-events-none justify-center items-center overflow-hidden w-[300px] h-[300px] rounded-[50%] '
			>
				<Image alt='phone ringing' src='/gifs/design.gif' width={480} height={317} />
			</motion.div>
			<motion.div
				initial={{ scale: 0 }}
				variants={hover === "engineer" ? hoverVariants : variants}
				animate='default'
				transition={{ ease: "easeOut", duration: 0.3 }}
				className='flex fixed z-[5] top-0 left-0 pointer-events-none justify-center items-center overflow-hidden w-[300px] h-[300px] rounded-[50%] '
			>
				<Image alt='my profile' src='/gifs/engineer.gif' width={600} height={317} />
			</motion.div>
		</>
	);
};

export default AboutHover;
