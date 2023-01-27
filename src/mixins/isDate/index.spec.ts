import { isDate } from './index';
import { describe, expect, test } from 'vitest';

describe('teste isDate', () => {
	test('função isDate para valor válido', () => {
		expect(isDate('2022-01-01')).toBe(true);
		expect(isDate('01/01/2022')).toBe(true);
	});
	test('função isDate para valor inválido', () => {
		expect(isDate(null)).toBe(false);
		expect(isDate(undefined)).toBe(false);
		expect(isDate('')).toBe(false);
		expect(isDate('string')).toBe(false);
	});
});