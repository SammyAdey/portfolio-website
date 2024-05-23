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
		"Rivet is a tech startup dedicated to helping creators expand their audiences. My role involved a comprehensive redesign of their platform, alongside designing and conceptualizing new features. The main challenge was to transform complex functionalities, often involving intricate steps, into a user-friendly and intuitive interface. For this, i created designs that enhanced user experience and ensure seamless interaction with the platform's advanced features. ";

	const introText2 =
		"Being part of a startup, I often wore multiple hats. I created graphics that served as templates for the output of new features and developed promotional videos for social media to promote these features. ";

	return (
		<div className='flex flex-col h-screen w-screen relative z-[10] m-auto py-[10rem] items-center '>
			<h1 className='font-["shallota"] leading-[40px] text-[60px] lg:text-[120px] text-black font-[500] pt-20 pb-20'>Rivet App</h1>
			<InfoSection company='Rivet Co' role='UI/UX' completed='Jan 2023' url='rivet.app' />
			<Hero img='/portfolio/rivet/hero.jpg' />

			<hr className='mt-[250px]' />
			<IntroText text={introText} />
			<hr className='mt-[250px]' />
			<TwoColumn img1='/portfolio/rivet/1.jpg' img2='/portfolio/rivet/2.jpg' />
			<OneColumn img='/portfolio/rivet/fw1.jpg' />
			<TwoColumn img1='/portfolio/rivet/3.jpg' img2='/portfolio/rivet/4.jpg' />
			<hr className='mt-[250px]' />
			<IntroText text={introText2} />
			<hr className='mt-[250px]' />

			{/* <OneColumn img='/portfolio/rivet/fw2.jpg' /> */}
			<TwoColumn img1='/portfolio/rivet/5.jpg' img2='/portfolio/rivet/6.jpg' />
			<hr className='mt-[250px]' />

			<Fullscreen img='/portfolio/rivet/fw3.jpg' />

			<NextProject title='Floatplane' role='UI/UX' link='/projects/floatplane' isVideo={false} image='/portfolio/floatplane.jpg' />
		</div>
	);
};

export default MlPercussions;
