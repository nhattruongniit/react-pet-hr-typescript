import React, { useState, useEffect, useCallback, FC } from 'react';

// libs
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import platform from 'platform';

// service
import { forageErrorLog } from 'services/forageInstance';
import { sendLogError, setLogOffline, ISendLogParams } from 'services/sendLog';

// rex material
import { DialogAlert } from 'components/molecules';

// selectors

type IProps = {
  children: React.ReactNode;
};

const isOnline = () => {
  return window.navigator.onLine;
};

const DefaultPage: FC<IProps> = ({ children }) => {
  const [boundaryKey, setBoundaryKey] = useState(0);

  const memorizedSyncLog = useCallback(async (message?: any, componentStack?: any) => {
    const params: ISendLogParams = {
      level: 'ERROR',
      datetime: new Date().toUTCString(),
      os: platform.os,
      description: platform.description,
      userId: 1,
      error: JSON.stringify(message),
      componentStack: JSON.stringify(componentStack),
      location: window.location.href,
      version: '1.0.0',
    };

    if (isOnline()) {
      await sendLogError(params);
    } else {
      setLogOffline(params);
    }
  }, []);

  useEffect(() => {
    async function sendLogWhenOnlineAgain() {
      const getLogOffline: string | null = await forageErrorLog.getItem('errorLog');
      if (isOnline() && getLogOffline) {
        memorizedSyncLog();
      }
    }

    sendLogWhenOnlineAgain();

    window.onerror = async (message, _, __, ___, errorObj) => {
      memorizedSyncLog(message, errorObj?.stack);
    };

    return () => {
      window.onerror = null;
    };
  }, [memorizedSyncLog]);

  function ErrorFallbackUI({ resetErrorBoundary }: FallbackProps) {
    return (
      <DialogAlert open dialogTitle="Something went wrong:" handleClose={resetErrorBoundary} textButton="Close">
        エラーが発生しました。
        <br />
        マイメニューへ戻ります
      </DialogAlert>
    );
  }

  return (
    <ErrorBoundary resetKeys={[boundaryKey]} FallbackComponent={ErrorFallbackUI} onReset={() => setBoundaryKey((prev) => prev + 1)}>
      {children}
    </ErrorBoundary>
  );
};

export default DefaultPage;
