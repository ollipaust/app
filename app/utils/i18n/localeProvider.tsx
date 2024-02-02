// Inside ~/utils/i18n/localeProvider.tsx
import { createContext, ReactNode, useContext, useEffect } from "react";
import { useLocaleCookie } from "./useLocaleCookie.ts";

// Creating a context with a default value
const LocaleContext = createContext<{
	currentLocale: string;
	setCurrentLocale: (locale: string) => void;
}>({ currentLocale: "", setCurrentLocale: () => {} });

export function LocaleProvider({ children, defaultLocale }: { children: ReactNode; defaultLocale: string }) {
	const [currentLocale, setCurrentLocale] = useLocaleCookie("appUserLocale", defaultLocale);

	useEffect(() => {
		if (defaultLocale.startsWith("de-")) {
			setCurrentLocale('de');
		} else {
			setCurrentLocale('en');
		}
	}, [defaultLocale, setCurrentLocale]);

	// Providing both currentLocale and a method to update it
	const storedValues = { currentLocale, setCurrentLocale };

	return <LocaleContext.Provider value={storedValues}>{children}</LocaleContext.Provider>;
}

// Exporting useLocale as a named export
export function useLocale() {
	const context = useContext(LocaleContext);
	if (!context) {
		throw new Error("useLocale must be used within a LocaleProvider");
	}
	return context;
}
