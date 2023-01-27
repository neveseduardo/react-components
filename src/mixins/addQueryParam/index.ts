export function addQueryParam(key: string, value: string): void {
	if (window) {
		const query = new URLSearchParams(window.location.search);
		query.set(key, value);

		if (history?.pushState ?? false) {
			const { protocol, host, pathname, hash } = window.location;
			const url = `${protocol}//${host}${pathname}?${query.toString()}${hash}`;
			window.history.replaceState({ path: url }, '', url);
		} else window.location.search = query.toString();
	}
}