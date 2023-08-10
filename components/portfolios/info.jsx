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
			<table className='table-fixed w-full'>
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
			{/* <div className='w-[400px] h-[300px] bg-gradient-to-r from-orange-500 to-rose-700'></div> */}
		</div>
	);
};

export default InfoSection;
