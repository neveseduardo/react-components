import { isEmpty } from '../isEmpty';

export function maxChar(max: number, string: string): boolean {
	if (isEmpty(string)) return false;
	if (isEmpty(max)) return false;
	return String(string).length <= Number(max);
}