import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
//import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const Policy = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "policy");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Policy | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="policy" />
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
									{INFO.policy.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.policy.description}
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
						<div className="about-container-report">
							<div align="center">
								<iframe 
									title="Report"
									allowFullScreen="true"
									src="https://drive.google.com/file/d/11FRLeq0kjHTAa9uO2tSR5w_IBqfWWah0/preview"
									width="640" height="480"
									allow="autoplay"></iframe>
								{/* <iframe title="Report" src="https://drive.google.com/file/d/1S3sNnV6rp2rwjZKL7zj5CAhZ4t1TptbY/preview" width="640" height="480" allow="autoplay"></iframe> */}
							</div>
						</div>
						<div className="credits">
								<div className="about-subheading">
									Credits:
								</div>
								<div className="subtitle">
									Julian Kukor (Political Science)<br />
									Andrew Fox (Cybersecturity)<br />
									Barakah Abdo-Baari (Political Science)<br />
									Molly Holthe (Political Science, Economics)<br />
									Sarina Oliveri Kuhnle (Political Science, Environmental Science)<br />
									Will Richards
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

export default Policy;
