export function getQueryParam(param: string) {
	if (window) {
		const params = new URLSearchParams(window.location.search.substring(1));
		return params.get(param);
	}
	return {};
}