import { getStorageItem, setStorageItem } from '@/utils/localStorage';
import { useEffect, useState } from 'react';

type Operator = 'decrease' | 'increase' | 'reset';

export const useReservationForm = () => {
  const [date, setDate] = useState<string>('');
  const [person, setPerson] = useState(0);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return [year, month, day].join('-');
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
    const newDate = formatDate(today);
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

  return { date, person, formatDate, modifyPersonCount };
};
