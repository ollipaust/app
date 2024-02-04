import type { MetaFunction } from "@remix-run/node";
import siteConfig from "~/utils/siteConfig.tsx";

export const meta: MetaFunction = () => {
	return [{ title: siteConfig.siteName }, { name: "description", content: siteConfig.siteDescription }];
};

export default function Index() {
	return (
		<div>
			<header
				id="header"
				className="relative"
			>
				<div className="container max-w-screen-xl">
					<p className="mb-1 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">blabla</p>
					<div className="flex items-center">
						<h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-ci-dark-1">This is a h1-Headline!</h1>
					</div>
					<p className="mt-2 text-lg text-emerald-700 dark:text-emerald-400">Lorem ipsum dolor sit amet.</p>
				</div>
			</header>

			<div className="relative mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center gap-8">Willkommen</div>
		</div>
	);
}
