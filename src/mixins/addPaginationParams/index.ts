import { addQueryParam } from '../addQueryParam';

export function addPaginationParams(per_page = 20, page = 1): void {
	addQueryParam('per_page', per_page.toString());
	addQueryParam('page', page.toString());
}