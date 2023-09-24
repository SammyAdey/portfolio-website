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
		" In addition to my design skills, i am also a proficient software engineer. I have a deep understanding of various programming languages, frameworks, and platforms, which enables them to develop custom software solutions that meet clients specific needs. I also have a keen interest in creating machine learning models for analysing big data. ";

	return (
		<div className='flex flex-col h-screen w-screen relative z-[10] m-auto py-[7rem] lg:py-[10rem] items-center '>
			<h1 className='font-["shallota"] leading-[40px] text-[60px] lg:text-[120px] text-black font-[500] lg:pt-20 pb-20'>Agrify</h1>
			<InfoSection company='GidiCruise' role='Design + Development' completed='On Going' url='www.agrifyafrica.xyz' />
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
