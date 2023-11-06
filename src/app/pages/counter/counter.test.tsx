import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Counter from './counter';

const renderComponent = () => render(<Counter />);

afterEach(() => {
    cleanup();
});

describe('Counter Test Suite', () => {
    it('Test 01 - Counter renders correctly', async () => {
        const { getByTestId } = renderComponent();

        expect(getByTestId('counter-value')).toHaveTextContent('0');
    });

    it('Test 02 - Counter app functions correctly', async () => {
        const { getByTestId } = renderComponent();
        const btnIncrement = getByTestId('btn-increment');
        const btnDecrement = getByTestId('btn-decrement');
        fireEvent.click(btnIncrement); // 1
        fireEvent.click(btnIncrement); // 2
        fireEvent.click(btnIncrement); // 3
        fireEvent.click(btnIncrement); // 4
        fireEvent.click(btnIncrement); // 5
        fireEvent.click(btnDecrement); // 4
        
        expect(getByTestId('counter-value')).toHaveTextContent('4');
    });

    it('Test 03 - Counter app negative value does not appear', async () => {
        const { getByTestId } = renderComponent();
        const btnDecrement = getByTestId('btn-decrement');
        fireEvent.click(btnDecrement);
        fireEvent.click(btnDecrement);
        fireEvent.click(btnDecrement);
        fireEvent.click(btnDecrement);
        fireEvent.click(btnDecrement);
        fireEvent.click(btnDecrement);
        
        expect(getByTestId('counter-value')).toHaveTextContent('0');
    });
});
