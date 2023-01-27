import { formatCPF } from './index';
import { describe, expect, test } from 'vitest';

describe('teste formatCPF', () => {
	test('função formatCPF', () => {
		expect(formatCPF('65201799060')).toBe('652.017.990-60');
	});
});