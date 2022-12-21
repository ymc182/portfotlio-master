import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import useSanity from "../../hooks/useSanity";
import { urlFor } from "../../lib/sanity";
import AppWrapper from "../../Wrapper/AppWrapper";
import { IAboutSchema } from "../../constants/types";
import { DevIcons } from "../../constants";
import { Tooltip } from "react-tooltip";

function About() {
	const { about } = useSanity();

	return (
		<>
			<div className="app__about">
				<h2 className="head-text">
					Learning <span>New Things</span>
					<br /> every <span>day</span>
				</h2>
				<div className="app__profiles">
					{about.map((about: IAboutSchema, index: number) => {
						return (
							<motion.div
								whileInView={{
									opacity: 1,
								}}
								whileHover={{
									scale: 1.1,
								}}
								transition={{
									duration: 0.5,
									type: "tween",
								}}
								className="app__profile-item"
								key={`${about.title}-${index}`}
							>
								<img src={urlFor(about.imgUrl)} alt={about.title} />
								<h2 className="bold-text" style={{ marginTop: "20px" }}>
									{about.title}
								</h2>
								<p className="p-text" style={{ marginTop: "10px", wordWrap: "break-word" }}>
									{about.description}
								</p>
							</motion.div>
						);
					})}
				</div>
				<SkillsSection />
			</div>
		</>
	);
}

export default AppWrapper(About, "Skills", "");

function SkillsSection() {
	return (
		<div className="app__skills">
			<h2 className="app__skills-title head-text">
				My <span>Tech_Stack</span>
			</h2>
			<div className="app__skills-list">
				{DevIcons.map((icon, index) => {
					return (
						<div>
							<motion.div
								whileInView={{
									y: [-10, 0],
									opacity: [0, 1],
								}}
								transition={{
									delay: index * 0.1,
									duration: 0.5,
								}}
								className="app__skills-item"
								key={`${icon}-${index}`}
							>
								<i className={icon.icon} />
							</motion.div>
						</div>
					);
				})}
			</div>
			<div className="app__skills-selected"></div>
		</div>
	);
}

type IIconProps = {
	icon: string;
	title: string;
	level: string;
};

function ToolTipContent({ icon: IIconProps }) {
	return <div></div>;
}
