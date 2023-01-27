export function removeAllQueryParams(): void {
	if (window) {
		if (history?.pushState ?? false) {
			const { protocol, host, pathname } = window.location;
			const url = `${protocol}//${host}${pathname}`;
			window.history.replaceState({ path: url }, '', url);
		} else window.location.search = '';
	}
}