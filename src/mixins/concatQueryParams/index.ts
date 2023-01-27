export function concatQueryParams(key: string, value: string): string {
	const query = new URLSearchParams(window.location.search);
	query.set(key, value);
	return query.toString();
}