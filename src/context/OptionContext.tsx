import { useBoolean } from '@/hooks/useBoolean';
import { useOption } from '@/hooks/useOption';
import { PropsWithChildren, createContext } from 'react';

interface DateType {
  year: number;
  month: number;
  day: number;
}

const initialDate = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  day: new Date().getDate(),
};

interface OptionContextType {
  selectedDate: DateType | null;
  currentDate: DateType | null;
  headCount: number;
  modifyHeadCount: (args: any) => void;

  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const OptionContext = createContext<OptionContextType>({
  selectedDate: initialDate,
  currentDate: initialDate,
  headCount: 0,
  modifyHeadCount: (args: any) => {},

  isOpen: false,
  open: () => {},
  close: () => {},
});

export const OptionContextProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const { selectedDate, currentDate, headCount, modifyHeadCount } = useOption();
  const { isOpen, open, close } = useBoolean(false);

  return (
    <OptionContext.Provider
      value={{
        selectedDate,
        currentDate,
        headCount,
        modifyHeadCount,
        isOpen,
        open,
        close,
      }}
    >
      {children}
    </OptionContext.Provider>
  );
};
