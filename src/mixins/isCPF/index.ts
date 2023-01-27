import { onlyNumbers } from '../onlyNumbers';
export function isCPF(cpf: any): boolean {
	cpf = onlyNumbers(cpf);
	if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
	cpf = cpf.split('').map((el: any) => +el);
	const rest = (count: number) =>
		((cpf
			.slice(0, count - 12)
			.reduce(
				(soma: any, el: any, index: any) => soma + el * (count - index),
				0
			) *
            10) %
            11) %
        10;
	return rest(10) === cpf[9] && rest(11) === cpf[10];
}