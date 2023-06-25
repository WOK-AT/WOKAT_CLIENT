import { useRef, useState } from 'react';
import { useBoolean } from './useBoolean';

export const useToast = () => {
  const [message, setMessage] = useState('');
  const [isOpen, open, close] = useBoolean(false);
  const timer = useRef<NodeJS.Timeout>();

  const showToast = (message: string) => {
    setMessage(message);
    open();

    if (timer.current) {
      clearTimeout(timer.current);
    }

    const newTimer = setTimeout(() => {
      close();
      setMessage('');
    }, 2000);

    timer.current = newTimer;
  };

  return { message, isOpen, showToast };
};
