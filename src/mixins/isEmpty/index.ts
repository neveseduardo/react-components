export function isEmpty(v: any): boolean {
	if (v === undefined) return true;
	if (v === null) return true;
	if (v === '') return true;
	if (v === Object(v) && !Object.entries(v).length) return true;
	return Array.isArray(v) && !v.length;
}