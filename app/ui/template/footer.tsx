import siteConfig from "~/siteConfig";

const Footer: React.FC = () => {
	return (
		<footer
			id="Footer"
			className="bg-gray-800 text-white text-center py-4"
		>
			<div className="container mx-auto">
				<p className="text-sm">
					&copy; {siteConfig.siteYear} {siteConfig.author}. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
