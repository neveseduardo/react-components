import { describe, expect, test } from 'vitest';
import { allValuesAreEmpty } from './index';

describe('teste allValuesAreEmpty', () => {
	test('função allValuesAreEmpty válida', () => {
		expect(allValuesAreEmpty(['', ''])).toBe(true);
	});
	test('função allValuesAreEmpty inválida', () => {
		expect(allValuesAreEmpty(['tests', 'testes'])).toBe(false);
	});
});