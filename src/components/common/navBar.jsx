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
									active === "browser"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/browser">Browser</Link>
							</li>
							<li
								className={
									active === "policy"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/policy">Policy</Link>
							</li>
							<li
								// className={
								// 	(active === "resources" || active === "resourcescs")
								// 		? "nav-item active"
								// 		: "nav-item"
								// }
								className="nav-item"
								onMouseEnter={toggleDropdown}
								onMouseLeave={toggleDropdown}
							>
								<div>Resources</div>
								{dropdownOpen && (
								<ul className="dropdown">
									<li><Link to="/resources">General</Link></li>
									<li><Link to="/resourcescs">Python-Based</Link></li>
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
