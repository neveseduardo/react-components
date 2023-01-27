import { formatDate } from './index';
import { describe, expect, test } from 'vitest';

describe('teste formatDate', () => {
	test('função formatDate', () => {
		expect(formatDate('2020-01-01', 'dd/MM/yyyy')).toBe('01/01/2020');
	});
});