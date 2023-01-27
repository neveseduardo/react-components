export function formatPercent(value: string): string {
	// eslint-disable-next-line no-useless-escape
	const reg = /^-?\$?\d+((.\d{3}|,\d{3})+)?(\,\d+|\.\d+)?$/;
	return reg.test(value) ? `${value}%` : value;
}