import { formatPhoneNumber } from './index';
import { describe, expect, test } from 'vitest';

describe('teste formatPhoneNumber', () => {
	test('função formatPhoneNumber', () => {
		expect(formatPhoneNumber('91989514581')).toBe('(91) 98951-4581');
	});
});