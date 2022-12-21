import React, { useCallback } from "react";
import AppWrapper from "../../Wrapper/AppWrapper";
import "./Projects.scss";
import useSanity from "../../hooks/useSanity";
import { urlFor } from "../../lib/sanity";
import { motion } from "framer-motion";
import { IProjectSchema } from "../../constants/types";
//define the type of the props

function Projects() {
	const { projects, tags } = useSanity();
	const [query, setQuery] = React.useState<string>("All");
	const filtered = useCallback(() => {
		return projects.filter((project: IProjectSchema) => {
			if (query === "All") return true;
			return project.tags.includes(query);
		});
	}, [query, projects]);

	return (
		<div className="app__projects">
			<h2 className="head-text">
				We know that <span>Good Built Quality</span>
				<br /> means <span>Good Business</span>
			</h2>
			<div className="app__projects-tag-container">
				<div onClick={() => setQuery("All")} className="app__projects-tag">
					All
				</div>
				{tags.map((tag: string) => {
					return (
						<div key={tag} onClick={() => setQuery(tag)} className="app__projects-tag">
							{tag}
						</div>
					);
				})}{" "}
			</div>
			<div className="app__projects-cards-container">
				{filtered().map((project: IProjectSchema, index: number) => {
					return (
						<div key={`${project.title}-${index}`} className="app__projects-card">
							<div className="app__projects-img-container">
								<motion.div
									layout
									initial={{
										opacity: 0,
									}}
									whileInView={{
										//move from left to right
										opacity: [0.3, 1],
										y: [-30, 0],
										transition: {
											delay: index * 0.1,

											duration: 0.6,
										},
									}}
									className="app__projects-card-img"
								>
									<img src={urlFor(project.imgUrl)} />
								</motion.div>
							</div>
							<a href={project.projectLink} target="_blank">
								{project.title}
							</a>
							<p className="app__projects-description">{project.description}</p>
						</div>
					);
				})}
			</div>
			<div className="app__projects-display"></div>
		</div>
	);
}

export default AppWrapper(Projects, "Projects", "");
