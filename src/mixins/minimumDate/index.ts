import { isAfter, parseISO } from 'date-fns';

export function minimumDate(min: string, date: string): boolean {
	return isAfter(parseISO(date), parseISO(min));
}