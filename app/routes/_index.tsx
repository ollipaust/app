import type { MetaFunction } from "@remix-run/node";

import siteConfig from "~/siteConfig";

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
