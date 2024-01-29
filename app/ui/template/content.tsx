import { useTranslation } from "react-i18next";

interface ContentProps {
	children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
	const { i18n } = useTranslation();
	const language = i18n.resolvedLanguage;

	// Map languages to their flag CSS variables
	const flagMap = {
		en: "--us-flag",
		de: "--de-flag",
	};
	const flagClass = flagMap[language as keyof typeof flagMap] || "--us-flag";

	return (
		<>
			<main
				id="MainContent"
				className="flex-grow py-12"
			>
				<div className="container mx-auto bg-white shadow-lg rounded px-8 pt-10 pb-20">
					{children}
					<div className={`blobs ${flagClass}`} />
				</div>
			</main>
		</>
	);
};

export default Content;
