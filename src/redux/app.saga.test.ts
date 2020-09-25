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



// way2
// const feature = loadFeature('src/features/Login/login.feature');
// defineFeature(feature, (test) => {
//   const expectedSaga = expectSaga(authSaga);
//   let mockUser: any;
//   let params: any;
//   const mockLoginTokenResponse = {
//     isSuccess: true,
//     loginToken: 'mock_login_token',
//     userId: 'mock_user_id',
//   };
//   const mockApiTokenResponse = {
//     isSuccess: true,
//     apiToken: 'mock_api_token',
//     expireDateTime: Number.MAX_SAFE_INTEGER,
//   };
//   const mockFetch = jest.fn((...args: any[]) => {
//     const { mode } = JSON.parse(args[1].body);
//     return Promise.resolve({
//       ok: true,
//       json: () => Promise.resolve(mode === 'LOGIN' ? mockLoginTokenResponse : mockApiTokenResponse),
//     });
//   });

//   jest.spyOn(window, 'fetch').mockImplementation(mockFetch);

//   test('Entering a correct user id and password', ({ given, when, then }) => {
//     given('I have previously created a user id and password', () => {
//       mockUser = { id: 'mockedUser', password: 'mockedPassword' };
//     });

//     when('I enter my user id and password correctly', () => {
//       params = {
//         tenantId: '1',
//         uuid: getDeviceUUID(),
//         userId: mockUser.id,
//         password: mockUser.password,
//       };
//     });

//     then('I should be granted access', () => {
//       return expectedSaga
//         .put(
//           loginSuccess({
//             isLoginToken: 'mock_login_token',
//             params: { loginToken: mockLoginTokenResponse.loginToken, tenantId: '1', uuid: getDeviceUUID(), userId: mockUser.id },
//             apiToken: { token: mockApiTokenResponse.apiToken, expireDateTime: mockApiTokenResponse.expireDateTime },
//           }),
//         )
//         .dispatch(loginRequest(params))
//         .run();
//     });
//   });
// });
