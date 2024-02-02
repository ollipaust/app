import { useEffect, useState } from "react";

export function getLocaleCookieValue(name: string): string | undefined {
	if (typeof document === "undefined") return undefined;

	const matches = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
	return matches ? (decodeURIComponent(matches[2]) as string) : undefined;
}

function setLocaleCookie(name: string, value: string, days: number = 3650): void {
	const expires = new Date(Date.now() + days * 864e5).toUTCString();
	document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

export function useLocaleCookie(localeCookieName: string, defaultValue: string) {
	const [localeCookie, setLocaleCookieState] = useState<string>(() => {
		const cookieValue = getLocaleCookieValue(localeCookieName);

		return cookieValue || defaultValue;
	});

	useEffect(() => {
		setLocaleCookie(localeCookieName, localeCookie);
	}, [localeCookie, localeCookieName]);

	return [localeCookie, setLocaleCookieState] as const;
}
