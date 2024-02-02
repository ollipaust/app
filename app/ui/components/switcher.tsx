import { useCookies } from "react-cookie";
import { useLocale } from "~/utils/i18n/localeProvider.tsx";

const LocaleSwitcher = () => {
	const { currentLocale, setCurrentLocale } = useLocale();
	const [, setCookie] = useCookies(["appUserLocale"]);

	const switchLocale = (updatedLocale: string) => {
		setCurrentLocale(updatedLocale);
		setCookie("appUserLocale", updatedLocale);
		console.log("switched to:", updatedLocale);
	};

	return (
		<div>
			<button
				className="block"
				onClick={() => switchLocale("en-US")}
				disabled={currentLocale === "en-US"}
			>
				EN
			</button>
			<button
				className="block"
				onClick={() => switchLocale("de-DE")}
				disabled={currentLocale === "de-DE"}
			>
				DE
			</button>
		</div>
	);
};

export default LocaleSwitcher;
