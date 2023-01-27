import { formatMoney } from './index';
import { describe, expect, test } from 'vitest';

describe('teste formatMoney', () => {
	test('função formatMoney válida', () => {
		expect(formatMoney(55.5)).toMatch(/[R$ 55,50]/);
	});
});