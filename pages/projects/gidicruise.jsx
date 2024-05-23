import { useState, useEffect, useRef } from "react";
import InfoSection from "/components/portfolios/info";
import { Hero, TwoColumn, OneColumn, Fullscreen } from "/components/portfolios/imgSections";
import NextProject from "/components/portfolios/nextProject";
import IntroText from "../../components/portfolios/textSections";

const AboutPage = ({ setLinks, setSection }) => {
	const [hover, setHover] = useState(false);
	const menuRef = useRef(null);

	useEffect(() => {
		setLinks(document.querySelectorAll("#link"));
	}, []);

	useEffect(() => {
		setSection("projects");
	}, []);

	const introText =
		" Every year, my friends and I host an end-of-year party called Gidicruise, which attracts over 2,000 attendees. This event allows me to flex my creative muscles as I am responsible for all visuals, from branding and promotional videos to the website, social media graphics, banners, and billboard ads. It also serves as an excellent opportunity to showcase my project management skills through event planning and resource management. ";

	return (
		<div className='flex flex-col h-screen w-screen relative z-[10] m-auto py-[7rem] lg:py-[10rem] items-center '>
			<h1 className='font-["shallota"] leading-[40px] text-[60px] lg:text-[120px] text-black font-[500] pt-0 lg:pt-20 pb-10 lg:pb-20'>
				GidiCruise
				<span className='bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500'>
					<span className='bg-gradient-to-r from-rose-300 via-fuchsia-400 to-indigo-400'></span>
				</span>
			</h1>
			<InfoSection company='GidiCruise' role='Design + Development' completed='Dec 2023' url='www.gidicruise.com' />
			<Hero img='/portfolio/gidicruise/Hero.jpg' />

			<hr className='mt-[100px] lg:mt-[250px]' />

			<IntroText text={introText} />

			<hr className='mt-[10px] lg:mt-[250px]' />

			<TwoColumn img1='/portfolio/gidicruise/c1.jpg' img2='/portfolio/gidicruise/c2.jpg' />

			<OneColumn img='/portfolio/gidicruise/c5.jpg' />

			<TwoColumn img1='/portfolio/gidicruise/c3.jpg' img2='/portfolio/gidicruise/c4.jpg' />

			<hr className='mt-[100px] lg:mt-[250px]' />

			<Fullscreen img='/portfolio/gidicruise/fullv2.jpg' />

			<NextProject
				title='Agrify'
				role='Web Development, Blockchain Development'
				link='/projects/agrify'
				isVideo={false}
				image='/portfolio/agrify.jpeg'
			/>
		</div>
	);
};

export default AboutPage;
