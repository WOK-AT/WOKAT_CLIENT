import { useEffect } from 'react';

export const disableScroll = () => {
  useEffect(() => {
    const setDisableOverflow = () => {
      document.body.style.overflow = 'hidden';
    };
    const resetDisableOverflow = () => {
      document.body.style.overflow = 'unset';
    };

    setDisableOverflow();

    return () => {
      resetDisableOverflow();
    };
  }, []);
};
