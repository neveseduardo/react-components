import { minChar } from './index';
import { describe, expect, test } from 'vitest';

describe('teste minChar', () => {
	test('função minChar válida', () => {
		expect(minChar(5, '55554545')).toBe(true);
	});
	test('função minChar inválida', () => {
		expect(minChar(5, '445')).toBe(false);
	});
});