import { createFormAdd } from './form.add';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom'; //nameSpace for jest-dom matchers

describe('Given createFormAdd', () => {
    describe('When is instantiated  ', () => {
        test('Them a instance be create', async () => {
            const form = createFormAdd([], 'body', 'afterbegin');

            expect(form).toBeInstanceOf(HTMLFormElement);
        });
        test('Then a Form be in the document', () => {
            const formElement = screen.getByRole('form', {
                name: 'add_form',
            }) as HTMLFormElement;

            expect(formElement).toBeInTheDocument();
        });

        test('Then have a button in document', () => {
            const button = screen.getByRole('button') as HTMLElement;

            expect(button).toBeInTheDocument();
            expect(button).toHaveAttribute('type', 'submit');
        });
    });
});
