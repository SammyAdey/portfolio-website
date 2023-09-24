import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const InfoSection = ({ company, role, completed, url }) => {
	const [hover, setHover] = useState(false);
	const variant = {
		default: {
			rotate: 0,
		},
	};
	const hoverVariant = {
		default: {
			rotate: 45,
		},
	};

	return (
		<div className='w-[70vw]'>
			<table className='hidden lg:table table-fixed w-full'>
				<thead>
					<tr className='h-[30px] '></tr>
				</thead>
				<tbody>
					<tr className='text-black h-[30px] font-["helvetica-extended"] text-[18px] '>
						<td className=''>Company</td>
						<td className=''>Role</td>
						<td className=''>Completed</td>
						<td className=''>Url</td>
					</tr>
					<tr className='text-black h-[30px] font-["helvetica-extended"] text-[18px] '>
						<td className=''>{company}</td>
						<td className=''>{role}</td>
						<td className=''>{completed}</td>
						<td>
							<Link
								onMouseEnter={() => setHover(true)}
								onMouseLeave={() => setHover(false)}
								href={"https://" + url}
								className='flex items-center'
								id='link'
								target='_blank'
							>
								{url}
								<motion.div variants={hover ? hoverVariant : variant} animate='default' transition={{ ease: "easeOut", duration: 0.3 }}>
									<FiArrowUpRight size={20} />
								</motion.div>
							</Link>
						</td>
					</tr>
				</tbody>
			</table>
			<div className='flex justify-center text-black lg:hidden'>
				<div>
					<div className='flex justify-center'>
						<p className='font-bold'>Company: </p>
						<p>{" " + company}</p>
					</div>
					<div className='justify-center flex'>
						<p className='font-bold'>Role: </p>
						<p>{" " + role}</p>
					</div>
					<div className='justify-center flex'>
						<p className='font-bold'>Completed: </p>
						<p>{" " + completed}</p>
					</div>
					<div className='justify-center flex'>
						<p className='font-bold'>Url: </p>
						<p>{" " + url}</p>
					</div>
				</div>
			</div>
			{/* <div className='w-[400px] h-[300px] bg-gradient-to-r from-orange-500 to-rose-700'></div> */}
		</div>
	);
};

export default InfoSection;
