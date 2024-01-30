import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { cssBundleHref } from "@remix-run/css-bundle";

import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next";
import i18next from "./utils/i18next.server.ts";

import siteConfig from "./utils/siteConfig.tsx";
import { responseHeaders } from "./utils/responseHeaders.tsx";

import Layout from "./ui/template/layout.tsx";
import tailwindStylesheet from "./ui/styles/tailwind.css";
import customStylesheet from "./ui/styles/custom.css";

// Styles
export const links: LinksFunction = () => [
	{
		rel: "stylesheet",
		href: tailwindStylesheet,
	},
	{
		rel: "stylesheet",
		href: customStylesheet,
	},
	{
		rel: "stylesheet",
		href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
	},
	{
		rel: "stylesheet",
		href: "https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.1.0/css/flag-icons.min.css",
	},
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

// Application

export async function loader({ request }: LoaderFunctionArgs) {
  let locale = await i18next.getLocale(request);
  return json({ locale });
}

export let handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "common",
};

export default function App() {
  // Get the locale from the loader
  let { locale } = useLoaderData<typeof loader>();

  let { i18n } = useTranslation();

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()}>
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
  );
}