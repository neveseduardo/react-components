import { format, parseISO, sub } from 'date-fns';
import { describe, expect, test } from 'vitest';
import { minimumDate } from './index';

describe('teste minimumDate', () => {
	test('função minimumDate para data válida e inválida', () => {
		const data = '2022-01-01';
		const max = format(sub(parseISO(data), { days: 1 }), 'yyyy-MM-dd');
		expect(minimumDate(max, data)).toBe(true);
		expect(minimumDate(data, max)).toBe(false);
	});
});