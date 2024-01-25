import type { MetaFunction } from "@remix-run/node";

import siteConfig from "~/siteConfig";

export const meta: MetaFunction = () => {
	return [{ title: siteConfig.siteName }, { name: "description", content: siteConfig.siteDescription }];
};

export default function Lol() {
	return (
		<main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
                <p>Lol Test</p>
		</main>
	);
}
