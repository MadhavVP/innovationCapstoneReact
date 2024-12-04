import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
//import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const Resources = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "resources");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Resources | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="resources" />
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
									{INFO.resources.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.resources.description}
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
						<iframe title="resources-notion" src="https://v2-embednotion.com/1344eea483d480728cdfcc2bd91af018" 
							width="100%" height="1100px" border="2px" solid="#ccc" border-radius="10px" padding="none">
						</iframe>
					</div>
					{/* <div align="center">
					<iframe title="politicians-notion" src="https://v2-embednotion.com/12f4eea483d480b4afc0e17054bdddbf"
						width="100%" height="500px" border="2px" solid="#ccc" border-radius="10px" padding="none"></iframe>
					</div> */}
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Resources;
