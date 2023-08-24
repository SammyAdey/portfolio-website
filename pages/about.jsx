import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CV from "/components/cv";

const AboutPage = ({ setLinks, setSection }) => {
	useEffect(() => {
		setLinks(document.querySelectorAll("#link"));
	}, []);

	useEffect(() => {
		setSection("");
	}, []);

	return (
		<div className='flex flex-col h-screen relative z-[10] lg:w-[70vw] m-auto py-[10rem] items-center '>
			<h1 className=' font-["helvetica-extended"] leading-[40px] text-[70px] font-[500] my-20 pb-10'>
				ABOUT <span className='w-[70vw] font-["shallota"] leading-[64px] text-[120px]'>me</span>
			</h1>
			<div className='flex justify-between'>
				<div className='w-[48%] font-["helvetica-extended"] text-[28px] text-[#B9B9B9]'>
					Hi i am Samuel Adeyemi, a highly skilled web designer and software engineer based in Brisbane, Australia. With 6 years of experience in the
					industry. <br /> <br />I am dedicated to creating visually stunning and user-friendly websites that effectively communicate clients' brands
					and messages. Their design approach is always client-focused and aims to create a seamless user experience. <br />
					<br />
					In addition to my design skills, i am also a proficient software engineer. They have a deep understanding of various programming languages,
					frameworks, and platforms, which enables them to develop custom software solutions that meet clients' specific needs.
				</div>
				<div className='w-[48%]'>
					<Image className='sticky top-10' alt='my profile' src='/gifs/profile.gif' width={1440} height={1440} />
				</div>
			</div>
			<div className='flex w-full justify-between mt-[250px]'>
				<div>
					<h1 className='font-["helvetica-extended"] leading-[36px] text-[36px]'>design &</h1>
					<h1 className='font-["shallota"] text-[50px]'>development</h1>
					<p className='mt-[-20px] text-[#B9B9B9]'>experience</p>
				</div>
				<div className='w-[70%]'>
					<table className='table-fixed w-full'>
						<thead>
							<tr className='border-b-2 border-[#9A9A9A] h-[30px] '></tr>
						</thead>
						<tbody>
							{CV.map((job, i) => (
								<tr key={i} className='border-b-2 border-[#9A9A9A] h-[30px] '>
									<td className='text-[14px] text-[#ADADAD]'>{job.date}</td>
									<td className='font-["helvetica-extended"] font-[500] text-[24px] py-[40px]'>{job.position}</td>
									<td className='text-right text-[18px]'>{job.company}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<div className='flex w-full justify-between mt-[250px]'>
				<div>
					<h1 className='font-["helvetica-extended"] leading-[36px] text-[36px]'>skills &</h1>
					<h1 className='font-["shallota"] text-[50px]'>software</h1>
					<p className='mt-[-20px] text-[#B9B9B9]'>my Obsessions</p>
				</div>
				<div className='w-[70%]'>
					<div className='text-[28px] text-[#B9B9B9] flex flex-col gap-3'>
						<p>React</p>
						<p>Next Js</p>
						<p>Solidity</p>
						<p>Python</p>
						<p>Photoshop</p>
						<p>Illustrator</p>
						<p>Indesign</p>
						<p>Figma</p>
						<p>After Effects</p>
						<p>Data Analytics</p>
						<p>Graphic Design</p>
						<p>Motion Graphics</p>
					</div>
				</div>
			</div>
			<div className='flex w-full justify-between mt-[250px] pb-[250px]'>
				<div>
					<h1 className='font-["helvetica-extended"] leading-[36px] text-[36px]'>skills &</h1>
					<h1 className='font-["shallota"] text-[50px]'>software</h1>
					<p className='mt-[-20px] text-[#B9B9B9]'>my Obsessions</p>
				</div>
				<div className='w-[70%]'>
					<p className='text-[28px] text-[#B9B9B9]'>
						In addition to my design skills, i am also a proficient software engineer. I have a deep understanding of various programming languages,
						frameworks, and platforms, which enables them to develop custom software solutions that meet clients' specific needs. I also have a keen
						interest in creating machine learning models for analysing big data.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
