import { onlyNumbers } from '../onlyNumbers';

export function formatCPF(cpf: string): string {
	cpf = onlyNumbers(cpf);
	if (cpf.length < 11) return cpf;
	cpf = cpf.slice(0, 11);
	cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
	return cpf;
}