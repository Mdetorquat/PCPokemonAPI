import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../src/components/Navbar';
import React from 'react';
import { describe, it, expect} from '@jest/globals'


describe('Navbar component', () => {
  it('renders Navbar component when user is logged in', () => {
    // Mock the useContext hook to return logged-in state

    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Add your assertions based on the rendered content
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    //expect(screen.getByText('Mes boîtes')).toBeInTheDocument();
    //expect(screen.getByText('Mes échanges')).toBeInTheDocument();
    // Add more assertions as needed
  });

  it('renders Navbar component when user is not logged in', () => {
    // Mock the useContext hook to return logged-out state

    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Add your assertions based on the rendered content
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByText("S'inscrire")).toBeInTheDocument();
    expect(screen.getByText('Se connecter')).toBeInTheDocument();
    // Add more assertions as needed
  });
});