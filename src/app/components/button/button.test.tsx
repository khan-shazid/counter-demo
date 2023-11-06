import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from './button';

afterEach(() => {
    cleanup();
});

describe('Button Component Test Suite', () => {
    it('Test 01 - Check if button click works', async () => {
        let isClicked = false;
        const onClick = () => {
            isClicked = true;
        };
        const { getByTestId } = render(<Button onClick={onClick} />);
        const button = getByTestId('base-button');
        fireEvent.click(button);
        expect(isClicked).toBe(true);
    });

    it('Test 02 - Check if button renders correctly', async () => {
        const { getByTestId } = render(<Button category="secondary" />);
        const button = getByTestId('base-button');
        expect(button).toHaveClass('btn-base secondary');
    });
});
