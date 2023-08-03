import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectCard from "@/components/projectCard";

const ProjectsPage = ({ setLinks, setSection }) => {
	const [hover, setHover] = useState(0);
	const [subMenu, setSubMenu] = useState("All");
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
	useEffect(() => {
		setLinks(document.querySelectorAll("#link"));
	}, []);

	useEffect(() => {
		setSection("");
	}, []);
	return (
		<div className='flex flex-col h-screen relative z-[10] w-[100vw] m-auto py-[10rem] items-center '>
			<h1 className=' font-["helvetica-extended"] leading-[40px] text-[70px] font-[500] my-20 pb-10'>
				MY <span className='w-[70vw] font-["shallota"] leading-[64px] text-[104px]'>projects</span>
			</h1>

			<div className='bg-white rounded-[30px] fixed bottom-16 z-[1000] p-1'>
				<div className='relative'>
					<div
						className={
							(subMenu === "All"
								? "w-[70px] "
								: subMenu === "Design"
								? "ml-[66px] w-[100px] "
								: subMenu === "UI/UX"
								? "ml-[162px] w-[100px] "
								: subMenu === "Development"
								? "ml-[258px] w-[148px] "
								: "") + "bg-black transition duration-700 rounded-[30px] transition-all h-[40px] absolute"
						}
					></div>
					<div className='flex gap-2 flex px-1 py-1 text-black justify-between z-[3] relative'>
						<p
							id='link'
							onClick={() => setSubMenu("All")}
							className={(subMenu === "All" ? "text-white " : "") + "delay-300 rounded-[30px] py-1 px-5"}
						>
							All
						</p>
						<p
							id='link'
							onClick={() => setSubMenu("Design")}
							className={(subMenu === "Design" ? "text-white " : "") + "delay-300 rounded-[30px] py-1 px-5"}
						>
							Design
						</p>
						<p
							id='link'
							onClick={() => setSubMenu("UI/UX")}
							className={(subMenu === "UI/UX" ? "text-white " : "") + "delay-300 rounded-[30px] py-1 px-5"}
						>
							UI/UX
						</p>
						<p
							id='link'
							onClick={() => setSubMenu("Development")}
							className={(subMenu === "Development" ? "text-white " : "") + "delay-300 rounded-[30px] py-1 px-5"}
						>
							Development
						</p>
					</div>
				</div>
			</div>

			<div className='mx-[10px] pb-[200px] grid grid-cols-2 gap-4 justify-center items-center'>
				<ProjectCard title='Gidicruise' role='Graphic Design' link='/projects/gidicruise' isVideo={true} image='/portfolio/gidicruise.mp4' />
				<ProjectCard title='Agrify' role='Frontend & Blockchain Development' link='/projects/agrify' isVideo={false} image='/portfolio/agrify.jpeg' />
				<ProjectCard
					title='Ml Percussion'
					role='Design & Development'
					link='/projects/ml-percussion'
					isVideo={true}
					image='/portfolio/wood-chipping.mp4'
				/>
				<ProjectCard title='Rivet App' role='UI/UX Design' link='/projects/rivet' isVideo={false} image='/portfolio/card.jpg' />
				<ProjectCard title='Floatplane' role='Design & Development' link='/projects/floatplane' isVideo={false} image='/portfolio/floatplane.jpg' />
				<ProjectCard title='Ltt Labs' role='Design & Development' link='/projects/ltt-labs' isVideo={false} image='/portfolio/labs.jpg' />
			</div>
		</div>
	);
};

export default ProjectsPage;
