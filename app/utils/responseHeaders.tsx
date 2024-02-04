import type { HeadersFunction } from "@remix-run/node";
import parseCacheControl from "parse-cache-control";

export const responseHeaders: HeadersFunction = ({ loaderHeaders, parentHeaders }) => {
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
        "Content-Security-Policy":
            "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; img-src 'self' https://cdnjs.cloudflare.com data:; object-src 'none'; frame-ancestors 'self'; base-uri 'self'; connect-src 'self' ws://localhost:3001 https://prod.spline.design;",
        "Content-Type": "text/html; charset=UTF-8",
        "Content-Encoding": "none",
        "X-Frame-Options": "SAMEORIGIN",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "geolocation=(self), microphone=()",
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
        "X-Content-Type-Options": "nosniff",
        "Cross-Origin-Embedder-Policy": "require-corp",
        "Cross-Origin-Opener-Policy": "same-origin",
        "Cross-Origin-Resource-Policy": "same-site",
    };
};
