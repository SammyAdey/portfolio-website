import { useState, useEffect, useRef } from "react";
import InfoSection from "/components/portfolios/info";
import { Hero, TwoColumn, OneColumn, Fullscreen } from "/components/portfolios/imgSections";
import NextProject from "/components/portfolios/nextProject";
import IntroText from "../../components/portfolios/textSections";

const MlPercussions = ({ setLinks, setSection }) => {
	const menuRef = useRef(null);

	useEffect(() => {
		setLinks(document.querySelectorAll("#link"));
	}, []);

	useEffect(() => {
		setSection("projects");
	}, []);

	const introText =
		" In addition to my design skills, i am also a proficient software engineer. I have a deep understanding of various programming languages, frameworks, and platforms, which enables them to develop custom software solutions that meet clients specific needs. I also have a keen interest in creating machine learning models for analysing big data. ";

	return (
		<div className='flex flex-col h-screen w-screen relative z-[10] m-auto py-[7rem] lg:py-[10rem] items-center '>
			<h1 className='font-["shallota"] leading-[40px] text-[60px] lg:text-[120px] text-black font-[500] pt-20 pb-20'>Ml Percussions</h1>
			<InfoSection company='Ml Percussions' role='Design + Development' completed='On Going' url='www.mlpercussions.com' />
			<Hero img='/portfolio/mlpercussions/hero.jpg' />

			<hr className='mt-[250px]' />
			<IntroText text={introText} />
			<hr className='mt-[250px]' />

			<OneColumn img='/portfolio/mlpercussions/c2.png' />
			<OneColumn img='/portfolio/mlpercussions/c4.png' />
			<OneColumn img='/portfolio/mlpercussions/c3.png' />
			<hr className='mt-[250px]' />

			<Fullscreen img='/portfolio/mlpercussions/c6.jpg' />

			<NextProject title='Rivet App' role='UI/UX' link='/projects/rivet' isVideo={false} image='/portfolio/card.jpg' />
		</div>
	);
};

export default MlPercussions;
