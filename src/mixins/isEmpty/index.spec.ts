import { isEmpty } from './index';
import { describe, expect, test } from 'vitest';

describe('teste isEmpty', () => {
	test('função isEmpty para array vazio', () => {
		expect(isEmpty([])).toBe(true);
	});
	test('função isEmpty para array cheio', () => {
		expect(isEmpty([1, 2, 3])).toBe(false);
	});

	test('função isEmpty para objeto vazio', () => {
		expect(isEmpty({})).toBe(true);
	});

	test('função isEmpty para objeto vazio', () => {
		expect(isEmpty({ id: 1 })).toBe(false);
	});

	test('função isEmpty para string vazia', () => {
		expect(isEmpty('')).toBe(true);
	});

	test('função isEmpty para string vazia', () => {
		expect(isEmpty('alguma coisa')).toBe(false);
	});

	test('função isEmpty valor undefined', () => {
		expect(isEmpty(undefined)).toBe(true);
	});

	test('função isEmpty valor null', () => {
		expect(isEmpty(null)).toBe(true);
	});
});