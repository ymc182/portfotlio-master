import React from "react";
import AppWrapper from "../../Wrapper/AppWrapper";
import { motion } from "framer-motion";
import "./Experience.scss";
const mockData = [
	{
		company: "Edgewood TD",
		role: "Fullstack Dev",
		period: "2014 - Present",
		companyDesc:
			"Trove labs is a full-stack web 3.0 development firm that specializes in consulting with clients to create efficient project",
		res: "Fullstack Development",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",
	},
	{
		company: "Meta Café",
		role: "Blockchain Dev",
		period: "2021 - 2022",
		companyDesc:
			"A Coffee Business built on Near Protocol. Meta Café will initially be a route to market for our own El Café Cartel branded coffee. Meta Café will be an E-commerce platform running solely on web3 harnessing the power and scalability of near blockchain.",
		image: "https://pbs.twimg.com/profile_images/1588891215096840192/8sbcoFnP_400x400.jpg",
		link: "https://www.elcafecartel.com/",
		res: "Fullstack Development",
	},
	{
		company: "Trove Lab",
		role: "Fullstack Dev",
		period: "2021 - Present",
		companyDesc:
			"Trove labs is a full-stack web 3.0 development firm that specializes in consulting with clients to create efficient project.",
		image: "https://pbs.twimg.com/profile_images/1535494061502648320/fuFtS2Tw_400x400.jpg",
		link: "https://www.trovelabs.xyz/",
		res: "Fullstack Development",
	},
];
function Experience() {
	const [selectedCompany, setSelectedCompany] = React.useState(0);
	return (
		<div className="app__works">
			<div className="app__works-title head-text">
				My previous<span> Work </span>Experience
			</div>
			<div className="app__works-main">
				<div className="app__works-company-list">
					{mockData.map((item, index) => {
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
					{mockData[selectedCompany] && (
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
									<h2>{mockData[selectedCompany].company}</h2>
									<i className="app__works-company-detail-period">{mockData[selectedCompany].period}</i>
									<div className="app__works-company-detail-role">{mockData[selectedCompany].role}</div>
									<br />
									<a href={mockData[selectedCompany]?.link} target="_blank" rel="noreferrer">
										{mockData[selectedCompany]?.link}
									</a>
								</main>

								<img src={mockData[selectedCompany].image} alt="company logo" />
							</div>

							<br />
							<hr />
							<br />
							<div className="app__works-company-detail-responsibilities">{mockData[selectedCompany].companyDesc}</div>
							<br />
							<div className="app__works-company-detail-responsibilities">{mockData[selectedCompany].res}</div>
						</motion.div>
					)}
				</div>
			</div>
		</div>
	);
}

export default AppWrapper(Experience, "Experience", "");
