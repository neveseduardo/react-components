import { format, parseISO } from 'date-fns';

export function formatDate(date: string, stringFormat = 'dd/MM/yyyy h:mm:ss'): string {
	const formated = format(parseISO(date), stringFormat);
	return formated;
}