import { render, fireEvent, cleanup } from 'react-testing-library';
import React from 'react';
import 'jest-dom/extend-expect';

import Display from './display';
import Dashboard from './dashboard';
import App from '../App'

afterEach(cleanup);

const props = {
    strikes: 0,
    balls: 0
}

describe('Strike tests', () => {
    
    it('renders without crashing', () => {
        render(<Display />)
    });

    it('Strike button increments strike count', () => {
        const app = render(<App />)
        const displayComponent = render(<Display />);
        const dashboardComponent = render(<Dashboard />);

        const button = dashboardComponent.getByTestId('strikeButton');
        fireEvent.click(button);
        const display = displayComponent.getByTestId('displayStrikes');
        expect(display).toHaveTextContent('1')
    });

    it('Strike count resets to 0 on 3rd', () => {
        const app = render(<App />)
        const displayComponent = render(<Display />);
        const dashboardComponent = render(<Dashboard />);

        const button = dashboardComponent.getByTestId('strikeButton');
        fireEvent.click(button); fireEvent.click(button); fireEvent.click(button);
        const display = displayComponent.getByTestId('displayStrikes');
        expect(display).toHaveTextContent('0')
    })
});

describe('Ball tests', () => {

    it('Ball count increments', () => {
        const app = render(<App />)
        const displayComponent = render(<Display />);
        const dashboardComponent = render(<Dashboard />);

        const button = dashboardComponent.getByTestId('ballButton');
        fireEvent.click(button); 
        const display = displayComponent.getByTestId('displayBalls');
        expect(display).toHaveTextContent('1')
    });

    it('resets ball count on 4th ball', () => {
        const app = render(<App />)
        const displayComponent = render(<Display />);
        const dashboardComponent = render(<Dashboard />);

        const button = dashboardComponent.getByTestId('ballButton');
        fireEvent.click(button); fireEvent.click(button); fireEvent.click(button); fireEvent.click(button);
        const display = displayComponent.getByTestId('displayBalls');
        expect(display).toHaveTextContent('0')
    })
})