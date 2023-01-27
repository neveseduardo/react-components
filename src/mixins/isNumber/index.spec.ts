import { isNumber } from './index';
import { describe, expect, test } from 'vitest';

describe('teste isNumber', () => {
	test('função isNumber válida', () => {
		expect(isNumber(20)).toBe(true);
	});
	test('função isNumber inválida', () => {
		expect(isNumber('testes 52')).toBe(false);
	});
});