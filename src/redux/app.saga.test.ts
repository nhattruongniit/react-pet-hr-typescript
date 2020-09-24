import { defineFeature, loadFeature } from 'jest-cucumber';
import { expectSaga } from 'redux-saga-test-plan';
import { loginRequest } from './actions';
import { appSaga } from './saga';

const feature = loadFeature('src/features/Login/login.feature');
defineFeature(feature, (test) => {
  const expectedSaga = expectSaga(appSaga);
  let mockUser;
  const mockFetch = jest.fn().mockReturnValue(Promise.resolve({ ok: true, json: () => Promise.resolve({ isSuccess: false }) }));
  jest.spyOn(window, 'fetch').mockImplementation(mockFetch);

  test('Entering a correct user id and password', ({ given, when, then }) => {
    given('I have previously created a user id and password', () => {
      mockUser = { id: 'username', password: 'password' };
    });

    when('I enter my user id and password correctly', () => {
      const params = {
        tenantId: '1',
        uuid: new DeviceUUID().get(),
        userId: mockUser.id,
        password: mockUser.password,
      };

      expectedSaga.dispatch(loginRequest(params)).run();
    });

    then('I should be granted access', () => {
      expect(mockFetch).toBeCalled();
    });
  });
});
