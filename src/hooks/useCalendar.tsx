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
    const [year, month, day] = getCurrentDate(new Date(2023, 4, 1));
    setSelectedDate({ year, month, day });
    setCurrentDate({ year, month, day });
  }, []);

  const onChangeMonth = (direction: string) => {
    switch (direction) {
      case 'prev':
        setCurrentDate((cur) => getPrevDate(cur));
        break;
      case 'next':
        setCurrentDate((cur) => getNextDate(cur));
        break;
    }
  };

  const getPrevDate = (cur: DateType): DateType => {
    const { year, month } = cur;
    if (month - 1 < 1) {
      return { ...cur, year: year - 1, month: 12 };
    } else {
      return { ...cur, month: month - 1 };
    }
  };

  const getNextDate = (cur: DateType): DateType => {
    const { year, month } = cur;
    if (month + 1 > 12) {
      return { ...cur, year: year + 1, month: 1 };
    } else {
      return { ...cur, month: month + 1 };
    }
  };

  const getMonthTotalDays = (year: number, month: number) => {
    const date = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = (date.getDay() + 6) % 7 || 0;
    return { lastDay, firstDayOfWeek };
  };

  const selectDate = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      const target = e.target.closest('td') as HTMLTableCellElement;
      onChangeMonth(target.id);
      setSelectedDate({ ...selectedDate, day: Number(target.innerText) });
    }
  };

  const activate = (date: DateType) => {
    const { year, month, day } = date;

    return (
      selectedDate.year === year &&
      selectedDate.month === month &&
      selectedDate.day === day
    );
  };

  const renderCalendarDates = () => {
    const {
      year: currentYear,
      month: currentMonth,
      day: currentDay,
    } = currentDate;
    const { lastDay: daysInMonth, firstDayOfWeek } = getMonthTotalDays(
      currentYear,
      currentMonth,
    );
    let tableDataCellDay = 1;

    const prev = getPrevDate(currentDate);
    const next = getNextDate(currentDate);

    let prevDays =
      getMonthTotalDays(prev.year, prev.month).lastDay - (firstDayOfWeek - 1);
    let nextDays = 1;
    const calendarRows = [];

    while (tableDataCellDay <= daysInMonth) {
      const rowCells = [];

      for (let j = 0; j < 7; j++) {
        if (tableDataCellDay === 1 && j < firstDayOfWeek) {
          rowCells.push(
            <td
              key={j}
              className={`text-GRAY_300 ${
                activate({
                  year: prev.year,
                  month: prev.month,
                  day: prevDays,
                }) && 'h-[42px] w-[42px] rounded-full bg-BLUE_600 text-white'
              }`}
            >
              {prevDays++}
            </td>,
          );
        } else if (tableDataCellDay > daysInMonth) {
          rowCells.push(
            <td
              key={j}
              className={`text-GRAY_300 ${
                activate({
                  year: next.year,
                  month: next.month,
                  day: nextDays,
                }) && 'h-[42px] w-[42px] rounded-full bg-BLUE_600 text-white'
              }`}
            >
              {nextDays++}
            </td>,
          );
        } else {
          rowCells.push(
            <td
              key={j}
              className={`text-GRAY_800 ${
                activate({
                  year: currentYear,
                  month: currentMonth,
                  day: tableDataCellDay,
                }) && 'h-[42px] w-[42px] rounded-full bg-BLUE_600 text-white'
              }`}
            >
              {tableDataCellDay++}
            </td>,
          );
        }
      }
      calendarRows.push(
        <tr key={tableDataCellDay} onClick={selectDate}>
          {rowCells}
        </tr>,
      );
    }
    return calendarRows;
  };

  return { selectedDate, currentDate, renderCalendarDates, onChangeMonth };
};
