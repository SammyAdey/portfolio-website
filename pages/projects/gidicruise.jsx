import { useState, useEffect, useRef } from "react";
import InfoSection from "/components/portfolios/info";
import { Hero, TwoColumn, OneColumn, Fullscreen } from "/components/portfolios/imgSections";
import NextProject from "/components/portfolios/nextProject";

const AboutPage = ({ setLinks, setSection }) => {
	const [hover, setHover] = useState(false);
	const menuRef = useRef(null);

	useEffect(() => {
		setLinks(document.querySelectorAll("#link"));
	}, []);

	useEffect(() => {
		setSection("projects");
	}, []);

	return (
		<div className='flex flex-col h-screen w-screen relative z-[10] m-auto py-[7rem] lg:py-[10rem] items-center '>
			<h1 className='font-["shallota"] leading-[40px] text-[60px] lg:text-[120px] text-black font-[500] pt-0 lg:pt-20 pb-10 lg:pb-20'>GidiCruise</h1>
			<InfoSection company='GidiCruise' role='Design + Development' completed='On Going' url='www.gidicruise.com' />
			<Hero img='/portfolio/gidicruise/Hero.jpg' />

			<hr className='mt-[100px] lg:mt-[250px]' />

			<div className='flex flex-col lg:flex-row w-[70vw] justify-between'>
				<div className='text-center lg:text-left'>
					<h1 className='font-["helvetica-extended"] leading-[36px] text-[36px] text-black'>challenge &</h1>
					<h1 className='font-["shallota"] text-[50px] text-black'>solution</h1>
					<p className='mt-[-20px] text-[#B9B9B9] text-black'>experience</p>
				</div>
				<div className='w-[90%]'>
					<p className='text-[20px] text-center lg:text-left lg:text-[28px] text-[#B9B9B9] text-black'>
						In addition to my design skills, i am also a proficient software engineer. I have a deep understanding of various programming languages,
						frameworks, and platforms, which enables them to develop custom software solutions that meet clients' specific needs. I also have a keen
						interest in creating machine learning models for analysing big data.
					</p>
				</div>
			</div>

			<hr className='mt-[250px]' />

			<TwoColumn img1='/portfolio/gidicruise/c1.jpg' img2='/portfolio/gidicruise/c2.jpg' />

			<OneColumn img='/portfolio/gidicruise/c5.jpg' />

			<TwoColumn img1='/portfolio/gidicruise/c3.jpg' img2='/portfolio/gidicruise/c4.jpg' />

			<hr className='mt-[250px]' />

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
