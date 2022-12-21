import React, { FC } from "react";
import { NavDot } from "../components";

const AppWrapper = (Component: FC, idName: string, classNames: string) =>
	function HOC() {
		return (
			<div id={idName} className={`app__container ${classNames}`}>
				<div className="app__wrapper">
					<Component />
				</div>
				<NavDot active={idName} />
			</div>
		);
	};

export default AppWrapper;
