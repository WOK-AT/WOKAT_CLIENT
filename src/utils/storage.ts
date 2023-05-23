export const getLocalStorageItem = <T, Default = T>(
  key: string,
  defaultValue: Default,
): T | Default => {
  const storage = localStorage.getItem(key);
  return storage ? JSON.parse(storage) : defaultValue;
};

export const setLocalStorageItem = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorageItem = <T, Default = T>(
  key: string,
  defaultValue: Default,
): T | Default => {
  const storage = sessionStorage.getItem(key);
  return storage ? JSON.parse(storage) : defaultValue;
};

export const setSessionStorageItem = (key: string, value: unknown) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};
