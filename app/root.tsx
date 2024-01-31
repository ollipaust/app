import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import siteConfig from "./utils/siteConfig.tsx";
import { responseHeaders } from "./utils/responseHeaders.tsx";
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

// Application
export default function App() {
	return (
		<html lang="en">
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
