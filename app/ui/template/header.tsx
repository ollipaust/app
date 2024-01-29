import siteConfig from "~/utils/siteConfig.tsx";
import { LanguageSwitcher } from "../components/misc/language-switcher.tsx";

const Header: React.FC = () => {
	const navLinksClasses = "text-white hover:text-gray-500 font-semibold";
	return (
		<>
			<div
				id="Header"
				className="sticky top-0 z-20 bg-slate-900 text-white px-6 py-4"
			>
				<div className="flex flex-row justify-between container mx-auto">
					<a
						href={siteConfig.homeUrl}
						className="self-start text-xl font-bold"
					>
						{siteConfig.siteName}
					</a>
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
								<div>
									<LanguageSwitcher />
								</div>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};

export default Header;
