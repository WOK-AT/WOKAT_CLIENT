import { getStorageItem, setStorageItem } from '@/utils/localStorage';
import { useEffect, useState } from 'react';

type Operator = 'decrease' | 'increase' | 'reset';

export const useReservationForm = () => {
  const [date, setDate] = useState<string>('');
  const [person, setPerson] = useState(0);

  const getCurrentDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return [year, month, day];
  };

  const formatDate = (date: Date) => {
    const [year, month, day] = getCurrentDate(date);
    const formatted_year = String(year);
    const formatted_month = String(month).padStart(2, '0');
    const formatted_day = String(day).padStart(2, '0');
    return [formatted_year, formatted_month, formatted_day];
  };

  const modifyPersonCount = (operator: Operator) => {
    switch (operator) {
      case 'increase':
        setPerson((prev) => prev + 1);
        break;
      case 'decrease':
        setPerson((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case 'reset':
        setPerson(0);
        setStorageItem('person', 0);
        break;
    }
  };

  const savePersonCount = () => {
    setStorageItem('person', person);
  };

  const getToday = () => {
    const today = new Date();
    const newDate = formatDate(today).join('-');
    setDate(newDate);
  };

  const setInitialPersonCount = () => {
    const item = getStorageItem('person', 0) as number;
    setPerson(item);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onpopstate = savePersonCount;
    }
    setInitialPersonCount();
    getToday();
  }, []);

  useEffect(() => {
    window.onpopstate = savePersonCount;
  }, [person]);

  return { date, person, getCurrentDate, formatDate, modifyPersonCount };
};
