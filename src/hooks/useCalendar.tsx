import { useEffect, useState } from 'react';
import { useReservationForm } from './useReservationForm';

interface DateType {
  year: number;
  month: number;
  day: number;
}

const initialDate = {
  year: 2023,
  month: 5,
  day: 19,
};

export const useCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<DateType>(initialDate);
  const [currentDate, setCurrentDate] = useState<DateType>(initialDate);
  const { getCurrentDate } = useReservationForm();

  useEffect(() => {
    const [year, month, day] = getCurrentDate(new Date());
    setCurrentDate({ year, month, day });
  }, []);

  const onChangeMonth = (direction: string) => {
    switch (direction) {
      case 'prev':
        setCurrentDate((cur) => {
          const { year, month } = cur;
          if (month - 1 < 1) {
            return { ...cur, year: year - 1, month: 12 };
          } else {
            return { ...cur, month: month - 1 };
          }
        });
        break;
      case 'next':
        setCurrentDate((cur) => {
          const { year, month } = cur;
          if (month + 1 > 12) {
            return { ...cur, year: year + 1, month: 1 };
          } else {
            return { ...cur, month: month + 1 };
          }
        });
        break;
    }
  };

  const getMonthTotalDays = (year: number, month: number) => {
    const date = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = (date.getDay() + 6) % 7 || 0;
    return { lastDay, firstDayOfWeek };
  };

  const renderCalendarDates = () => {
    const { year, month } = currentDate;
    const { lastDay: daysInMonth, firstDayOfWeek } = getMonthTotalDays(
      year,
      month,
    );
    let currentDay = 1;
    const prevMonth =
      month - 1 < 1
        ? getMonthTotalDays(year - 1, 12)
        : getMonthTotalDays(year, month - 1);

    let prevDays = prevMonth.lastDay - (firstDayOfWeek - 1);
    let nextDays = 1;
    const calendarRows = [];

    while (currentDay <= daysInMonth) {
      const rowCells = [];

      for (let j = 0; j < 7; j++) {
        if (currentDay === 1 && j < firstDayOfWeek) {
          rowCells.push(
            <td key={j} className="text-GRAY_300">
              {prevDays++}
            </td>,
          );
        } else if (currentDay > daysInMonth) {
          rowCells.push(
            <td key={j} className="text-GRAY_300">
              {nextDays++}
            </td>,
          );
        } else {
          rowCells.push(
            <td key={j} className="text-GRAY_800">
              {currentDay++}
            </td>,
          );
        }
      }
      calendarRows.push(<tr key={currentDay}>{rowCells}</tr>);
    }
    return calendarRows;
  };

  return { selectedDate, currentDate, renderCalendarDates, onChangeMonth };
};
