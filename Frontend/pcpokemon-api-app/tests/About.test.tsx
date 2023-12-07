import { render, screen } from '@testing-library/react';
import About from '../src/pages/About';
import React from 'react';
import {describe, test, expect } from '@jest/globals'

describe('About Component', () => {
  test('renders developer information', () => {
    render(<About />);

    // Check if the developer's name is rendered
    const developerNameElement = screen.getByText(/Nom : Maxence de Torquat/i);
    expect(developerNameElement).toBeInTheDocument();
  });
});