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
		" I collaborated with ML Percussion to design and build a stunning e-commerce website that authentically reflects their Nigerian heritage. My role involved creating a visually appealing and user-friendly online store that showcases ML Percussion's unique percussion instruments. The design process focused on incorporating elements of Nigerian culture and aesthetics, ensuring that the website not only appeals to a global audience but also resonates deeply with local customers. By blending traditional Nigerian motifs with modern design principles, I helped ML Percussion establish a strong online presence that highlights their craftsmanship and cultural roots. The result is an engaging and immersive shopping experience that celebrates the rich musical heritage of Nigeria. ";

	return (
		<div className='flex flex-col h-screen w-screen relative z-[10] m-auto py-[7rem] lg:py-[10rem] items-center '>
			<h1 className='font-["shallota"] leading-[40px] text-[60px] lg:text-[120px] text-black font-[500] pt-20 pb-20'>Ml Percussions</h1>
			<InfoSection company='Ml Percussions' role='Design + Development' completed='Feb 2022' url='www.mlpercussions.com' />
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
