import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrapper from "../../Wrapper/AppWrapper";
function Header() {
	const scaleVariant = {
		whileInView: {
			scale: [0, 1],
			opacity: [0, 1],
			transition: { duration: 1, ease: "easeInOut" },
		},
	};

	return (
		<div id="Home" className="app__header app__flex ">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1], transition: { duration: 1 } }}
				className="app__header-info"
			>
				<div className="app__header-badge">
					<div className="badge-cmp app__flex">
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">Hello, I am</p>
							<h1 className="header-text">Eric - YMC</h1>
						</div>
					</div>
					<hr style={{ width: "200px", marginRight: "20px" }} />
					<div className="tag-cmp app__flex">
						<p className="p-text">+Fullstack</p>
						<p className="p-text">+Blockchain</p>
						<p className="p-text">Developer</p>
					</div>
				</div>
			</motion.div>
			<motion.div
				whileInView={{
					opacity: [0, 1],
					transition: { duration: 1, delayChildren: 1 },
				}}
				className="app__header-img"
			>
				<motion.img
					whileInView={{
						scale: [0, 1],
						transition: { duration: 1, ease: "easeInOut" },
					}}
					src={images.circle}
					alt="profile-circle"
					className="overlay_circle"
				/>
				<img src={images.profile} alt="profile-pic" />
			</motion.div>
			<motion.div variants={scaleVariant} whileInView={scaleVariant.whileInView} className="app__header-circles">
				{[images.cartel, images.near, images.sui].map((img, index) => {
					return (
						<div className="circle-cpm app__flex" key={`imgcircle-${index}`}>
							<img src={img} alt="circle" />
						</div>
					);
				})}
			</motion.div>
		</div>
	);
}
export default AppWrapper(Header, "Home", "");
