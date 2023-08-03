import Cursor from "@/components/cursor";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { AnimatePresence } from "framer-motion";

import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
	const [links, setLinks] = useState();
	const [isProjects, setIsProjects] = useState(false);
	// var links;
	const router = useRouter();
	const [section, setSection] = useState("");

	useEffect(() => {
		if (router.pathname.includes("projects/")) {
			setIsProjects(true);
		} else {
			setIsProjects(false);
		}
	}, [router.pathname]);

	return (
		<>
			<Cursor links={links} />
			<Navbar isProjects={isProjects} setLinks={setLinks} />
			<AnimatePresence>
				<Component setSection={setSection} setIsProjects={setIsProjects} setLinks={setLinks} key={router.pathname} {...pageProps} />
				<div className='flex w-screen h-screen fixed top-0 left-0 z-[2] backdrop-blur-[200px]'></div>
				{isProjects ? <div className='flex w-screen h-screen fixed top-0 left-0 bg-white'></div> : ""}
			</AnimatePresence>
			<Footer section={section} isProjects={isProjects} />
		</>
	);
}
