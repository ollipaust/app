// Assuming ~/ui/components/LanguageSwitch.tsx path
import React from 'react';
import { useLocale } from '~/utils/i18n/localeProvider.tsx';

const LanguageSwitch = () => {
  const { currentLocale, setCurrentLocale } = useLocale();

  const toggleLocale = () => {
    // Example toggle between 'en-US' and 'de-DE'
    const newLocale = currentLocale.startsWith('en') ? 'de-DE' : 'en-US';
    setCurrentLocale(newLocale);
    // No need to directly call useLocaleCookie here since setCurrentLocale
    // is already tied to the cookie update mechanism in LocaleProvider
  };

  return (
	<>
	<p>Current: {currentLocale}</p>
    <button onClick={toggleLocale}>
      Switch Locale
    </button>
	</>
  );
};

export default LanguageSwitch;
