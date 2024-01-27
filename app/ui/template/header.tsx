import siteConfig from "~/siteConfig";

const Header: React.FC = () => {
	const navLinksClasses = "text-white hover:text-gray-200 font-semibold";
	return (
		<>
			<div
				id="Header"
				className="sticky top-0 z-20 bg-gray-800 text-white px-6 py-4"
			>
				<div className="flex flex-row justify-between container mx-auto">
					<p className="self-start text-xl font-bold">{siteConfig.siteName}</p>
					<nav className="self-end">
						<div>
							<div className="flex space-x-4">
								<a
									href="#"
									className={navLinksClasses}
								>
									Home
								</a>
								<a
									href="#"
									className={navLinksClasses}
								>
									About
								</a>
								<a
									href="#"
									className={navLinksClasses}
								>
									Services
								</a>
								<a
									href="#"
									className={navLinksClasses}
								>
									Portfolio
								</a>
								<a
									href="#"
									className={navLinksClasses}
								>
									Contact
								</a>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};

export default Header;
