import { useState, useEffect, useRef } from "react";
import InfoSection from "/components/portfolios/info";
import { Hero, TwoColumn, OneColumn, Fullscreen } from "/components/portfolios/imgSections";
import NextProject from "/components/portfolios/nextProject";
import IntroText from "../../components/portfolios/textSections";

const AboutPage = ({ setLinks, setSection, setIsProjects }) => {
	const [hover, setHover] = useState(false);
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
			<h1 className='font-["shallota"] leading-[40px] text-[60px] lg:text-[120px] text-black font-[500] pt-0 lg:pt-20 pb-10 lg:pb-20'>LTT LABS</h1>
			<InfoSection company='Linus Tech Tips' role='Design + Development' completed='On Going' url='coming soon' />
			<Hero img='/portfolio/lttlabs/hero.jpeg' />

			<hr className='mt-[100px] lg:mt-[250px]' />

			<IntroText text={introText} />

			<hr className='mt-[100px] lg:mt-[250px]' />

			<TwoColumn img1='/portfolio/lttlabs/c1.jpg' img2='/portfolio/lttlabs/c2.jpg' />

			<OneColumn img='/portfolio/lttlabs/fw.jpg' />

			<TwoColumn img1='/portfolio/lttlabs/c4.jpg' img2='/portfolio/lttlabs/c3.jpg' />

			<hr className='mt-[100px] lg:mt-[250px]' />

			{/* <Fullscreen img='/portfolio/lttlabs/full.jpg' /> */}

			<NextProject title='Gidicruise' role='UI/UX' link='gidicruise' isVideo={true} image='/portfolio/gidicruise.mp4' />
		</div>
	);
};

export default AboutPage;
