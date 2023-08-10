import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

const Footer = ({ section, isProjects }) => {
	const [hover, setHover] = useState(false);

	return (
		<div className='flex w-full h-[60px] justify-between items-center fixed bottom-0  px-[25px] lg:px-[50px] pb-[10px] lg:pb-[50px] z-[9000]'>
			<div
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				id='link'
				className='h-[20px] hidden lg:block overflow-hidden hover:text-white'
			>
				<div
					className={
						"text-[#8a8a8a] cursor-pointer gap-1 hover:text-white h-[30px] overflow-hidden duration-700 ease-out " +
						(hover & ((section == "") | (section == "contact")) ? "translate-y-[-34px] duration-700 ease-out" : "") +
						(isProjects ? " text-black" : "")
					}
				>
					<div
						className={
							"flex items-center gap-1 hover:text-white transition-all duration-700 ease-out h-[30px] overflow-hidden " +
							(section === "about"
								? "translate-y-[-34px]"
								: section === "projects"
								? "translate-y-[-64px]"
								: section === "contact"
								? "translate-y-[-94px] duration-700 ease-out"
								: "translate-y-[0px]")
						}
					>
						<div className='h-[30px] overflow-hidden'>
							<h1 className='text-[12px] lg:text-[18px] font-[400] '>Available for work</h1>
						</div>
						<FiArrowUpRight size={20} className='mt-[-2px]' />
					</div>

					<Link
						href='/about'
						className={
							"flex items-center gap-1 hover:text-white h-[30px] overflow-hidden duration-700 ease-out " +
							(section === "about"
								? "translate-y-[-34px]"
								: section === "projects"
								? "translate-y-[-64px]"
								: section === "contact"
								? "translate-y-[-94px] duration-700 ease-out"
								: "translate-y-[0px]")
						}
					>
						<div className='h-[30px] overflow-hidden'>
							<h1 className='text-[18px] font-[400] '>Learn More</h1>
						</div>
						<FiArrowUpRight size={20} className='mt-[-2px]' />
					</Link>

					<Link
						href='/projects'
						className={
							"flex items-center gap-1 hover:text-white transition-all duration-700 ease-out h-[30px] overflow-hidden " +
							(section === "about"
								? "translate-y-[-34px]"
								: section === "projects"
								? "translate-y-[-64px] duration-700 ease-out"
								: section === "contact"
								? "translate-y-[-94px] duration-700 ease-out"
								: "translate-y-[0px]")
						}
					>
						<div className='h-[30px] overflow-hidden'>
							<h1 className='text-[18px] font-[400] '>See all Work</h1>
						</div>
						<FiArrowUpRight size={20} className='mt-[-2px]' />
					</Link>

					<div
						className={
							"flex items-center gap-1 hover:text-white transition-all duration-700 ease-out h-[30px] overflow-hidden " +
							(section === "about"
								? "translate-y-[-34px]"
								: section === "projects"
								? "translate-y-[-64px] duration-700 ease-out"
								: section === "contact"
								? "translate-y-[-94px] duration-700 ease-out"
								: "translate-y-[0px]")
						}
					>
						<div className='h-[30px] overflow-hidden'>
							<h1 className='text-[18px] font-[400] '>Available for work</h1>
						</div>
						<FiArrowUpRight size={20} className='mt-[-2px]' />
					</div>
				</div>
				<div
					className={
						"flex items-center text-[#8a8a8a] cursor-pointer gap-1 hover:text-white duration-700 ease-out " +
						(hover & ((section == "") | (section == "contact")) ? "translate-y-[-34px]" : "")
					}
				>
					<div className='h-[30px] overflow-hidden'>
						<a href='mailto:samuel3adeyemi@live.com'>
							<h1 className='text-[18px] font-[400] '>Samuel3adeyemi@live.com</h1>
						</a>
					</div>
					<FiArrowUpRight size={18} className='mt-[-5px]' />
				</div>
			</div>
			<h1 className={"text-[12px] lg:text-[14px] text-[#8a8a8a] font-[300]" + (isProjects ? " text-black" : "")}>© Samuel Adeyemi 2023</h1>
		</div>
	);
};

export default Footer;
