import { isNumber } from '../isNumber';

export function formatMoney(value: number, minf = 2, maxf = 2): string {
	const nf = new Intl.NumberFormat('pt-br', {
		style: 'currency',
		currency: 'BRL',
		minimumFractionDigits: minf,
		maximumFractionDigits: maxf
	});
	const res = nf.format(value);
	return isNumber(value) ? res : '-';
}