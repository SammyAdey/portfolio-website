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
		" At Floatplane, I was entrusted with the complete overhaul of the user interface for both the landing page and the app platform. My objective was to revitalize the visual design and enhance the overall user experience. For the landing page, I crafted a modern, intuitive, and visually appealing layout that effectively communicated Floatplane's unique value proposition and engaged visitors from the moment they arrived. For the app platform, I redesigned the interface to be more user-friendly, streamlined, and aesthetically cohesive, ensuring a seamless and enjoyable experience for users. This comprehensive UI transformation involved close collaboration with stakeholders, iterative design processes, and meticulous attention to detail to align the new design with Floatplane's brand identity and user needs. ";

	return (
		<div className='flex flex-col h-screen w-screen relative z-[10] m-auto py-[7rem] lg:py-[10rem] items-center '>
			<h1 className='font-["shallota"] leading-[40px] text-[60px] lg:text-[120px] text-black font-[500] pt-0 lg:pt-20 pb-10 lg:pb-20'>
				Floatplane
				<span className='bg-gradient-to-r from-sky-400 to-blue-500'>
					<span className='bg-gradient-to-r from-sky-600 to-blue-700'></span>
				</span>
			</h1>
			<InfoSection company='Floatplane Inc' role='Design + Development' completed='Apr 2024' url='www.floatplane.com' />
			<Hero img='/portfolio/floatplane/1.jpg' />

			<hr className='mt-[150px] lg:mt-[250px]' />

			<IntroText text={introText} />

			<hr className='mt-[150px] lg:mt-[250px]' />

			<TwoColumn img1='/portfolio/floatplane/6.jpg' img2='/portfolio/floatplane/7.jpg' />

			<OneColumn img='/portfolio/floatplane/8.jpg' />

			<hr className='mt-[150px] lg:mt-[250px]' />

			<Fullscreen img='/portfolio/floatplane/2.jpg' />

			<NextProject title='LTT Labs' role='UI/UX' link='ltt-labs' isVideo={false} image='/portfolio/labs.jpg' />
		</div>
	);
};

export default AboutPage;
