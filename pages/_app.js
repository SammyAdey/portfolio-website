import Cursor from "/components/cursor";
import Footer from "/components/footer";
import Navbar from "/components/navbar";
import { AnimatePresence } from "framer-motion";

import "/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCursorColor, getCursorHoverColor } from "../utils/cursorColor";

export default function App({ Component, pageProps }) {
	const [links, setLinks] = useState();
	const [isProjects, setIsProjects] = useState(false);
	const [mouseColor, setMouseColor] = useState("bg-gradient-to-r from-green-600 via-blue-600 to-purple-600");
	const [mouseHoverColor, setMouseHoverColor] = useState("bg-gradient-to-r from-green-500 via-blue-500 to-purple-600");
	// var links;
	const router = useRouter();
	const [section, setSection] = useState("");

	useEffect(() => {
		if (router.pathname.includes("projects/")) {
			setIsProjects(true);
		} else {
			setIsProjects(false);
		}

		setMouseColor(getCursorColor(router.pathname));
		setMouseHoverColor(getCursorHoverColor(router.pathname));
		console.log(getCursorHoverColor(router.pathname));
	}, [router.pathname]);

	return (
		<>
			<Cursor mouseColor={mouseColor} mouseHoverColor={mouseHoverColor} links={links} />
			<Navbar isProjects={isProjects} setLinks={setLinks} />
			<AnimatePresence>
				<Component setSection={setSection} setIsProjects={setIsProjects} setLinks={setLinks} key={router.pathname} {...pageProps} />
				<div
					className={"hidden lg:flex w-screen h-screen fixed top-0 left-0 z-[3] " + (isProjects ? "backdrop-blur-[130px]" : "backdrop-blur-[200px]")}
				></div>
				{isProjects ? <div className='flex w-screen h-screen fixed  top-0 left-0 bg-white'></div> : ""}
			</AnimatePresence>
			<Footer section={section} isProjects={isProjects} />
		</>
	);
}
