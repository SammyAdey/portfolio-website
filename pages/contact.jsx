import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const ContactPage = ({ setLinks, setSection }) => {
	const [hover, setHover] = useState("");
	const [instagram, setInstagram] = useState(false);
	const [twitter, setTwitter] = useState(false);
	const [facebook, setFacebook] = useState(false);
	const [linkedin, setLinkedin] = useState(false);
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
	useEffect(() => {
		setLinks(document.querySelectorAll("#link"));
	}, []);

	useEffect(() => {
		setSection("");
	}, []);
	return (
		<div className='flex flex-col  w-screen h-screen relative z-[10] justify-center items-center'>
			<div className='w-[70vw]'>
				<div className='flex justify-between items-center'>
					<div className='w-[300px]'>
						<div>Avaliable for work</div>
					</div>
					<div className='w-[500px]'>
						<h1 className='font-["helvetica-extended"] text-[48px] leading-[40px]'>samuel@deyemi.dev</h1>
					</div>
				</div>
				<div className='flex justify-between mt-[80px] items-start'>
					<div className='w-[300px]'>
						<div className='font-["helvetica-extended"] text-[24px] w-[300px]'>Mainstreet, kangaroo point Brisbane, 4169.</div>
					</div>
					<div className='w-[500px] flex flex-col gap-3'>
						{/* ------------------------------------------------------- */}
						<div
							id='link'
							onMouseEnter={() => setHover("instagram")}
							onMouseLeave={() => setHover("")}
							className='flex items-center font-["helvetica-extended"] cursor-pointer gap-1 w-[170px] justify-between'
						>
							<div className='h-[40px]'>
								<h1 className='text-[24px] font-[400] '>Instagram</h1>
							</div>
							<motion.div variants={hover === "instagram" ? hoverVariant : variant} animate='default' transition={{ ease: "easeOut", duration: 0.3 }}>
								<FiArrowUpRight size={22} className='mt-[-5px]' />
							</motion.div>
						</div>
						{/* ------------------------------------------------------- */}
						<div
							id='link'
							onMouseEnter={() => setHover("twitter")}
							onMouseLeave={() => setHover("")}
							className='flex items-center font-["helvetica-extended"] cursor-pointer gap-1 w-[170px] justify-between'
						>
							<div className='h-[40px]'>
								<h1 className='text-[24px] font-[400] '>Twitter</h1>
							</div>
							<motion.div variants={hover === "twitter" ? hoverVariant : variant} animate='default' transition={{ ease: "easeOut", duration: 0.3 }}>
								<FiArrowUpRight size={22} className='mt-[-5px]' />
							</motion.div>
						</div>
						{/* ------------------------------------------------------- */}
						<div
							id='link'
							onMouseEnter={() => setHover("facebook")}
							onMouseLeave={() => setHover("")}
							className='flex items-center font-["helvetica-extended"] cursor-pointer gap-1 w-[170px] justify-between'
						>
							<div className='h-[40px]'>
								<h1 className='text-[24px] font-[400] '>Facebook</h1>
							</div>
							<motion.div variants={hover === "facebook" ? hoverVariant : variant} animate='default' transition={{ ease: "easeOut", duration: 0.3 }}>
								<FiArrowUpRight size={22} className='mt-[-5px]' />
							</motion.div>
						</div>
						{/* ------------------------------------------------------- */}
						<div
							id='link'
							onMouseEnter={() => setHover("linkedin")}
							onMouseLeave={() => setHover("")}
							className='flex items-center font-["helvetica-extended"] cursor-pointer gap-1 w-[170px] justify-between'
						>
							<div className='h-[40px]'>
								<h1 className='text-[24px] font-[400] '>Linkedin</h1>
							</div>
							<motion.div variants={hover === "linkedin" ? hoverVariant : variant} animate='default' transition={{ ease: "easeOut", duration: 0.3 }}>
								<FiArrowUpRight size={22} className='mt-[-5px]' />
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
