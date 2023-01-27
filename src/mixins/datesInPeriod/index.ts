import { add, format, isDate, parseISO } from 'date-fns';

export function datesInPeriod(start: string, end: string): string[] {
	if (!isDate(parseISO(start)) || !isDate(parseISO(end))) return [];
	const dates = [];
	let startIso = parseISO(start);
	const endIso = parseISO(end);

	while (startIso <= endIso) {
		dates.push(format(startIso, 'yyyy-MM-dd'));
		startIso = add(startIso, { days: 1 });
	}
	return dates;
}