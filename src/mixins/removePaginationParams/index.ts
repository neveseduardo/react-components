import { removeQueryParam } from '../removeQueryParam';

export function removePaginationParams(): void {
	removeQueryParam('per_page');
	removeQueryParam('page');
}
