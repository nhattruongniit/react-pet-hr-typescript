// localstorage.js

import { getExpiredTime } from 'utils/common';

export const TIME_OUT_LOGIN_IN_MILLISECOND = 4 * 3600000;
const keyLocal = 'tony';

export function getExpiredTime(expiredIn: number) {
  return new Date().getTime() + expiredIn;
}

export function isExpired(expiredTime: number) {
  if (new Date().getTime() > expiredTime) {
    return true;
  }
  return false;
}


const setExpiredTimeToLocalStorage = () => {
  const expiredTime = getExpiredTime(TIME_OUT_LOGIN_IN_MILLISECOND);
  localStorage.setItem(keyLocal, expiredTime.toString());
};

const getExpiredTimeFromLocalStorage = () => {
  const expiredTime = localStorage.getItem(keyLocal) || '0';
  return Number(expiredTime);
};

export { getExpiredTimeFromLocalStorage, setExpiredTimeToLocalStorage };


// appClientRequest
import { ServiceTypes } from '../config/index';
import { API } from 'aws-amplify';
import { getExpiredTimeFromLocalStorage, setExpiredTimeToLocalStorage } from '../utils/LocalStorage';
import { isExpired } from 'utils/common';

export type Method = 'get' | 'GET' | 'delete' | 'DELETE' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH';

const EXPIRED_MESSAGE = 'Expired';

const beforeStartRequest = () => {
  const expiredTime = getExpiredTimeFromLocalStorage();
  if (isExpired(expiredTime)) {
    throw new Error(EXPIRED_MESSAGE);
  } else {
    setExpiredTimeToLocalStorage();
  }
};
  
const sendRequest = async (
  apiName: ServiceTypes,
  path: string,
  method: Method,
  init: object,
  startRequest?: () => void,
  endRequest?: () => void,
) => {
  beforeStartRequest();
  startRequest && startRequest();
  switch (method) {
    case 'GET':
    case 'get': {
      const response = await API.get(apiName, path, init);
      endRequest && endRequest();
      return response;
    }
    case 'post':
    case 'POST': {
      const response = await API.post(apiName, path, init);
      endRequest && endRequest();
      return response;
    }
    case 'put':
    case 'PUT': {
      const response = await API.put(apiName, path, init);
      endRequest && endRequest();
      return response;
    }
    case 'delete':
    case 'DELETE': {
      const response = await API.del(apiName, path, init);
      endRequest && endRequest();
      return response;
    }
    case 'patch':
    case 'PATCH': {
      const response = await API.patch(apiName, path, init);
      endRequest && endRequest();
      return response;
    }
  }
};

export { EXPIRED_MESSAGE };
export default sendRequest;

// useGet
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { ServiceTypes } from 'config/index';
import QueryParams from 'constants/query.type';
import sendRequest from '../networking';
import { useAuthActions } from '../stores/Auth/Auth';
import { EXPIRED_MESSAGE } from 'networking/AppClient';

const CancelToken = axios.CancelToken;

const useGet = <T, P = {}>(service: ServiceTypes, url: string, params?: QueryParams | P, immediatelyFetch = true) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [, { logout }] = useAuthActions();

  const paramsString = !isEmpty(params) ? JSON.stringify(params) : '';
  const paramsMemo = useMemo(() => (!isEmpty(paramsString) ? JSON.parse(paramsString) : {}), [paramsString]);

  const fetchData = useCallback(
    async (abort = false) => {
      try {
        setLoading(true);
        const source = CancelToken.source();
        const response = await sendRequest(service, url, 'GET', {
          queryStringParameters: {
            ...paramsMemo,
          },
          cancelToken: source.token,
        });

        if (!abort) {
          setData(response);
        }
      } catch (error) {
        if (!abort) {
          if (error.message === EXPIRED_MESSAGE) {
            logout();
          }
          setError(error);
        }
      } finally {
        if (!abort) {
          setLoading(false);
        }
      }
    },
    [paramsMemo, service, url, logout],
  );

  useEffect(() => {
    const abortController = new AbortController();
    let abort = false;
    if (immediatelyFetch) {
      fetchData(abort);
    }
    return () => {
      abort = true;
      abortController.abort();
    };
  }, [fetchData, immediatelyFetch]);

  return { loading, data, error, fetchData };
};

export default useGet;
