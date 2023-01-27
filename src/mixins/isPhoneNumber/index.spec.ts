import { isPhoneNumber } from './index';
import { describe, expect, test } from 'vitest';

describe('teste isPhoneNumber', () => {
	test('função isPhoneNumber para valor válido', () => {
		expect(isPhoneNumber('91989514581')).toBe(true);
	});
	test('função isPhoneNumber para valor inválido', () => {
		expect(isPhoneNumber('9198951')).toBe(false);
	});
});