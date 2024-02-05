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
					<p className="mb-1 text-sm uppercase leading-6 font-semibold text-ci-accent-1 text-shadow-alt">blabla</p>
					<div className="flex items-center">
						<h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-ci-primary-3">Lorem ipsum, dolor sit amet!</h1>
					</div>
					<p className="text-lg text-white text-shadow">Lorem ipsum dolor sit amet.</p>
				</div>
			</header>

			<div className="relative mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center gap-8 text-ci-dark-2">Willkommen</div>
		</div>
	);
}
