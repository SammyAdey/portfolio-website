import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const Menu = ({ setLinks, menuToggle, setMenuToggle }) => {
	const [hover, setHover] = useState("");
	const [home, setHome] = useState("");
	const [about, setAbout] = useState("");
	const [projects, setProjects] = useState("");
	const [contact, setContact] = useState("");
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});
	const menuOpen = {
		default: {
			y: "0%",
		},
	};

	const menuClosed = {
		default: {
			y: "-100%",
		},
	};

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
	}, []);

	useEffect(() => {
		setLinks(document.querySelectorAll("#link"));
	}, []);

	useEffect(() => {
		const opacity = "opacity-[0.3]";
		if (hover === " ") {
			setHome("");
			setAbout("");
			setContact("");
			setProjects("");
		}
		if (hover === "home") {
			setAbout(opacity);
			setContact(opacity);
			setProjects(opacity);
		}
		if (hover === "about") {
			setHome(opacity);
			setContact(opacity);
			setProjects(opacity);
		}
		if (hover === "projects") {
			setHome(opacity);
			setContact(opacity);
			setAbout(opacity);
		}
		if (hover === "contact") {
			setHome(opacity);
			setAbout(opacity);
			setProjects(opacity);
		}
	}, [hover]);

	return (
		<motion.div
			initial={{ y: "-100%" }}
			variants={menuToggle ? menuOpen : menuClosed}
			animate='default'
			transition={{ ease: "easeOut", duration: 1 }}
			className='flex flex-col w-screen h-screen justify-center bg-[#070708] items-center fixed top-0 left-0 pb-8 px-[50px] z-[100]'
		>
			<div className='flex h-[80px] overflow-hidden items-center'>
				<Link href='/'>
					<h1
						id='link'
						onMouseEnter={() => setHover("home")}
						onMouseLeave={() => setHover(" ")}
						onClick={() => setMenuToggle(false)}
						className={'text-[60px] font-["helvetica-extended"] font-[500] ' + home}
					>
						Home
					</h1>
				</Link>
				<span className={'text-[60px] font-["helvetica-extended"] ml-[20px] ' + home}> //</span>
				<Link href='/about'>
					<h1
						id='link'
						onMouseEnter={() => setHover("about")}
						onMouseLeave={() => setHover(" ")}
						onClick={() => setMenuToggle(false)}
						className={'text-[80px] ml-[20px] mb-[-30px] font-["shallota"] ' + about}
					>
						About Me
					</h1>
				</Link>
			</div>
			<div className='flex h-[80px] mt-[20px] overflow-hidden items-center'>
				<Link href='/projects'>
					<h1
						id='link'
						onMouseEnter={() => setHover("projects")}
						onMouseLeave={() => setHover(" ")}
						onClick={() => setMenuToggle(false)}
						className={'text-[80px] font-["shallota"] ' + projects}
					>
						Projects
					</h1>
				</Link>
				<span className={'text-[60px] font-["helvetica-extended"] ml-[20px] mt-[-25px] ' + contact}> //</span>
				<Link href='/contact'>
					<h1
						id='link'
						onMouseEnter={() => setHover("contact")}
						onMouseLeave={() => setHover(" ")}
						onClick={() => setMenuToggle(false)}
						className={'text-[60px] ml-[20px] mt-[-25px] font-["helvetica-extended"] font-[500] ' + contact}
					>
						Contact
					</h1>
				</Link>
			</div>
			<motion.div
				variants={hover === "projects" ? hoverVariants : variants}
				animate='default'
				transition={{ ease: "easeOut", duration: 0.3 }}
				className='flex fixed z-[5] top-0 left-0 pointer-events-none mix-blend-difference justify-center items-center overflow-hidden w-[300px] h-[300px] rounded-[50%] '
			>
				<Image alt='jungle fever' src='/gifs/jg_fever_medium.gif' width={300} height={100} className='rotate-[-90deg]' />
			</motion.div>
			<motion.div
				variants={hover === "contact" ? hoverVariants : variants}
				animate='default'
				transition={{ ease: "easeOut", duration: 0.3 }}
				className='flex fixed z-[5] top-0 left-0 pointer-events-none mix-blend-difference justify-center items-center overflow-hidden w-[300px] h-[300px] rounded-[50%] '
			>
				<Image alt='phone ringing' src='/gifs/contact.gif' width={480} height={317} className='w-[600px] h-[317px]' />
			</motion.div>
			<motion.div
				variants={hover === "about" ? hoverVariants : variants}
				animate='default'
				transition={{ ease: "easeOut", duration: 0.3 }}
				className='flex fixed z-[5] top-0 left-0 pointer-events-none mix-blend-difference justify-center items-center overflow-hidden w-[300px] h-[300px] rounded-[50%] '
			>
				<Image alt='my profile' src='/gifs/profile.gif' width={600} height={317} className='w-[600px] h-[317px]' />
			</motion.div>
		</motion.div>
	);
};

export default Menu;
