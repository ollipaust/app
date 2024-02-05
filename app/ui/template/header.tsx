import { useState, useEffect } from "react";
import siteConfig from "~/utils/siteConfig.tsx";

function Header() {
	const navLinksClasses = "text-white hover:text-ci-primary-1 transition font-semibold text-shadow lg:text-lg";
	const [isSticky, setIsSticky] = useState<boolean | undefined>(undefined);

	useEffect(() => {
		const stickyValue = localStorage.getItem("isNavSticky");
		setIsSticky(stickyValue !== null ? JSON.parse(stickyValue) : true);

		const handleScroll = () => {
			const shouldBeSticky = window.scrollY < 64;
			setIsSticky(shouldBeSticky);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (isSticky !== undefined) {
			localStorage.setItem("isNavSticky", JSON.stringify(isSticky));
		}
	}, [isSticky]);

	if (isSticky === undefined) return null;

	return (
		<>
			<div
				id="Header"
				className={`sticky max-w-screen-2xl top-0 z-20 text-white px-8 py-4 ${isSticky ? "lg:rounded-t-xl bg-ci-light-3/[.66]" : "bg-ci-primary-2"}`}
			>
				<div className={`flex flex-row justify-between container max-w-screen-2xl mx-auto ${isSticky && 'pb-4 border-b'}`}>
					<a
						href={siteConfig.homeUrl}
						className="self-start text-black text-3xl font-bold"
					>
						<span className="relative">
							{siteConfig.siteName.toUpperCase()}
							<img
								className="absolute -top-[2px] -right-10 w-[35px] h-auto"
								src="/assets/logo.png"
								alt="ZEP GmbH Logo"
							/>
						</span>
					</a>
					<nav className="self-end">
						<div>
							<div className="flex space-x-6">
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
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
}

export default Header;
