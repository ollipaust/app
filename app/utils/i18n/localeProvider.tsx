import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const LocaleContext = createContext<{
  currentLocale: string;
  setCurrentLocale: (locale: string) => void;
}>({ currentLocale: "", setCurrentLocale: () => {} });

export function LocaleProvider({ children, defaultLocale }: { children: ReactNode; defaultLocale: string }) {
  const [cookies, setCookie, removeCookie] = useCookies(["appUserLocale"]);
  const [currentLocale, setCurrentLocale] = useState(cookies.appUserLocale || defaultLocale);

  useEffect(() => {
    setCookie("appUserLocale", currentLocale, { path: '/' });

  }, [currentLocale, setCookie]);

  useEffect(() => {
    const cookieLocale = cookies.appUserLocale;
    if (cookieLocale && cookieLocale !== currentLocale) {
      setCurrentLocale(cookieLocale);
    }
    
  }, []);

  const storedValues = { currentLocale, setCurrentLocale };

  return (
    <LocaleContext.Provider value={storedValues}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
