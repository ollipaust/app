import { generateSitemap } from '@nasa-gcn/remix-seo'
import { routes } from '@remix-run/dev/server-build'
import { type LoaderFunctionArgs } from '@remix-run/node'
import siteConfig from '~/siteConfig'

export function loader({ request }: LoaderFunctionArgs) {
	return generateSitemap(request, routes, {
		siteUrl: siteConfig.siteUrl,
		headers: {
			'Cache-Control': `public, max-age=${60 * 5}`,
		},
	})
}