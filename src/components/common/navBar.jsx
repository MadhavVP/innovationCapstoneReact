// import React from "react";
import { Link } from "react-router-dom";
import React, {useState} from "react";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [dropdownOpen, setDropdown] = useState(false);

	const toggleDropdown = () => {
		setDropdown(!dropdownOpen);
	};

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "education"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/education">Education</Link>
							</li>
							{/* <li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li> */}
							<li
								className={
									active === "Browser"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/browser">Browser</Link>
							</li>
							<li
								className={
									active === "Policy"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/policy">Policy</Link>
							</li>
							<li
								className={
									active === "Resources"
										? "nav-item active"
										: "nav-item"
								}
								onMouseEnter={toggleDropdown}
								onMouseLeave={toggleDropdown}
							>
								<span>Resources</span>
								{dropdownOpen && (
								<ul className="dropdown">
									<li><Link to="/resourcescs">CS Resources</Link></li>
									<li><Link to="/resources">Resources</Link></li>
								</ul>
								)}
								{/* <Link to="/resources">Resources</Link> */}
							</li>
							{/* <li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li> */}
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
