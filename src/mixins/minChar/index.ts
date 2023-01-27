import { isEmpty } from '../isEmpty';

export function minChar(min: number, string: string): boolean {
	if (isEmpty(string)) return false;
	if (isEmpty(min)) return false;
	return String(string).length >= Number(min);
}