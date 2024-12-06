import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
//import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const Education = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "education");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Education | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="education" />
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
									{INFO.education.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.education.description}
								</div>
								</div>

							</div>
							<div className="about-container">
								<div className="about-subheading">
									Module 1
								</div>
								{/* THIS IS THE POWERPOINT EMBED
								<iframe src="https://purdue0-my.sharepoint.com/:p:/g/personal/milliker_purdue_edu/EWPl1Kn6c2pMgcQGbl3kdO4BZNxJk-tG9Cn_swVkBWFFmw?e=brBOsU&amp;action=embedview&amp;wdAr=1.7777777777777777" 
									width="70%" 
									height="460px" 
									title="module-1"
									frameborder="0">
										This is an embedded <a target="_blank" rel="noreferrer" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" rel="noreferrer" href="https://office.com/webapps">Office</a>
								</iframe> */}
								<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTHZ9KvW2gepXAC2_GKzcRBLIgCUr58gi6BhS0tA1F210qJwm3daAgLapf0bTqw6w/embed?start=false&loop=true&delayms=3000"
									/*THIS IS THE SLIDES EMBED*/
									frameborder="0"
									width="70%" height="389"
									title="module-1-firefox"
									className="firefox"
									allowfullscreen="true"
									mozallowfullscreen="true"
									webkitallowfullscreen="true">
								</iframe>
								<a href="https://purdue0-my.sharepoint.com/:p:/g/personal/milliker_purdue_edu/EWPl1Kn6c2pMgcQGbl3kdO4BZNxJk-tG9Cn_swVkBWFFmw?e=brBOsU">Education Project ILS 330 - Module 1.pptx</a>

								
								<div className="about-subheading">
									Module 2
								</div>
								{/* <iframe src="https://purdue0-my.sharepoint.com/:p:/g/personal/milliker_purdue_edu/EYb8lBiCZvNMqYzxnIHf_psBPBA3iiyP2ufe6bywWgvY_w?e=pG3RZD&amp;action=embedview&amp;wdAr=1.7777777777777777" 
									width="640px%" 
									height="460px" 
									title="module-2"
									frameborder="0"
									allowfullscreen="true"
									mozallowfullscreen="true"
									webkitallowfullscreen="true">
										This is an embedded <a target="_blank" rel="noreferrer" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" rel="noreferrer" href="https://office.com/webapps">Office</a>.
								</iframe> */}
								<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQjdfgCM14ZxFj6ZR8CGJtFma3Enf3L3PhVmPjvbP4Mxy93BzuHt9zHOimr5Ce4DQ/embed?start=false&loop=true&delayms=5000"
									title="module-2-slides"
									frameborder="0"
									width="640" height="389"
									allowfullscreen="true"
									mozallowfullscreen="true"
									webkitallowfullscreen="true">

								</iframe>
								<a href="https://purdue0-my.sharepoint.com/:p:/g/personal/milliker_purdue_edu/EYb8lBiCZvNMqYzxnIHf_psBPBA3iiyP2ufe6bywWgvY_w?e=pG3RZD">Education Project ILS 330 - Module 2.pptx</a>
								
								<div className="about-subheading">
									Module 3
								</div>
								{/* <iframe src="https://purdue0-my.sharepoint.com/:p:/g/personal/milliker_purdue_edu/EZy_KTRa1B1Ana015ip_BCABLzaliluy-tlFom6-CiNo2Q?e=hjFczB&amp;action=embedview&amp;wdAr=1.7777777777777777" 
									width="70%" 
									height="460px" 
									title="module-3"
									frameborder="0">
										This is an embedded <a target="_blank" rel="noreferrer" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" rel="noreferrer" href="https://office.com/webapps">Office</a>.
										
								</iframe> */}
								<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTmS62CL3SHE-Qi4cClQYnTYOjjSgzCHci3edhEUhcparD5JWEe75REb6qe0NF9DQ/embed?start=false&loop=true&delayms=5000"
									title="module-3-slides"
									frameborder="0"
									width="640"
									height="389"
									allowfullscreen="true"
									mozallowfullscreen="true"
									webkitallowfullscreen="true">
										
								</iframe>
								<a href="https://purdue0-my.sharepoint.com/:p:/g/personal/milliker_purdue_edu/EZy_KTRa1B1Ana015ip_BCABLzaliluy-tlFom6-CiNo2Q?e=hjFczB">Education Project ILS 330 - Module 3.pptx</a>

						
								<div className="about-subheading">
									Module 4
								</div>
								{/* <iframe src="https://purdue0-my.sharepoint.com/:p:/g/personal/milliker_purdue_edu/ER_K8flvXB9Lk2KN4WSllBYBbAyzee-4NNk6IlEFJ8HRwg?e=AwDwTk&amp;action=embedview&amp;wdAr=1.7777777777777777" 
									width="70%" 
									height="460px" 
									title="module-4"
									frameborder="0">
										This is an embedded <a target="_blank" rel="noreferrer" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" rel="noreferrer" href="https://office.com/webapps">Office</a>.
								</iframe> */}
								<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR6VPYyjpxRUOaQNY6WuP5mtj0bFITh_8heuVYvzHiA4OGaK7zepG9_5KsGXrtBoQ/embed?start=false&loop=true&delayms=5000"
									title="module-4-slides"
									frameborder="0"
									width="640" height="389"
									allowfullscreen="true"
									mozallowfullscreen="true"
									webkitallowfullscreen="true">

								</iframe>
								<a href="https://purdue0-my.sharepoint.com/:p:/g/personal/milliker_purdue_edu/ER_K8flvXB9Lk2KN4WSllBYBbAyzee-4NNk6IlEFJ8HRwg?e=AwDwTk">Education Project ILS 330 - Module 4.pptx</a>

							</div>
							<div className="credits">
								<div className="about-subheading">
									Credits:
								</div>
								<div className="subtitle">
									Rudolph Milliken (Cybersecurity)<br />
									Will Richards<br />
									Ben Eng (Applied Math, Computer Science)<br />
									Teruki Gibeau<br />
									Paula Ramos Perez (Computer Science, Political Science)<br />
									Yajushi Gokhale (Computer Science)
								</div>
							</div>

						</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Education;
