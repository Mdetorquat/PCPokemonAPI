import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {describe, test, expect} from '@jest/globals'
import { useContext } from 'react';
import TrainerContext from '../src/contexts/TrainerContext';


export const defaultTrainerData = {
    accessToken: '',
    trainerId: 0,
  }

export const TrainerContextProvider = ({ children }: { children: ReactNode }) => {
    return (
      <TrainerContext.Provider value={{ trainerData: defaultTrainerData, setTrainerData: () => undefined }}>
        {children}
      </TrainerContext.Provider>
    );
};

describe('TrainerContextProvider', () => {
  test('Sets default values for TrainerContext', () => {
    render(
      <TrainerContextProvider>
        <TestComponent />
      </TrainerContextProvider>
    );

    // Access the TrainerContext values using the TestComponent
    const trainerDataElement = screen.getByTestId('trainerData');
    
    // Assert that the default values are set
    expect(trainerDataElement.textContent).toContain('0'); // TrainerId
    expect(trainerDataElement.textContent).toContain(''); // AccessToken
  });
});

const TestComponent = () => {
  const { trainerData } = useContext(TrainerContext);

  return (
    <div data-testid="trainerData">
      {trainerData.trainerId} - {trainerData.accessToken}
    </div>
  );
};