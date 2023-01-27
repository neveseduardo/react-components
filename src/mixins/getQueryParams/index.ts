export function getQueryParams(): {} {
	if (window) {
		const params: any = new URLSearchParams(window.location.search);
		return Object.fromEntries(params);
	}
	return {};
}