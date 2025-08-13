"use client"

import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react"

export default function NavBar() {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap.bundle.min.js")
	}, [])

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
			<div className="container-fluid">
				{/* Logo */}
				<a className="navbar-brand fw-bold" href="#">
          SPO IITK
				</a>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarContent"
					aria-controls="navbarContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse justify-content-end" id="navbarContent">
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                SPO
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="index.php">
                    About Us
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="https://ocs.iitd.ac.in/portal/notices">
                    Alumni Job Notice Board
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="https://www.linkedin.com/company/office-of-career-services-iit-delhi/">
                    Linkedin Page
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="https://www.youtube.com/channel/UC3wG6-pywD_kiuhugo9e3Dg/featured">
                    Youtube Channel
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="https://www.instagram.com/ocs_iitd/">
                    Instagram Page
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="pravritti/index.html">
                    Pravritti
									</a>
								</li>
							</ul>
						</li>

						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                IIT Kanpur
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="iitd.php?id=student">
                    Student & Academics
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="iitd.php?id=batch">
                    Graduating Batch
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="iitd.php?id=research">
                    Research and Development
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="iitd.php?id=media">
                    Media Report
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="department.php">
                    Departments
									</a>
								</li>
							</ul>
						</li>

						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                For Students
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="https://ocs.iitd.ac.in/portal/login?role=student">
                    Student Login
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="https://apps.powerapps.com/play/...">
                    Alumni Search
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="student.php?id=faq">
                    F.A.Q.
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="student.php?id=alumni">
                    Alumni
									</a>
								</li>
							</ul>
						</li>

						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                For Recruiters
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="https://ocs.iitd.ac.in/portal/recruiter/auth">
                    Recruiters Login
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="recruiter.php?id=past">
                    Past Recruiters
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="recruiter.php?id=procedure">
                    Recruiters Procedure
									</a>
								</li>
							</ul>
						</li>

						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Team
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="admin.php">
                    Administration
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="team.php">
                    Student Team
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="department.php">
                    Nucleus Team
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="student.php?id=gallery">
                    Gallery
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="https://ocs.iitd.ac.in/portal/login?role=admin">
                    Admin Login
									</a>
								</li>
							</ul>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="downloads.php">
                Downloads
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="iitd.php?id=contact">
                Contact Us
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
