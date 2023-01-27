import { isEmpty } from '../isEmpty';

export function groupBy(items: [], key: string): [] {
	if (isEmpty(items)) return [];
	if (isEmpty(key)) return [];

	let res: any = [];
	const reduce = items.reduce(
		(result, item) => ({
			...result,
			[item[key]]: [...(result[item[key]] || []), item],
		}),
		{}
	);

	Object.entries(reduce).map(([, v]) => {
		res = [...res, v];
	});

	return res;
}