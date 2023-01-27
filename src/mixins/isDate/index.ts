import { isEmpty } from '../isEmpty';

export function isDate(value: any): boolean {
	if (isEmpty(value)) return false;
	if (String(value).length < 10) return false;
	// eslint-disable-next-line no-useless-escape
	const PT = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
	const ISO = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
	value = String(value).slice(0, 10);
	return PT.test(value) || ISO.test(value);
}