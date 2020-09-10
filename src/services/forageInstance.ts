import localforage from 'localforage';

const forageErrorLog = localforage.createInstance({
  name: 'error_log',
});

forageErrorLog.config({
  driver: localforage.INDEXEDDB, // Force WebSQL; same as using setDriver()
  name: 'error-log',
  storeName: 'log', // Should be alphanumeric, with underscores.
});

export { forageErrorLog };
