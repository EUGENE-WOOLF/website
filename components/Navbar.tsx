"use client"

import "bootstrap/dist/css/bootstrap.min.css"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function NavBar() {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap.bundle.min.js")
	}, [])

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3 custom-navbar">
				<div className="container-fluid">
					<a className="navbar-brand fw-bold fs-1" href="#">
						<Image
							src="/logo.png" // image stored in public/logo.png
							alt="My Logo"
							height={60}
							width={400}
						/>
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
						<ul className="navbar-nav mb-2 mb-lg-0 fs-5 fw-semibold">
							<li className="nav-item dropdown">
								<Link href="/about" data-bs-toggle="dropdown" aria-expanded="false">
									<a className="nav-link dropdown-toggle">About IITK</a>
								</Link>
								<ul className="dropdown-menu">
									<li></li>
									<li>
										<Link href="/about">
											<a className="dropdown-item">About IITK</a>
										</Link>
									</li>
									<li>
										<Link href="/about#academics">
											<a className="dropdown-item">Academics</a>
										</Link>
									</li>
									<li>
										<Link href="/about#research">
											<a className="dropdown-item">Research & Development</a>
										</Link>
									</li>
									<li>
										<Link href="/about#alumni">
											<a className="dropdown-item">Alumni</a>
										</Link>
									</li>
									<li>
										<Link href="/about#faculty">
											<a className="dropdown-item">Faculty</a>
										</Link>
									</li>
									<li>
										<Link href="/about#activities">
											<a className="dropdown-item">Activities</a>
										</Link>
									</li>
								</ul>
							</li>

							<li className="nav-item dropdown">
								<Link href="#" data-bs-toggle="dropdown" aria-expanded="false">
									<a className="nav-link dropdown-toggle">For Students</a>
								</Link>
								<ul className="dropdown-menu">
									<li>
										<Link href="/students">
											<a className="dropdown-item">Student</a>
										</Link>
									</li>
									<li>
										<Link href="/insights">
											<a className="dropdown-item">Placement Insignts</a>
										</Link>
									</li>
									<li>
										<Link href="/students#steps">
											<a className="dropdown-item">Procedure</a>
										</Link>
									</li>
									<li>
										<Link href="/students#resources">
											<a className="dropdown-item">Resources</a>
										</Link>
									</li>
									<li>
										<Link href="/students#prepRoadmaps">
											<a className="dropdown-item">Preperation Roadmaps</a>
										</Link>
									</li>
								</ul>
							</li>

							{/* For Recruiters Dropdown */}
							<li className="nav-item dropdown">
								<Link href="/companies" data-bs-toggle="dropdown" aria-expanded="false">
									<a className="nav-link dropdown-toggle">Recruiter</a>
								</Link>
								<ul className="dropdown-menu">
									<li>
										<Link href="/companies">
											<a className="dropdown-item">Companies</a>
										</Link>
									</li>
									<li>
										<Link href="/companies#steps">
											<a className="dropdown-item">Procedure</a>
										</Link>
									</li>
									<li>
										<Link href="/companies#ipolicy">
											<a className="dropdown-item">Internship Policy</a>
										</Link>
									</li>
									<li>
										<Link href="/companies#facilities">
											<a className="dropdown-item">Facilities</a>
										</Link>
									</li>
									<li>
										<Link href="/companies#resources">
											<a className="dropdown-item">Resources</a>
										</Link>
									</li>
								</ul>
							</li>

							{/* Team Dropdown */}
							<li className="nav-item dropdown">
								<Link href="#" data-bs-toggle="dropdown" aria-expanded="false">
									<a className="nav-link dropdown-toggle">Activities</a>
								</Link>
								<ul className="dropdown-menu">
									<li>
										<Link href="/samvardhan">
											<a className="dropdown-item">Samvardhan</a>
										</Link>
									</li>
									<li>
										<Link href="/contact">
											<a className="dropdown-item">Contact</a>
										</Link>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* Custom Styles */}
			<style jsx>{`
        .custom-navbar {
          font-size: 1.2rem;
        }

        .navbar-brand {
          letter-spacing: 1px;
        }

        /* Add space between top-level menu items */
        .navbar-nav .nav-item {
          margin-left: 1rem; /* adjust as needed */
        }

        .navbar .dropdown-menu {
          font-size: 1.1rem;
          padding: 0.5rem 0;
          border-radius: 10px;
          border: none;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        }

        .navbar .dropdown-item {
          padding: 0.6rem 1.2rem;
          transition: background 0.2s ease, padding-left 0.2s ease;
        }

        .navbar .dropdown-item:hover {
          background-color: #f8f9fa;
          padding-left: 1.5rem;
        }

        @media (min-width: 992px) {
          .navbar .dropdown:hover .dropdown-menu {
            display: block;
            margin-top: 0;
            animation: fadeIn 0.2s ease-in-out;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
		</>
	)
}
