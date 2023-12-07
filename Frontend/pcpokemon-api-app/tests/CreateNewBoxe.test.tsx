import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import { describe, it, expect } from '@jest/globals'
import CreateNewBoxe from '../src/pages/CreateNewBoxe';
import React from "react";

describe('CreateNewBoxe component', () => {
  it('renders CreateNewBoxe and handles form submission', async () => {
    const history = createMemoryHistory();

    render(
      <MemoryRouter>
          <CreateNewBoxe />
      </MemoryRouter>
    );

    // Add your assertions based on the rendered content
    const createBoxeButton = screen.getByText('Create my boxe');
    expect(createBoxeButton).toBeInTheDocument();

    // Trigger form submission
    act(() => {
      fireEvent.submit(screen.getByRole('button', { name: 'Create my boxe' }));
    });

    // Wait for the navigation to occur
    await waitFor(() => expect(history.location.pathname).toBe('/'));
  });
});