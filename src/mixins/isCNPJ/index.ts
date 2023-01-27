import { onlyNumbers } from '../onlyNumbers';
import { isEmpty } from '../isEmpty';

export function isCNPJ(cnpj: string): boolean {
	if (isEmpty(cnpj)) return false;

	cnpj = onlyNumbers(cnpj);

	if (cnpj.length !== 14) return false;

	let tamanho = cnpj.length - 2,
		numeros = cnpj.slice(0, tamanho),
		soma = 0,
		pos = tamanho - 7,
		// eslint-disable-next-line prefer-const
		digitos = cnpj.slice(tamanho);

	for (let i = tamanho; i >= 1; i--) {
		soma += Number(numeros.charAt(tamanho - i)) * pos--;
		if (pos < 2) pos = 9;
	}

	let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

	if (resultado !== Number(digitos.charAt(0))) return false;

	tamanho = tamanho + 1;
	numeros = cnpj.slice(0, tamanho);
	soma = 0;
	pos = tamanho - 7;

	for (let i = tamanho; i >= 1; i--) {
		soma += Number(numeros.charAt(tamanho - i)) * pos--;
		if (pos < 2) pos = 9;
	}

	resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

	if (resultado !== Number(digitos.charAt(1))) return false;

	return true;
}