import { DateType } from '@/hooks/useOption';

export const formatDate = (date: DateType) => {
  const { year, month, day } = date;
  const formatted_year = String(year);
  const formatted_month = String(month).padStart(2, '0');
  const formatted_day = String(day).padStart(2, '0');
  return [formatted_year, formatted_month, formatted_day];
};
