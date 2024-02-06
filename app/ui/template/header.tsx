import { useState, useEffect } from "react";
import siteConfig from "~/utils/siteConfig.tsx";

function Header() {
	const [isSticky, setIsSticky] = useState(false);
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);
	const navLinksClasses = "text-white hover:text-ci-primary-1 transition font-semibold text-shadow lg:text-lg";
	const dropDownNavLinksClasses = "text-ci-secondary-1 hover:text-ci-primary-1 transition font-semibold text-shadow lg:text-lg block px-4 py-2 text-center";

	useEffect(() => {
		const stickyValue = localStorage.getItem("isNavSticky");
		if (stickyValue) {
			setIsSticky(JSON.parse(stickyValue));
		}

		const handleScroll = () => {
			const shouldBeSticky = window.scrollY > 85;
			setIsSticky(shouldBeSticky);
			localStorage.setItem("isNavSticky", JSON.stringify(shouldBeSticky));
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div
				id="Header"
				className={`${isSticky ? "fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-ci-primary-2 shadow-md w-full" : "relative bg-ci-light-3/[.66] lg:rounded-t-xl"} max-w-screen-2xl text-white lg:px-6 lg:py-4 px-4 py-2`}
			>
				<div className={`flex flex-row justify-between container max-w-screen-2xl mx-auto ${isSticky ? "border-b-0" : "border-b pb-2"}`}>
					{/* Logo and site name */}
					<a
						href={siteConfig.homeUrl}
						className="self-start text-ci-secondary-2 hover:text-ci-primary-1 transition delay-150 text-3xl font-extrabold my-auto"
					>
						<span className="relative inline-flex flex-row gap-1 justify-start items-center">
							<img
								className="w-[35px] h-auto"
								src="/assets/logo.png"
								alt="Logo"
							/>
							{siteConfig.logo}
						</span>
					</a>
					{/* Default Navigation */}
					<nav className="hidden lg:flex justify-end items-center space-x-6">
						<a
							href="#"
							className={navLinksClasses}
						>
							Produkte
						</a>
						<a
							href="#"
							className={navLinksClasses}
						>
							Module
						</a>
						<a
							href="#"
							className={navLinksClasses}
						>
							Preise
						</a>
						<a
							href="#"
							className={navLinksClasses}
						>
							Wissen
						</a>
						<a
							href="#"
							className={navLinksClasses}
						>
							Über uns
						</a>
					</nav>
					{/* Dropdown Button for Mobile and Tablets */}
					<div className="self-end max-h-12 lg:hidden">
						<button
							className="text-white font-semibold rounded-lg hover:bg-opacity-75 focus:outline-none"
							onClick={() => setIsDropdownVisible((prev) => !prev)}
						>
							<svg
								width="48"
								height="48"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="text-white my-auto"
							>
								<path
									d="M5 7H19"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
								/>
								<path
									d="M5 12H19"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
								/>
								<path
									d="M5 17H19"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
						</button>
						{isDropdownVisible && (
							<div className="absolute right-0 mt-2 py-2 w-64 z-10 bg-white rounded-lg shadow-xl">
								<a
									href="#"
									className={dropDownNavLinksClasses}
								>
									Produkte
								</a>
								<a
									href="#"
									className={dropDownNavLinksClasses}
								>
									Module
								</a>
								<a
									href="#"
									className={dropDownNavLinksClasses}
								>
									Preise
								</a>
								<a
									href="#"
									className={dropDownNavLinksClasses}
								>
									Wissen
								</a>
								<a
									href="#"
									className={dropDownNavLinksClasses}
								>
									Über uns
								</a>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
