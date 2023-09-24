import { useState, useRef } from "react";
import ProjectCard from "/components/projectCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const NextProject = ({ title, role, link, isVideo, image }) => {
	const menuRef = useRef(null);
	const [hover, setHover] = useState(false);
	const variant = {
		default: {
			rotate: 0,
		},
	};
	const hoverVariant = {
		default: {
			rotate: 45,
		},
	};

	return (
		<div ref={menuRef} className='flex justify-center h-screen bg-black w-screen '>
			<div className='flex h-screen flex-col w-[90vw] lg:w-[70vw] items-center justify-center'>
				<h1 className='text-white font-["helvetica-extended"] text-[40px] text-black font-[500] mb-10 mt-[-40px]'>
					Next <span className='font-["shallota"] text-[55px]'>Project</span>
				</h1>
				<ProjectCard title={title} role={role} link={link} isVideo={isVideo} image={image} />

				<Link
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					href={"/projects"}
					id='link'
					className='font-["helvetica-extended"] mt-[30px] flex items-center'
				>
					All Projects
					<motion.div variants={hover ? hoverVariant : variant} animate='default' transition={{ ease: "easeOut", duration: 0.3 }}>
						<FiArrowUpRight size={20} />
					</motion.div>
				</Link>
			</div>
		</div>
	);
};

export default NextProject;
