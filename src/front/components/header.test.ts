import { createHeader } from './header';
import { screen } from '@testing-library/dom';
//import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'; //nameSpace for jest-dom matchers
import { vi } from 'vitest';

vi.spyOn(console, 'log');

describe('Given createHeader', () => {
    describe('When has created', () => {
        test('Then be a instance of', async () => {
            const header = createHeader();

            // Assert
            expect(header).toBeInstanceOf(HTMLElement);
        });

        test('Then be an H1', () => {
            const element = screen.getByRole('heading') as HTMLElement;
            expect(element).toContainHTML('Productos');
        });
    });
});
