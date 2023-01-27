export function onlyNumbers(string: string): string {
	return String(string).replace(/\D+/g, '');
}