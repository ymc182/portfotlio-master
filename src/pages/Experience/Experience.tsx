import React from "react";
import AppWrapper from "../../Wrapper/AppWrapper";
import { motion } from "framer-motion";
import { Experiences } from "../../constants/";
import "./Experience.scss";

function Experience() {
	const [selectedCompany, setSelectedCompany] = React.useState(0);
	return (
		<div className="app__works">
			<div className="app__works-title head-text">
				My previous<span> Work </span>Experience
			</div>
			<div className="app__works-main">
				<div className="app__works-company-list">
					{Experiences.map((item, index) => {
						return (
							<div
								className="app__works-company-list-item"
								key={item.company + index}
								onClick={() => setSelectedCompany(index)}
							>
								<h3>{item.company}</h3>
								<i>{item.period}</i>
								<p>{item.role}</p>
							</div>
						);
					})}
				</div>
				<div className="app__works-company-detail">
					{Experiences[selectedCompany] && (
						<motion.div
							animate={{
								x: [-50, 0],
								opacity: [-1, 1],
								transition: {
									duration: 0.5,
								},
							}}
							//reset when the selectedCompany changes
							key={selectedCompany}
						>
							<div className="app__works-company-detail-title">
								<main>
									<h2>{Experiences[selectedCompany].company}</h2>
									<i className="app__works-company-detail-period">{Experiences[selectedCompany].period}</i>
									<div className="app__works-company-detail-role">{Experiences[selectedCompany].role}</div>
									<br />
									<a href={Experiences[selectedCompany]?.link} target="_blank" rel="noreferrer">
										{Experiences[selectedCompany]?.link}
									</a>
								</main>

								<img src={Experiences[selectedCompany].image} alt="company logo" />
							</div>

							<br />
							<hr />
							<br />
							<div className="app__works-company-detail-responsibilities">
								{Experiences[selectedCompany].companyDesc}
							</div>
							<br />
							<div className="app__works-company-detail-responsibilities">{Experiences[selectedCompany].res}</div>
						</motion.div>
					)}
				</div>
			</div>
		</div>
	);
}

export default AppWrapper(Experience, "Experience", "");
