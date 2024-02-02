import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import acceptLanguage from "accept-language-parser";
import { useCookies } from "react-cookie";

import siteConfig from "./utils/siteConfig.tsx";
import { responseHeaders } from "./utils/responseHeaders.tsx";
import { LocaleProvider } from "./utils/i18n/localeProvider.tsx";
import Layout from "./ui/template/layout.tsx";

import tailwindStylesheet from "./ui/styles/tailwind.css";

// HTTP Headers
export const headers = responseHeaders;

// Styles
export const links: LinksFunction = () => {
	return [
		{
			rel: "stylesheet",
			href: tailwindStylesheet,
		},
		{
			rel: "stylesheet",
			href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
		},
	];
};

export const loader: LoaderFunction = async ({ request }) => {
    const languages = acceptLanguage.parse(request.headers.get("Accept-Language") as string);
    if (languages?.length > 0) {
        return languages[0].code; 
    }

    return "en";
};


// Application
export default function App() {
	const detectedLocale = useLoaderData<string>();
    const [, setCookie] = useCookies(['appUserLocale']);
    const formattedLocale = detectedLocale.startsWith('de') ? 'de-DE' : 'en-US';

    useEffect(() => {
        setCookie('appUserLocale', formattedLocale, { path: '/' });
    }, [formattedLocale, setCookie]);
    
    return (
        <LocaleProvider defaultLocale={formattedLocale}>
			<html lang={detectedLocale}>
				<head>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<meta
						name="robots"
						content="index, follow"
					/>
					<meta
						name="theme-color"
						content={siteConfig.themeColor}
					/>
					<meta
						property="og:url"
						content={siteConfig.siteUrl}
					/>
					<meta
						property="og:title"
						content={siteConfig.siteName}
					/>
					<meta
						property="og:description"
						content={siteConfig.siteDescription}
					/>
					<meta
						property="og:image"
						content={siteConfig.ogImageUrl}
					/>
					<Meta />
					<Links />
				</head>
				<body>
					<Layout>
						<Outlet />
						<ScrollRestoration />
						<Scripts />
						<LiveReload />
					</Layout>
				</body>
			</html>
		</LocaleProvider>
	);
}
