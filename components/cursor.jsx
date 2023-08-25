import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/router";

const Cursor = ({ links, mouseHoverColor, mouseColor }) => {
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});
	const router = useRouter();
	const [mouseHover, setMouseHover] = useState(false);
	const [portfolioHover, setPortfolioHover] = useState(false);
	// const [linkz, setLinks] = useState();
	// var links = null;

	useEffect(() => {
		links = document.querySelectorAll("#link");
	}, [mouseHover, router.asPath]);

	useEffect(() => {
		const portfolios = document.querySelectorAll("#portfolio");
		const circle = document.querySelector("#bg-circle");

		const mouseMove = (e) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
			circle.animate(
				{
					left: `${e.clientX - 200}px`,
					top: `${e.clientY - 200}px`,
				},
				{ duration: 20000, fill: "forwards" }
			);
		};
		const mouseEnter = () => {
			setMouseHover(true);
		};

		const mouseLeave = () => {
			setMouseHover(false);
		};

		const mouseEnterP = () => {
			setMouseHover(true);
			setPortfolioHover(true);
		};
		const mouseLeaveP = () => {
			setMouseHover(false);
			setPortfolioHover(false);
		};

		window.addEventListener("mousemove", mouseMove);

		links.forEach((link) => {
			link.addEventListener("mouseenter", mouseEnter);
			link.addEventListener("mouseleave", mouseLeave);
		});

		portfolios.forEach((portfolio) => {
			portfolio.addEventListener("mouseenter", mouseEnterP);
			portfolio.addEventListener("mouseleave", mouseLeaveP);
		});

		return () => {
			window.removeEventListener("mousemove", mouseMove);
			//
			links.forEach((link) => {
				link.removeEventListener("mouseenter", mouseEnter);
				link.removeEventListener("mouseleave", mouseLeave);
			});
			portfolios.forEach((portfolio) => {
				portfolio.removeEventListener("mouseenter", mouseEnterP);
				portfolio.removeEventListener("mouseleave", mouseLeaveP);
			});
		};
	}, [router.asPath]);

	useEffect(() => {
		console.log("useEffect fired!", { asPath: router.asPath });
	}, [router.asPath]);

	const variants = {
		default: {
			x: mousePosition.x - 8,
			y: mousePosition.y - 8,
		},
	};
	const hoverVariants = {
		default: {
			x: mousePosition.x - 8,
			y: mousePosition.y - 8,
			scale: 3,
		},
	};
	return (
		<>
			<motion.div
				className='bg-white fixed w-[16px] h-[16px] top-0 left-0 z-[10000] hidden lg:flex justify-center items-center pointer-events-none rounded-[100px] mix-blend-difference'
				variants={mouseHover ? hoverVariants : variants}
				animate='default'
				transition={{ ease: "easeOut", duration: 0.3 }}
			>
				{portfolioHover ? <FiArrowUpRight size={8} className='text-black' /> : ""}
			</motion.div>
			<motion.div
				id='bg-circle'
				className={
					"hidden lg:block fixed w-[300px] h-[300px] top-0 left-0 z-[2] pointer-events-none rounded-[50%] " +
					(mouseHover ? mouseHoverColor : mouseColor)
				}
				initial={{ rotate: 0, skew: 1 }}
				animate={{ rotate: 360, skew: 15 }}
				transition={{ ease: "easeOut", duration: 20, repeat: Infinity }}
			/>
		</>
	);
};

export default Cursor;
