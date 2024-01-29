import type { MetaFunction } from "@remix-run/node";

import { useTranslation } from "react-i18next";
import { useHydrated } from "remix-utils/use-hydrated";

import { Footer } from "~/ui/template/footer.tsx";

import siteConfig from "~/utils/siteConfig.tsx";

export const meta: MetaFunction = () => {
	return [{ title: siteConfig.siteName }, { name: "description", content: siteConfig.siteDescription }];
};

const languageToEmojis = {
	en: ["🍵", "EN", "🏰"],
	de: ["🍻", "DE", "🚗"],
};

export default function Index() {
	const isHydrated = useHydrated();

	const { i18n, t } = useTranslation("common");
	const language = i18n.resolvedLanguage;

	const emojis = languageToEmojis[language as keyof typeof languageToEmojis] || ["😀"];

	return (
		<div>
			<header
				id="header"
				className="relative z-20"
			>
				<div className="container">
					<p className="mb-1 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">Heading</p>
					<div className="flex items-center">
						<h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900">This is a h1-Headline!</h1>
					</div>
					<p className="mt-2 text-lg text-slate-700 dark:text-slate-400">Lorem ipsum dolor sit amet.</p>
				</div>
			</header>

			<div className="relative mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center gap-8">
				<span className="group flex items-center gap-4 text-8xl duration-200 hover:-translate-y-1">
					<span className="opacity-60 transition group-hover:opacity-100">{emojis[0]}</span>
					{emojis[1]}
					<span className="opacity-60 transition group-hover:opacity-100">{emojis[2]}</span>
				</span>

				<div className="relative flex max-w-[725px] flex-col items-center justify-center text-center">
					<div className="z-10 flex flex-col items-center justify-center">
						<div className="sm:px-20">
							<span className="text-[17px] font-medium tracking-[-0.16px] text-gray-600 md:text-xl">{t("greeting")}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
