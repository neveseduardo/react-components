import { formatPercent } from './index';
import { describe, expect, test } from 'vitest';

describe('teste formatMoney', () => {
	test('função formatMoney válida', () => {
		expect(formatPercent('55.5')).toMatch(/[55,5 %]/);
	});
});