import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { HeadersFunction, LinksFunction } from "@remix-run/node";
import parseCacheControl from "parse-cache-control";

import Layout from "~/ui/template/layout";

import baseStylesheet from "~/ui/styles/base.css";

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

export const headers: HeadersFunction = ({ loaderHeaders, parentHeaders }) => {
    const defaultMaxAge = 31560000;

    const getCacheMaxAge = (headers: Headers) => {
        const cacheControl = headers.get("Cache-Control");
        const parsed = cacheControl ? parseCacheControl(cacheControl) : null;
        return parsed && typeof parsed["max-age"] === "number" ? parsed["max-age"] : defaultMaxAge;
    };

    const loaderMaxAge = getCacheMaxAge(loaderHeaders);
    const parentMaxAge = getCacheMaxAge(parentHeaders);

    const maxAge = Math.min(loaderMaxAge, parentMaxAge);

    return {
        "Cache-Control": `max-age=${maxAge}, s-maxage=${maxAge * 12}`,
        "Content-Security-Policy": "default-src 'self'; script-src 'self'; object-src 'none'; frame-ancestors 'self'; base-uri 'self';",
        "X-Frame-Options": "SAMEORIGIN",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "geolocation=(self), microphone=()",
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
        "X-Content-Type-Options": "nosniff",
		"Cross-Origin-Embedder-Policy": "require-corp",
        "Cross-Origin-Opener-Policy": "same-origin",
        "Cross-Origin-Resource-Policy": "same-site",
    };
};

export default function App() {
	return (
		<html lang="en">
			<head>
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
