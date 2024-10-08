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
		" At LTT Labs, I was tasked with designing an innovative product comparison website. My goal was to create a modern, intuitive platform that effectively presents complex graphs and data in an easily digestible manner, moving away from the outdated designs commonly seen in this space. This involved developing a clean, user-friendly interface that seamlessly integrates visual data representations, ensuring users can effortlessly compare products and understand detailed information. By focusing on clarity, usability, and visual appeal, I helped LTT Labs deliver a cutting-edge tool that enhances the user experience and sets a new standard for product comparison websites. ";

	return (
		<div className='flex flex-col h-screen w-screen relative z-[10] m-auto py-[7rem] lg:py-[10rem] items-center '>
			<h1 className='font-["shallota"] leading-[40px] text-[60px] lg:text-[120px] text-black font-[500] pt-0 lg:pt-20 pb-10 lg:pb-20'>
				LTT LABS{" "}
				<span className='w-[25px] h-[25px] bg-gradient-to-r from-orange-600 to-pink-700'>
					<span className='bg-gradient-to-r from-orange-700 to-rose-700'></span>
				</span>
			</h1>
			<InfoSection company='Linus Tech Tips' role='UI/UX' completed='On Going' url='www.lttlabs.com' />
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
