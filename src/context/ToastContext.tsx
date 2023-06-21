import Toast from '@/components/common/Toast';
import { useToast } from '@/hooks/useToast';
import { PropsWithChildren, createContext } from 'react';

interface ToastContext {
  showToast: (message: string) => void;
}

export const ToastContext = createContext<ToastContext>({
  showToast: (message: string) => {},
});

export const ToastContextProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const { message, isOpen, showToast } = useToast();

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {isOpen && <Toast message={message} />}
    </ToastContext.Provider>
  );
};
