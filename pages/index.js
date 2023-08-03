import { Inter } from "@next/font/google";
import { useEffect, useState, useRef } from "react";
import About from "@/components/about";
import Project from "/components/projects";
import { motion } from "framer-motion";
import Landing from "@/components/landing";
import AboutHover from "@/components/aboutHover";
import Contact from "/components/contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ setSection }) {
	var current = 0;
	var target = 0;
	const ease = 1;
	const [windowWidth, setWindowWidth] = useState(0);
	const [hover, setHover] = useState("");
	const lerp = (start, end, t) => {
		return start * (1 - t) + end * t;
	};

	const setTransform = (el, transform) => {
		el.style.transform = transform;
	};

	const [isComponentVisible, setIsComponentVisible] = useState(false);
	const projectRef = useRef(null);
	const landingRef = useRef(null);
	const aboutRef = useRef(null);
	const contactRef = useRef(null);
	useEffect(() => {
		const landingObserver = new IntersectionObserver(
			([landing]) => {
				if (landing.isIntersecting) {
					setSection("");
				}
			},
			{ threshold: 0.25 } // Adjust the threshold value as needed
		);

		const aboutObserver = new IntersectionObserver(
			([about]) => {
				if (about.isIntersecting) {
					setSection("about");
				}
			},
			{ threshold: 0.25 } // Adjust the threshold value as needed
		);

		const projectObserver = new IntersectionObserver(
			([project]) => {
				if (project.isIntersecting) {
					setSection("projects");
				}
			},
			{ threshold: 0.25 } // Adjust the threshold value as needed
		);

		const contactObserver = new IntersectionObserver(
			([contact]) => {
				if (contact.isIntersecting) {
					setSection("contact");
				}
			},
			{ threshold: 0.25 } // Adjust the threshold value as needed
		);

		if (landingRef.current) {
			landingObserver.observe(landingRef.current);
		}
		if (aboutRef.current) {
			aboutObserver.observe(aboutRef.current);
		}
		if (projectRef.current) {
			projectObserver.observe(projectRef.current);
		}
		if (contactRef.current) {
			contactObserver.observe(contactRef.current);
		}

		return () => {
			if (landingRef.current) {
				landingObserver.unobserve(landingRef.current);
			}
			if (aboutRef.current) {
				aboutObserver.unobserve(aboutRef.current);
			}
			if (projectRef.current) {
				projectObserver.unobserve(projectRef.current);
			}
			if (contactRef.current) {
				contactObserver.unobserve(contactRef.current);
			}
		};
	}, []);

	useEffect(() => {
		const slider = document.querySelector("#slider");
		const bodyHeight = document.body.style.height;
		const sliderWidth = slider.scrollWidth;
		const changeWindowWidth = () => {
			setWindowWidth(window.innerWidth);
		};

		document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
		const animate = () => {
			current = parseFloat(lerp(current, target, ease)).toFixed(2);
			target = window.scrollY;
			// console.log(window.scrollY);
			setTransform(slider, `translateX(-${target}px)`);
			requestAnimationFrame(animate);
		};
		animate();

		window.addEventListener("resize", changeWindowWidth);

		return () => {
			window.removeEventListener("resize", changeWindowWidth);
			document.body.style.height = bodyHeight;
		};
	}, [windowWidth]);
	return (
		<>
			<div className='top-0 left-0 w-full fixed h-screen z-[10]'>
				<div id='slider' className='absolute top-0 ease-out duration-500 left-0 h-100%'>
					<div id='slider-inner' className='absolute flex top-0 w-fit h-100%'>
						<Landing landingRef={landingRef} setSection={setSection} />
						<About aboutRef={aboutRef} setSection={setSection} hover={hover} setHover={setHover} />
						<Project projectRef={projectRef} setSection={setSection} />
						<Contact contactRef={contactRef} setSection={setSection} />
					</div>
				</div>
			</div>
			<AboutHover hover={hover} setHover={setHover} />
		</>
	);
}
