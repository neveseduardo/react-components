import { isEmpty } from '../isEmpty';
import { formatPhoneNumber } from '../formatPhoneNumber';

export function isPhoneNumber(phoneNumber: string): boolean {
	if (isEmpty(phoneNumber)) return false;
	phoneNumber = formatPhoneNumber(phoneNumber);
	// eslint-disable-next-line no-useless-escape
	const expression = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/g;
	return expression.test(String(phoneNumber).toLowerCase());
}