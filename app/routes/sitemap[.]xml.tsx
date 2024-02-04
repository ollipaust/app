import { generateSitemap } from "@nasa-gcn/remix-seo";
// @ts-expect-error
import { routes } from "@remix-run/dev/server-build";
import { type LoaderFunctionArgs } from "@remix-run/node";
import siteConfig from "~/utils/siteConfig.tsx";

export function loader({ request }: LoaderFunctionArgs) {
	return generateSitemap(request, routes, {
		siteUrl: siteConfig.siteUrl,
		headers: {
			"Cache-Control": `public, max-age=${60 * 5}`,
		},
	});
}
