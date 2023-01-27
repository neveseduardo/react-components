import { describe, expect, test } from 'vitest';
import { randNumber } from './index';

describe('teste randNumber', () => {
	test('função randNumber válida', () => {
		expect(String(randNumber(1, 10))).toMatch(/^([1-9]|10)$/);
	});
});