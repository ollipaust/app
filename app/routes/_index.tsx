import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import parseCacheControl from "parse-cache-control";

import siteConfig from '~/siteConfig';

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
	};
};

export const meta: MetaFunction = () => {
	return [{ title: siteConfig.siteName }, { name: "description", content: siteConfig.siteDescription }];
};

export default function Index() {
	return (
		<main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
			<h1>Welcome to Remix!!!</h1>
			<ul>
				<li>
					<a
						target="_blank"
						href="https://remix.run/tutorials/blog"
						rel="noreferrer noopener"
					>
						15m Quickstart Blog Tutorial
					</a>
				</li>
				<li>
					<a
						target="_blank"
						href="https://remix.run/tutorials/jokes"
						rel="noreferrer noopener"
					>
						Deep Dive Jokes App Tutorial
					</a>
				</li>
				<li>
					<a
						target="_blank"
						href="https://remix.run/docs"
						rel="noreferrer noopener"
					>
						Remix Docs
					</a>
				</li>
			</ul>
		</main>
	);
}
