import { maxChar } from './index';
import { describe, expect, test } from 'vitest';

describe('teste maxChar', () => {
	test('função maxChar válida', () => {
		expect(maxChar(5, '333')).toBe(true);
	});
	test('função maxChar inválida', () => {
		expect(maxChar(5, '4454545454')).toBe(false);
	});
});