import { onlyNumbers } from '../onlyNumbers';

export function formatPhoneNumber(fn: string): string {
	let match: any = '';
	fn = onlyNumbers(fn);
	match = fn.length === 8 ? fn.match(/^(\d{4})(\d{4})$/) : match;
	match = fn.length === 9 ? fn.match(/^(\d{5})(\d{4})$/) : match;
	match = fn.length === 10 ? fn.match(/^(\d{2})(\d{4})(\d{4})$/) : match;
	match = fn.length === 11 ? fn.match(/^(\d{2})(\d{5})(\d{4})$/) : match;
	if (match.length > 0) return `(${match[1]}) ${match[2]}-${match[3]}`;
	return match;
}