import { generateRobotsTxt } from "@nasa-gcn/remix-seo";
import siteConfig from "~/utils/siteConfig.tsx";

export function loader() {
	return generateRobotsTxt([{ type: "sitemap", value: `${siteConfig.siteUrl}/sitemap.xml` }]);
}
