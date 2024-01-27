import { generateRobotsTxt } from "@nasa-gcn/remix-seo";
import siteConfig from "~/siteConfig";

export function loader() {
	return generateRobotsTxt([{ type: "sitemap", value: `${siteConfig.siteUrl}/sitemap.xml` }]);
}
