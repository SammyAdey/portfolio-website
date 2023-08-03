import { motion } from "framer-motion";

const MenuIcon = ({ menuOpen, setMenuToggle, isProjects }) => {
	const topbar = {
		default: {
			rotate: 45,
		},
	};
	const bottombar = {
		default: {
			rotate: -45,
		},
	};
	const basic = {
		default: {
			rotate: 0,
		},
	};
	return (
		<div
			onClick={() => {
				setMenuToggle(!menuOpen);
			}}
			id='link'
			className='flex flex-col justify-center items-center gap-1'
		>
			<motion.div
				variants={menuOpen ? topbar : basic}
				animate='default'
				transition={{ ease: "easeOut", duration: 0.5 }}
				className={"w-[20px] h-[2px] " + (isProjects & !menuOpen ? "bg-black" : "bg-white")}
			></motion.div>
			<motion.div
				variants={menuOpen ? bottombar : basic}
				animate='default'
				transition={{ ease: "easeOut", duration: 0.5 }}
				className={" w-[20px] h-[2px] " + (menuOpen ? "m-[-6px] " : "") + (isProjects & !menuOpen ? "bg-black" : "bg-white")}
			></motion.div>
		</div>
	);
};

export default MenuIcon;
