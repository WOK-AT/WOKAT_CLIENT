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
}

export const OptionContext = createContext<OptionContextType>({
  selectedDate: initialDate,
  currentDate: initialDate,
  headCount: 0,
  modifyHeadCount: (args: any) => {},
});

export const OptionContextProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const { selectedDate, currentDate, headCount, modifyHeadCount } = useOption();

  return (
    <OptionContext.Provider
      value={{ selectedDate, currentDate, headCount, modifyHeadCount }}
    >
      {children}
    </OptionContext.Provider>
  );
};
