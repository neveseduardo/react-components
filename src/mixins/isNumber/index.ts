export function isNumber(string: string | number): boolean {
	const numericRepr = parseFloat(String(string));
	return !isNaN(numericRepr);
}