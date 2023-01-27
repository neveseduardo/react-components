import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { GButton } from '@/components';

describe('Button', () => {
	test('Deve renderizar o testo como filho', () => {

		render(<GButton>content</GButton>);

		expect(screen.getByText(/content/i)).toBeDefined();
	});
});