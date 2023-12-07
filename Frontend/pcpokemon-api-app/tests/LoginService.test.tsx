import fetchMock from 'jest-fetch-mock';
import { LoginService } from '../src/services/LoginService';
import {describe, test, afterEach, expect} from '@jest/globals'

// Mock the global fetch function
fetchMock.enableMocks();

describe('LoginService', () => {
  afterEach(() => {
    fetchMock.resetMocks();
  });

  test('should return the correct response on successful login', async () => {
    const mockData = {
      accessToken: 'your-access-token',
      trainerId: 'your-trainer-id',
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const result = await LoginService('validUsername', 'validPassword');

    expect(fetchMock).toHaveBeenCalledWith('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: 'validUsername',
        password: 'validPassword',
      }),
    });

    expect(result).toEqual({
      accessToken: 'your-access-token',
      trainerId: 'your-trainer-id',
      codeStatus: 200,
    });
  });

  test('should return the correct response on unsuccessful login', async () => {
    const errorResponse = {
      message: 'Wrong username or password',
    };

    fetchMock.mockResponseOnce(JSON.stringify(errorResponse), { status: 400 });

    const result = await LoginService('invalidUsername', 'invalidPassword');

    expect(fetchMock).toHaveBeenCalledWith('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: 'invalidUsername',
        password: 'invalidPassword',
      }),
    });

    expect(result).toEqual({
      codeStatus: 400,
      message: 'Wrong username or password',
    });
  });

  test('should return the correct response on network error', async () => {
    fetchMock.mockRejectOnce(new Error('Network error'));

    const result = await LoginService('validUsername', 'validPassword');

    expect(fetchMock).toHaveBeenCalledWith('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: 'validUsername',
        password: 'validPassword',
      }),
    });

    expect(result).toEqual({
      codeStatus: 404,
    });
  });
});