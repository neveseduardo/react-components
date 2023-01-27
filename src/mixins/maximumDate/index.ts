import { isBefore, parseISO } from 'date-fns';

export function maximumDate(max: string, date: string): boolean {
	return isBefore(parseISO(date), parseISO(max));
}