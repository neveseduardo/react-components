import { format, parseISO, add } from 'date-fns';
import { maximumDate } from './index';
import { describe, expect, test } from 'vitest';

describe('teste maximumDate', () => {
	test('função maximumDate para data válida e inválida', () => {
		const data = '2022-01-01';
		const max = format(add(parseISO(data), { days: 1 }), 'yyyy-MM-dd');
		expect(maximumDate(max, data)).toBe(true);
		expect(maximumDate(data, max)).toBe(false);
	});
});