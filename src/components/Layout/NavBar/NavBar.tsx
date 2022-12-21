import React, { useState } from "react";
import { images, NavLinks } from "../../../constants";
import "./NavBar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export default function NavBar() {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.logo} alt="logo" />
			</div>
			<ul className="app__navbar-links">
				{NavLinks.map((link) => {
					return (
						<li key={`link-${link}`} className="app__flex p-text">
							<div />
							<a href={`#${link}`}>{link}</a>
						</li>
					);
				})}
			</ul>
			<div className="app__navbar-menu">
				<HiMenuAlt4 onClick={() => setToggle(true)} />
				{toggle && (
					<motion.div whileInView={{ x: [70, 0] }} transition={{ duration: 0.85, ease: "easeInOut" }}>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{NavLinks.map((link) => {
								return (
									<li key={`menu-link-${link}`}>
										<a href={`#${link}`} onClick={() => setToggle(false)}>
											{link}
										</a>
									</li>
								);
							})}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
}
