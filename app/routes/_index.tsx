import type { MetaFunction } from "@remix-run/node";

import siteConfig from "~/siteConfig";

export const meta: MetaFunction = () => {
	return [{ title: siteConfig.siteName }, { name: "description", content: siteConfig.siteDescription }];
};

export default function Index() {
	return (
		<div>
			<header
				id="header"
				className="relative z-20"
			>
				<div>
					<p className="mb-1 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">Heading</p>
					<div className="flex items-center">
						<h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900">This is a h1-Headline!</h1>
					</div>
				</div>
				<p className="mt-2 text-lg text-slate-700 dark:text-slate-400">Lorem ipsum dolor sit amet.</p>
			</header>
			<ul className="mt-8">
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
		</div>
	);
}
