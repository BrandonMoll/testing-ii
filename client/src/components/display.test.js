import { render, fireEvent } from 'react-testing-library';
import React from 'react';
import 'jest-dom/extend-expect';
import Display from './display';
import Dashboard from './dashboard';
import App from '../App'

describe('The Display Component', () => {
    it('renders without crashing', () => {
        render(<Display />)
    });

    it('Strike tests', () => {
        const app = render(<App />)
        const displayComponent = render(<Display />);
        const dashboardComponent = render(<Dashboard />);

        const button = dashboardComponent.getByTestId('strikeButton');
        const display = displayComponent.getByTestId('displayStrikes');
        fireEvent.click(button);
        expect(display).toHaveTextContent('1')
    })
})