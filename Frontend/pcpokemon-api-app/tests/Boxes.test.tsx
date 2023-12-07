import { screen, render, waitFor } from '@testing-library/react';
import { getBoxes } from '../src/services/BoxeService';
import { BrowserRouter as Router } from 'react-router-dom';
import Boxes from '../src/pages/Boxes';
import React from 'react';
import {jest, describe, test, expect } from '@jest/globals'

jest.mock('../src/services/BoxeService');

describe('Tests for Boxe commponent', () => {

    const mockedGetBoxes = getBoxes as jest.MockedFunction<typeof getBoxes>;

    test('renders box information', async () => {

        const mockBoxesData = {
            codeStatus: 200,
            boxes: [
                { id: 1, name: 'Boxe 1' },
                { id: 2, name: 'Boxe 2' },
            ],
        };

        mockedGetBoxes.mockResolvedValueOnce(mockBoxesData);

        render(
                <Router>
                    <Boxes />
                </Router>
        );

        expect(screen.getByText(/Create a box/i)).toBeInTheDocument();
      
        // Wait for the data to be fetched and the component to update
        await waitFor(() => {
            expect(screen.getByText(/Boxe 1/i)).toBeInTheDocument();
            expect(screen.getByText(/Boxe 2/i)).toBeInTheDocument();
        });
    });
})
