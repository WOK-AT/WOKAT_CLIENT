import { useCallback, useState } from 'react';

export const useBoolean = (
  initialValue: boolean,
): [boolean, VoidFunction, VoidFunction, VoidFunction] => {
  const [boolean, setBoolean] = useState(initialValue);

  const open = useCallback(() => {
    setBoolean(true);
  }, []);

  const close = useCallback(() => {
    setBoolean(false);
  }, []);

  const toggle = useCallback(() => {
    setBoolean((prev) => !prev);
  }, []);

  return [boolean, open, close, toggle];
};
