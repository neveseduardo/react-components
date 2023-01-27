import { datesInPeriod } from './index';
import { describe, expect, test } from 'vitest';

describe('teste datesInPeriod', () => {
	test('função datesInPeriod', () => {
		const arrayDatas = Array.from(datesInPeriod('2020-01-01', '2020-01-02'));
		const arrayMock = Array.from(['2020-01-01', '2020-01-02']);
		expect(arrayDatas.join(',')).toEqual(arrayMock.join(','));
	});
});