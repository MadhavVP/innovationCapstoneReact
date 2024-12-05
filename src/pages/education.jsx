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
								<iframe src="https://purdue0-my.sharepoint.com/:p:/g/personal/milliker_purdue_edu/EWPl1Kn6c2pMgcQGbl3kdO4BZNxJk-tG9Cn_swVkBWFFmw?e=brBOsU&amp;action=embedview&amp;wdAr=1.7777777777777777" 
									width="70%" 
									height="460px" 
									title="module-1"
									frameborder="0">
										This is an embedded <a target="_blank" rel="noreferrer" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" rel="noreferrer" href="https://office.com/webapps">Office</a>
								</iframe>
								<a href="https://purdue0-my.sharepoint.com/:p:/g/personal/milliker_purdue_edu/EWPl1Kn6c2pMgcQGbl3kdO4BZNxJk-tG9Cn_swVkBWFFmw?e=brBOsU">Education Project ILS 330 - Module 1.pptx</a>

								
								<div className="about-subheading">
									Module 2
								</div>
								<iframe src="https://purdue0-my.sharepoint.com/:p:/g/personal/milliker_purdue_edu/EYb8lBiCZvNMqYzxnIHf_psBPBA3iiyP2ufe6bywWgvY_w?e=pG3RZD&amp;action=embedview&amp;wdAr=1.7777777777777777" 
									width="70%" 
									height="460px" 
									title="module-2"
									frameborder="0">
										This is an embedded <a target="_blank" rel="noreferrer" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" rel="noreferrer" href="https://office.com/webapps">Office</a>.
								</iframe>
								<a href="https://purdue0-my.sharepoint.com/:p:/g/personal/milliker_purdue_edu/EYb8lBiCZvNMqYzxnIHf_psBPBA3iiyP2ufe6bywWgvY_w?e=pG3RZD">Education Project ILS 330 - Module 2.pptx</a>
								
								<div className="about-subheading">
									Module 3
								</div>
								<iframe src="https://purdue0-my.sharepoint.com/:p:/g/personal/milliker_purdue_edu/EZy_KTRa1B1Ana015ip_BCABLzaliluy-tlFom6-CiNo2Q?e=hjFczB&amp;action=embedview&amp;wdAr=1.7777777777777777" 
									width="70%" 
									height="460px" 
									title="module-3"
									frameborder="0">
										This is an embedded <a target="_blank" rel="noreferrer" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" rel="noreferrer" href="https://office.com/webapps">Office</a>.
										
								</iframe>
								<a href="https://purdue0-my.sharepoint.com/:p:/g/personal/milliker_purdue_edu/EZy_KTRa1B1Ana015ip_BCABLzaliluy-tlFom6-CiNo2Q?e=hjFczB">Education Project ILS 330 - Module 3.pptx</a>

						
								<div className="about-subheading">
									Module 4
								</div>
								<iframe src="https://purdue0-my.sharepoint.com/:p:/g/personal/milliker_purdue_edu/ER_K8flvXB9Lk2KN4WSllBYBbAyzee-4NNk6IlEFJ8HRwg?e=AwDwTk&amp;action=embedview&amp;wdAr=1.7777777777777777" 
									width="70%" 
									height="460px" 
									title="module-4"
									frameborder="0">
										This is an embedded <a target="_blank" rel="noreferrer" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" rel="noreferrer" href="https://office.com/webapps">Office</a>.
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
