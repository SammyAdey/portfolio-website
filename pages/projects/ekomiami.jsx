import { useState, useEffect, useRef } from "react";
import InfoSection from "/components/portfolios/info";
import { Hero, TwoColumn, OneColumn, Fullscreen } from "/components/portfolios/imgSections";
import NextProject from "/components/portfolios/nextProject";
import IntroText from "../../components/portfolios/textSections";

const Ekomiami = ({ setLinks, setSection, setIsProjects }) => {
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
		" Exhibit is an entertainment company dedicated to we are dedicated to shaping the future of Africa’s entertainment industry by creating exceptional experiences and providing innovative solutions. My work for them involved designing and building them a website that allowed their customer to purchase tickets for their events as well as a dashboard than allowed staff to monitor create edit and monitor events ";

	return (
		<div className='flex flex-col h-screen w-screen relative z-[10] m-auto py-[7rem] lg:py-[10rem] items-center '>
			<h1 className='font-["shallota"] leading-[40px] text-[60px] lg:text-[120px] text-black font-[500] lg:pt-20 pb-20'>
				Eko Miami{" "}
				<span className='bg-gradient-to-r from-green-500 to-green-700'>
					<span className='bg-gradient-to-r from-green-400 to-green-600'></span>
				</span>
			</h1>
			<InfoSection company='gidicruise' role='Design & Development' completed='dec 2024' url='https://gidicruise.com' />
			<Hero img='/portfolio/ekomiami/3.png' />

			<hr className='mt-[150px] lg:mt-[250px]' />

			<IntroText text={introText} />

			<hr className='mt-[50px] lg:mt-[250px]' />
			<OneColumn img='/portfolio/ekomiami/1.png' />
			<TwoColumn img1='/portfolio/ekomiami/2.jpg' img2='/portfolio/ekomiami/djs/Atobz.jpg' />
			<TwoColumn img1='/portfolio/ekomiami/djs/Bowo.jpg' img2='/portfolio/ekomiami/djs/nino.jpg' />
			<TwoColumn img1='/portfolio/ekomiami/djs/Uncle-Bubu.jpg' img2='/portfolio/ekomiami/djs/tdr.jpg' />
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

export default Ekomiami;
