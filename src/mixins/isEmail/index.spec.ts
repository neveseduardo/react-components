import { isEmail } from './index';
import { describe, expect, test } from 'vitest';

describe('teste isEmail', () => {
	test('função isEmail inválida', () => {
		expect(isEmail('email@email.com')).toBe(true);
	});
	test('função isEmail inválida', () => {
		expect(isEmail('emailemailcom')).toBe(false);
	});
});