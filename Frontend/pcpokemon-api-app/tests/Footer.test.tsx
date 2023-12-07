import { describe, expect, test } from '@jest/globals'
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'
import Footer from '../src/components/Footer'

describe('Footer Component', () => {
    test('renders Footer component', () => { 
        render(
            <BrowserRouter>
              <Footer />
            </BrowserRouter>
        );

        // Check if the Pokemon logo is rendered
        const aboutLink = screen.getByAltText('Logo');
        expect(aboutLink).toBeInTheDocument();
    });
})