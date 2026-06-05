import React from "react";
import "../styles/About.css";

import supportImg from "../asstes/team.png";

const About = () => {
	return (
		<section className="about-page">
			<div className="about-left">
				<h2>About NextUniform</h2>
				<p className="left-desc">
					We design dependable uniforms for teams that need comfort,
					durability, and a professional look every day.
				</p>

				<div className="info-box">
					<div className="icon">✓</div>
					<div>
						<h4>Trusted Quality</h4>
						<p>Built with materials selected for daily wear and long-term use.</p>
					</div>
				</div>

				<div className="info-box">
					<div className="icon">✓</div>
					<div>
						<h4>Custom Solutions</h4>
						<p>Tailored uniform options for industrial, hospitality, and corporate teams.</p>
					</div>
				</div>
			</div>

			<div className="about-right">
				<div className="about-content">
					<h1>Who We Are</h1>
					<p className="subtitle">
						We help businesses create a consistent team identity through clean,
						practical uniform collections.
					</p>
					<p>
						From the first design idea to the final order, our focus is on
						making the process simple, reliable, and professional.
					</p>
					<p>
						Our team supports small and large organizations with product
						selection, customization, and order assistance.
					</p>
				</div>

				<div className="about-image">
					<img src={supportImg} alt="NextUniform team" />
				</div>
			</div>
		</section>
	);
};

export default About;
