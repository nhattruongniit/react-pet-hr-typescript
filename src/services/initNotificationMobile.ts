const checkPlatform = () => {
  if (window['monaca']) {
    if (window['monaca'].isIOS) {
      return 'iOS';
    }
    if (window['monaca'].isAndroid) {
      return 'Android';
    }
  }
  return 'Web';
};

const platformDevice = checkPlatform();

export const getPushTokenDevice = async (isLogin: boolean) => {
  return new Promise((resolve, reject) => {
    const FirebasePlugin = (window as any).FirebasePlugin;
    const getFcmToken = localStorage.getItem('__fcmToken__');

    const getToken = async () => {
      const getLatestFcmToken = () => {
        return new Promise((resolveNewFcmToken) => {
          FirebasePlugin.onTokenRefresh(resolveNewFcmToken);
        });
      };

      const unregisterFcmToken = () => {
        return new Promise((resolveUnregister, rejectUnregister) => {
          FirebasePlugin.unregister(resolveUnregister, rejectUnregister);
        });
      };

      if (isLogin) {
        // after login success, try to get new fcmToken by unregister (3 times)
        // then return the new fcmToken
        const tryTime = 3;
        let countUp = 1;
        let token: any = '';

        while ((!token || token === getFcmToken) && countUp <= tryTime) {
          await unregisterFcmToken();
          token = await getLatestFcmToken();
          countUp++;
        }
        if (token) {
          resolve(token);
        } else {
          reject({
            error: 'Cannot get new fcmToken',
          });
        }
      } else {
        // return the latest fcmToken
        try {
          const token = await getLatestFcmToken();
          resolve(token);
        } catch (error) {
          reject(error);
        }
      }
    };

    switch (platformDevice) {
      case 'Android':
        getToken();
        break;
      case 'iOS':
        FirebasePlugin.hasPermission((hasPermission: any) => {
          if (hasPermission) {
            getToken();
          } else {
            FirebasePlugin.grantPermission((grantPermission: any) => {
              if (grantPermission) {
                getToken();
              } else {
                reject({
                  error: 'User does not allow permission',
                });
              }
            });
          }
        }, reject);
        break;
    }
  });
};

const saveFcmToken = async (fcmToken: string) => {
  console.log(fcmToken);
};

const initNotificationMobile = async (isLogin: boolean) => {
  const FirebasePlugin = (window as any).FirebasePlugin;

  if (FirebasePlugin) {
    getPushTokenDevice(isLogin)
      .then((fcmToken: any) => {
        saveFcmToken(fcmToken);
      })
      .catch((error) => {
        console.log(`getPushTokenDevice error: ${error}`);
      });
  }
};

export default initNotificationMobile;
