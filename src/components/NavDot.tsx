import React from "react";
import { NavLinks } from "../constants";

export default function NavDot({ active }) {
	return (
		<div className="app__navigation">
			<div className="app__dot-container">
				{NavLinks.map((link, idx) => {
					return (
						<a
							key={`dot-link-${link + idx}`}
							href={`#${link}`}
							className="app__nav-dot"
							style={active === link ? { backgroundColor: "#0e9bc9" } : { backgroundColor: "grey" }}
						></a>
					);
				})}
			</div>
		</div>
	);
}
