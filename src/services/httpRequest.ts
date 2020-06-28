import axios, { AxiosRequestConfig } from 'axios';

import { store } from 'stores';

// actions
import { setLoading } from 'redux/actions';

type IConfig = AxiosRequestConfig & {
  showSpinner?: boolean;
};

const requestConfig: IConfig = {
  baseURL: process.env.REACT_APP_PROD_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'text/plain',
  },
};

let requestCount = 0;

function decreaseRequestCount() {
  requestCount--;
  if (requestCount === 0) {
    store.dispatch(setLoading(false));
  }
}

class HttpRequest {
  api: any;

  constructor() {
    this.api = axios.create(requestConfig);

    this.api.interceptors.request.use(
      (config: IConfig) => {
        if (config.showSpinner) {
          requestCount++;
          store.dispatch(setLoading(true));
        }
        return config;
      },
      (error: any) => {
        if (error.config.showSpinner) {
          decreaseRequestCount();
        }

        return Promise.reject(error);
      },
    );

    this.api.interceptors.response.use(
      (res: any) => {
        if (res.config.showSpinner) {
          decreaseRequestCount();
        }
        return res;
      },
      (error: any) => {
        if (error.config.showSpinner) {
          decreaseRequestCount();
        }
        return Promise.reject(error);
      },
    );
  }

  async post(data: any, config?: IConfig) {
    return this.api.post('', data, config);
  }
}

export const httpRequest = new HttpRequest();
