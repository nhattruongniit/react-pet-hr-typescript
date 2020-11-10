// install: jest-environment-jsdom-sixteen

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

import LoginForm from '../LoginForm';

jest.mock('react-i18next', () => ({
  useTranslation:() => {
    return {
      t: jest.fn((value: string) => value),
    };
  },
   initReactI18next: {
    type: 'thirdParty',
    init: jest.fn(),
  },
}));

const testEmail = "truong@gmail.com";
const testPassword = "123";

describe('<LoginForm />', () => {
  it('should render to match snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should show error when click login without fill anything', async () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText('LOGIN'));
    await waitFor(() => {
      screen.getAllByText('FIELD_REQUIRED');
    });

    expect(screen.getAllByText('FIELD_REQUIRED')).toHaveLength(2);
  });

  it('should show error when click login with invalid email', async () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByPlaceholderText('PLACEHOLDER_EMAIL'), { target: { value: '123' }});
    fireEvent.click(screen.getByText('LOGIN'));
    await waitFor(() => {
      screen.getByText('FIELD_ERROR_FORMAT');
    });

    expect(screen.getByText('FIELD_ERROR_FORMAT')).not.toBeNull();
  });

  it('should login with valid email and password', async () => {
    render(
      <MemoryRouter>
        <LoginForm  />
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByPlaceholderText('PLACEHOLDER_EMAIL'), { target: { value: testEmail } });
    fireEvent.change(screen.getByPlaceholderText('PLACEHOLDER_PASSWORD'), { target: { value: testPassword } });
    await act(async () => {
      fireEvent.click(screen.getByText('LOGIN'));
    });

    expect(screen.getByText('LOGIN')).not.toBeNull();
  });


});
