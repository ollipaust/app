import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { responseHeaders } from "./utils/responseHeaders";
import Layout from "~/ui/template/layout";
import baseStylesheet from "~/ui/styles/base.css";
import siteConfig from "./siteConfig";

// HTTP Headers
export const headers = responseHeaders;

// Styles
export const links: LinksFunction = () => {
	return [
		{
			rel: "stylesheet",
			href: "https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/2.0.0/modern-normalize.min.css",
		},
		{
			rel: "stylesheet",
			href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
		},
		{
			rel: "stylesheet",
			href: baseStylesheet,
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
					content="index, follow" />
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
					content={siteConfig.ogImageUrl}></meta>
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
