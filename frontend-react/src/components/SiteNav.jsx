import React from "react";
import devLogo from "../images/dev-logo.jpg";
import { Link } from "react-router-dom";

function SiteNav() {
	return (
		<nav className="navbar navbar-expand-lg bg-gradient fixed-top d-flex justify-content-between">
			<img src={devLogo} className="dev-logo rounded" alt="logo" />
			<div>
				<ul className="navbar-nav mb-2 mb-lg-0 ms-1">
					<li className="nav-item mx-1"></li>
				</ul>
				<div
					className="collapse navbar-collapse mx-1 text-uppercase fw-bolder d-flex justify-content-end"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item mx-1">Full-Stack</li>
						<li className="nav-item mx-1 pe-2">Software Developer</li>
					</ul>
					<div className="user-navbar">
						<div className="dropdown">
							<button className="dropbox">
								<div className="material-symbols-outlined" title="" style={{ padding: "3px 3px 1px 2px" }}>
									dropdown
								</div>
							</button>
							<div className="dropdown-content">
								<Link className="nav-link" to="/contact">
									Contact Me
								</Link>
								<Link className="nav-link" to="/">
									Resume
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default SiteNav;
