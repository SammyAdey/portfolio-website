import { useEffect, useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./menu";
import MenuIcon from "./menuIcon";

const Navbar = ({ setLinks, isProjects }) => {
	const [menuToggle, setMenuToggle] = useState(false);

	return (
		<>
			<div className={"flex w-full h-[100px] justify-between items-center fixed top-0 pb-8 px-[50px] z-[9000] " + (isProjects ? "text-black" : "")}>
				<Link href='/'>
					<h1 id='link' className={'text-[20px] font-["helvetica-extended"] font-[500] '}>
						S <span className='text-[27px] ml-[-8px] font-["shallota"] '>A </span>
					</h1>
				</Link>

				<MenuIcon setMenuToggle={setMenuToggle} isProjects={isProjects} menuOpen={menuToggle} />
			</div>
			<Menu setLinks={setLinks} menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
		</>
	);
};

export default Navbar;
