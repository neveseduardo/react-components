import { onlyNumbers } from '../onlyNumbers';

export function formatCNPJ(cnpj: string): string {
	cnpj = onlyNumbers(cnpj);
	if (cnpj.length < 14) return cnpj;
	cnpj = cnpj.slice(0, 14);
	cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
	return cnpj;
}