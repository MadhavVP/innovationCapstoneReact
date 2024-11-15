import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item-b">
							<Link to="/education">Education</Link>
						</li>
						<li className="footer-nav-link-item-b">
							<Link to="/browser">Browser</Link>
						</li>
						<li className="footer-nav-link-item-b">
							<Link to="/policy">Policy</Link>
						</li>
						<li className="footer-nav-link-item-b">
							<Link to="/resourcescs">CS Resources</Link>
						</li>
						<li className="footer-nav-link-item-b">
							<Link to="/resources">Resources</Link>
						</li>
						<li className="footer-nav-link-item-b">
							<Link to="/contact">Contact Us</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
