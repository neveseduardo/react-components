import { describe, expect, test } from 'vitest';
import { onlyNumbers } from './index';

describe('teste onlyNumbers', () => {
	test('função onlyNumbers', () => {
		expect(onlyNumbers('testes 123')).toBe('123');
	});
});