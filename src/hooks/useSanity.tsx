import React from "react";
import { client } from "../lib/sanity";
import { IAboutSchema, IProjectSchema } from "../constants/types";

export default function useSanity(): { about: IAboutSchema[]; projects: IProjectSchema[]; tags: string[] } {
	const [about, setAbout] = React.useState<IAboutSchema[]>([]);
	const [projects, setProjects] = React.useState<IProjectSchema[]>([]);
	const [tags, setTags] = React.useState<string[]>([]);
	React.useEffect(() => {
		const queryAbout = `*[_type == "about"]{
			title,
			description,
			imgUrl
		}`;
		const queryProjects = `*[_type == "projects"]{
			title,
			description,
			projectLink,
			codeLink,
			imgUrl,
			tags
		}`;
		client.fetch(queryAbout).then((data: IAboutSchema[]) => {
			setAbout(data);
		});
		client.fetch(queryProjects).then((data: IProjectSchema[]) => {
			setProjects(data);
			//add tags only once per tag name
			let _tags: string[] = [];
			for (const project of data) {
				for (const tag of project.tags) {
					if (_tags.includes(tag)) continue;
					_tags.push(tag);
				}
			}
			setTags(_tags);
		});
	}, []);

	return { about, projects, tags };
}
