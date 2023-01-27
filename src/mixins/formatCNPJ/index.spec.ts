import { formatCNPJ } from './index';
import { describe, expect, test } from 'vitest';

describe('teste formatCNPJ', () => {
	test('função formatCNPJ', () => {
		expect(formatCNPJ('09249022000164')).toBe('09.249.022/0001-64');
	});
});