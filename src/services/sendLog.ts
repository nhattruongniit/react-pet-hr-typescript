// service
import { httpRequest } from 'services/httpRequest';
import { forageErrorLog } from 'services/forageInstance';

// store

export type ISendLogParams = {
  level: string;
  datetime: string;
  error: string;
  componentStack: string;
  location: string;
  version: string;
  description?: {};
  os?: {};
  userId?: {};
};

// send log error
export const sendLogError = async (params: ISendLogParams) => {
  let body = {
    mode: 'MODE_SEND_LOG',
    param: {
      type: 'ERROR',
      uuid: 1,
      data: [params || {}],
    },
  };

  const getLogOffline: string | null = await forageErrorLog.getItem('errorLog');
  if (getLogOffline) {
    // add log offline
    const logs: any[] = JSON.parse(getLogOffline);
    body = {
      ...body,
      param: {
        ...body.param,
        data: [...body.param.data, ...logs],
      },
    };
  }

  const { isSuccess } = await httpRequest.post(body, { showSpinner: false });
  if (isSuccess) {
    // sendLog successfully;
    forageErrorLog.removeItem('errorLog');
  }
};

// save log when offline
const logsOffline: any[] = [];
export const setLogOffline = (params: ISendLogParams) => {
  logsOffline.push(params);
  forageErrorLog.setItem('errorLog', JSON.stringify(logsOffline));
};
