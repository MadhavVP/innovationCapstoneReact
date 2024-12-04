import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
//import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const Resourcescs = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "resourcescs");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Resourcescs | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="resourcescs" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.resourcescs.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.resourcescs.description}
								</div>
								<div className="subtitle about-subtitle">
									 - Made by <a className="subtitle about-link" target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/simpatbos">Simon Bosslet</a>, (CS + DS, Class of 2028)
								</div>
							</div>

							{/* <div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="PU-V-Full-RGB.png"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>
							</div> */}
						</div>
						<div className="about-container">

						</div>
					</div>
					<div align="center">
						<iframe title="notion" src="https://v2-embednotion.com/12fbee3db0bc807ea5b4f3d5be093b03" 
        					width="100%" height="1000px" border="2px" solid="#ccc" border-radius="10px" padding="none"></iframe>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Resourcescs;
