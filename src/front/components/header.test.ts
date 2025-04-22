import { createHeader } from './header';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'; //nameSpace for jest-dom matchers
import { vi } from 'vitest';

vi.spyOn(console, 'log');

describe('Given creacreateHeader', () => {
    describe('When has created', () => {
        test('Then be a instance of', async () => {
            const header = createHeader();

            // Assert
            expect(header).toBeInstanceOf(HTMLElement);
        });

        test('Then has an H1', () => {
            const element = screen.getByRole('header') as HTMLElement;
            expect(element).toBe('h1');
        });
    });
});
