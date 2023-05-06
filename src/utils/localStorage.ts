export const getStorageItem = <T, Default = T>(
  key: string,
  defaultValue: Default,
): T | Default => {
  const storage = localStorage.getItem(key);
  return storage ? JSON.parse(storage) : defaultValue;
};

export const setStorageItem = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};
