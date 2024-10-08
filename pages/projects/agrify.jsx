import { useState, useEffect, useRef } from "react";
import InfoSection from "/components/portfolios/info";
import { Hero, TwoColumn, OneColumn, Fullscreen } from "/components/portfolios/imgSections";
import NextProject from "/components/portfolios/nextProject";
import IntroText from "../../components/portfolios/textSections";

const MlPercussions = ({ setLinks, setSection, setIsProjects }) => {
	const menuRef = useRef(null);

	useEffect(() => {
		setLinks(document.querySelectorAll("#link"));
	}, []);

	useEffect(() => {
		setSection("projects");
	}, []);

	useEffect(() => {
		const menuObserver = new IntersectionObserver(
			([menu]) => {
				if (menu.isIntersecting) {
					setIsProjects(false);
				} else {
					setIsProjects(true);
				}
			},
			{ threshold: 1 } // Adjust the threshold value as needed
		);

		if (menuRef.current) {
			menuObserver.observe(menuRef.current);
		}

		return () => {
			if (menuRef.current) {
				menuObserver.unobserve(menuRef.current);
			}
		};
	}, []);

	const introText =
		" Agrify is an innovative platform designed to support farmers in adopting regenerative farming techniques and selling their produce as NFTs. At Agrify, I  built the platform's landing page and blockchain-based marketplace. The landing page was designed to be engaging and informative, effectively communicating Agrify's mission and attracting both farmers and buyers. The marketplace utilized cutting-edge blockchain technology to facilitate secure and transparent transactions, allowing farmers to tokenize their produce and sell it as unique digital assets. My work involved creating a seamless user experience, integrating blockchain functionality, and ensuring the platform's overall aesthetic aligned with Agrify's brand vision. ";

	return (
		<div className='flex flex-col h-screen w-screen relative z-[10] m-auto py-[7rem] lg:py-[10rem] items-center '>
			<h1 className='font-["shallota"] leading-[40px] text-[60px] lg:text-[120px] text-black font-[500] lg:pt-20 pb-20'>
				Agrify{" "}
				<span className='bg-gradient-to-r from-green-500 to-green-700'>
					<span className='bg-gradient-to-r from-green-400 to-green-600'></span>
				</span>
			</h1>
			<InfoSection company='Agrify' role='Frontend Development' completed='Feb 2024' url='www.agrifyafrica.xyz' />
			<Hero img='/portfolio/agrify/hero.jpg' />

			<hr className='mt-[150px] lg:mt-[250px]' />

			<IntroText text={introText} />

			<hr className='mt-[50px] lg:mt-[250px]' />
			<TwoColumn img1='/portfolio/agrify/c1.jpg' img2='/portfolio/agrify/c2.jpg' />
			<OneColumn img='/portfolio/agrify/fw.jpg' />
			<hr className='mt-[150px] lg:mt-[250px]' />

			<NextProject
				title='Ml-Percussions'
				role='UI/UX'
				link='/projects/ml-percussion'
				isVideo={true}
				image='/portfolio/wood-chipping.mp4'
				setIsProjects={setIsProjects}
			/>
		</div>
	);
};

export default MlPercussions;
