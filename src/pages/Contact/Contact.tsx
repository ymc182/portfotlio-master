import React from "react";
import AppWrapper from "../../Wrapper/AppWrapper";
import "./Contact.scss";
import { FaDiscord, FaTwitter, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Contact() {
	return (
		<div className="app__contact">
			Contact Me
			<div className="app__contact-social">
				<a href="https://discord.gg/2Z8qZ9Z" target="_blank" rel="noreferrer">
					<FaDiscord />
				</a>
				<a href="https://twitter.com/0xEr1c" target="_blank" rel="noreferrer">
					<FaTwitter />
				</a>
				<a href="https://t.me/ymc182" target="_blank" rel="noreferrer">
					<FaTelegram />
				</a>
				<a href="mailto:ymc182@gmail.com">
					<MdEmail />
				</a>
			</div>
		</div>
	);
}

export default AppWrapper(Contact, "Contact", "");
