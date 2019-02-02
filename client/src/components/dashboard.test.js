import { render, fireEvent } from 'react-testing-library';
import React from 'react';
import 'jest-dom/extend-expect';
import Dashboard from './dashboard';

describe('The Dashboard Component', () => {
    it('renders without crashing', () => {
        render(<Dashboard />)
    })
})