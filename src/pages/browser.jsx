import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
//import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const Browser = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "browser");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Browser | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="browser" />
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
									{INFO.browser.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.browser.description}
								</div>

								<div className="about-subheading">
									How's it work?
								</div>

								<div className="subtitle about-subtitle">
								The extension works by cross-referencing the URL
								 of websites that users visit with a pre-defined
								  list of flagged domains stored in a .csv file. 
								  If the site is found in this file, the extension 
								  alerts the user with one of two icons:
								  <ul>
									<li><b>Icon 1:</b> A <b>red circle with a white exclamation 
										mark</b> indicates that the website has been flagged 
										for misinformation or disinformation.</li>
									<li><b>Icon 2:</b> A <b>gray circle</b> signals caution for sites 
										with no definitive information in the CSV, 
										reminding users to be vigilant.</li>
								  </ul>
								</div>

								<div className="about-subheading">
									Browser Extension Demo
								</div>

								<iframe width="560" height="315" src="https://www.youtube.com/embed/YpvcCwOwGLc?si=J2Oavv84_XZXBngu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

								<div className="about-subheading">
									Where can I get it?
								</div>

								<div className="subtitle about-subtitle">
									You can download this extension from 
									our <a className="subtitle about-link" target="_blank" rel="noreferrer" href="https://github.com/Purdue-Innovation-Capstone/browser">GitHub repository</a> or 
									from the <a className="subtitle about-link" target="_blank" rel="noreferrer" href="https://chromewebstore.google.com/category/extensions">Chrome web store</a>.
									<br></br><br></br> 
									Here is a video demo of the download. 
									<iframe width="560" height="315" src="https://www.youtube.com/embed/c0lvDv77Xa4?si=fac2xi-FNoIwDsyi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
					</div>
					<div className="about-container">

						</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Browser;
