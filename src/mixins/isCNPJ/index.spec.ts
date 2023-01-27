import { isCNPJ } from './index';
import { describe, expect, test } from 'vitest';

describe('teste isCNPJ', () => {
	test('função isCNPJ para CNPJ válido', () => {
		expect(isCNPJ('09.249.022/0001-64')).toBe(true);
	});
	test('função isCNPJ para CNPJ inválido', () => {
		expect(isCNPJ('09.249.022/00558874')).toBe(false);
	});
});