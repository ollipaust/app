import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { responseHeaders } from "./utils/responseHeaders.tsx";

import siteConfig from "./utils/siteConfig.tsx";
import iconsHref from "~/icons.svg";
import Layout from "./ui/template/layout.tsx";
import MainBackground from "./ui/components/mainBackground.tsx";

import tailwindStylesheet from "./ui/styles/tailwind.css";
import globalStylesheet from "./ui/styles/global.css";

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
			href: globalStylesheet,
		},
		{
			rel: "stylesheet",
			href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
		},
	];
};

interface DocumentProps {
	children: React.ReactNode;
	isDev: boolean;
}

// Document
function Document({ children, isDev }: DocumentProps) {
	return (
		<html
			lang="de"
			className="relative"
		>
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
			<body className="lg:py-16 lg:px-0 p-4 bg-ci-primary-1">
				<MainBackground
					id="splineBg"
					className="fixed top-0 -z-10 w-full h-full bg-ci-primary-1 blur-2xl brightness-50 scale-110"
				/>
				<Layout>
					{children}
					<ScrollRestoration />
					<Scripts />
					{isDev ? <LiveReload /> : null}
				</Layout>
			</body>
		</html>
	);
}

// Application
export default function App() {
	return (
		<Document isDev={process.env.NODE_ENV === "development"}>
			<Outlet />
			<img
				src={iconsHref}
				alt=""
				hidden
				// this img tag simply forces the icons to be loaded at a higher
				// priority than the scripts (chrome only for now)
				// @ts-expect-error -- silly React pretending this attribute doesn't exist
				fetchpriority="high"
			/>
		</Document>
	);
}
