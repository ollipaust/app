import React from "react";
import { Link, useLocation } from "@remix-run/react";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
	const location = useLocation();
	const pathname = location.pathname.replace(/\/$/, "");

	const { i18n } = useTranslation();
	const language = i18n.resolvedLanguage;

	const langs = [
		{ flag: <span className="fi fi-gb" />, text: "English", value: "en" },
		{ flag: <span className="fi fi-de" />, text: "Deutsch", value: "de" },
	];

	return (
		<div className="flex items-center gap-3">
			{langs.map(({ flag, text, value }, index) => (
				<React.Fragment key={value}>
					<Link
						to={`${pathname}?lng=${value}`}
						className={`scalable opacity-40 hover:opacity-60 ${language === value && "!opacity-100"}`}
						title={text}
					>
						{flag || text}
					</Link>
					{index < langs.length - 1 && <span>|</span>}
				</React.Fragment>
			))}
		</div>
	);
}
