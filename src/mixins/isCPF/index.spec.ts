import { isCPF } from './index';
import { describe, expect, test } from 'vitest';

describe('teste isCPF', () => {
	test('Deve confirmar que um CPF válido é válido', () => {
		expect(isCPF('01028996225')).toBe(true);
		expect(isCPF('010.289.962-25')).toBe(true);
	});
	test('Deve confirmar que um CPF inválido é inválido', () => {
		expect(isCPF('01028996226')).toBe(false);
		expect(isCPF('010.289.962-26')).toBe(false);
	});
});