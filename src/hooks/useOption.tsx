import { useEffect, useState } from 'react';
import { COLOR } from '@/styles/color';
import { getSessionStorageItem, setSessionStorageItem } from '@/utils/storage';
import useNavigation from './useNavigation';

export interface DateType {
  year: number;
  month: number;
  day: number;
}

const initialDate = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  day: new Date().getDate(),
};

export type Operator = 'decrease' | 'increase' | 'reset';

const selectedStyle = {
  borderRadius: '50%',
  backgroundColor: COLOR.BLUE_600,
  color: '#fff',
  boxShadow: 'inset 1px 1px 1px rgba(255, 255, 255, 0.25)',
  filter: 'drop-shadow(4px 4px 20px rgba(0, 0, 0, 0.15))',
};

export const useOption = () => {
  const [selectedDate, setSelectedDate] = useState<DateType | null>(null); // 캘린더에서 선택한 날짜
  const [currentDate, setCurrentDate] = useState<DateType | null>(null); // 현재 캘린더 날짜
  const [headCount, setHeadCount] = useState(0); // 인원수
  const { switchNavType } = useNavigation();

  const modifyHeadCount = (operator: Operator) => {
    switch (operator) {
      case 'increase':
        setHeadCount((prev) => prev + 1);
        break;
      case 'decrease':
        setHeadCount((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case 'reset':
        setHeadCount(0);
        setSessionStorageItem('headCount', 0);
        break;
    }
  };

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

  const getPrevDate = (cur: DateType | null): DateType | null => {
    if (!cur) return null;
    const { year, month } = cur;
    if (month - 1 < 1) {
      return { ...cur, year: year - 1, month: 12 };
    } else {
      return { ...cur, month: month - 1 };
    }
  };

  const getNextDate = (cur: DateType | null): DateType | null => {
    if (!cur) return null;
    const { year, month } = cur;
    if (month + 1 > 12) {
      return { ...cur, year: year + 1, month: 1 };
    } else {
      return { ...cur, month: month + 1 };
    }
  };

  const getMonthTotalDays = (year: number, month: number) => {
    const date = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    const firstDayOfMonth = (date.getDay() + 6) % 7 || 0; // 월요일부터 일요일까지 0~6
    return { lastDayOfMonth, firstDayOfMonth };
  };

  const selectDate = (e: React.MouseEvent<HTMLTableRowElement>) => {
    if (e.target instanceof HTMLElement) {
      const target = e.target.closest('td') as HTMLTableCellElement;
      const { id } = target;
      if (!currentDate) return;
      switch (id) {
        case 'prev':
          setSelectedDate({
            ...(getPrevDate(currentDate) || initialDate),
            day: Number(target.innerText),
          });
          break;
        case 'current':
          setSelectedDate({
            ...currentDate,
            day: Number(target.innerText),
          });
          break;
        case 'next':
          setSelectedDate({
            ...(getNextDate(currentDate) || initialDate),
            day: Number(target.innerText),
          });
          break;
      }
    }
  };

  const activateSelectedDate = (date: DateType) => {
    const { year, month, day } = date;

    return (
      selectedDate.year === year &&
      selectedDate.month === month &&
      selectedDate.day === day
    );
  };

  const renderCalendarDates = () => {
    if (!currentDate) return <></>;
    const { year: currentYear, month: currentMonth } = currentDate;
    const { lastDayOfMonth: totalDaysInMonth, firstDayOfMonth } =
      getMonthTotalDays(currentYear, currentMonth);

    const calendarRows = []; // 행
    let tableDataCellDay = 1; // td의 innerText로 들어가는 날짜
    const prev = getPrevDate(currentDate); // 지난달 날짜 정보
    const next = getNextDate(currentDate); // 다음달 날짜 정보

    if (!prev || !next) return <></>;

    let prevDays =
      getMonthTotalDays(prev.year, prev.month).lastDayOfMonth -
      (firstDayOfMonth - 1);
    let nextDays = 1;

    while (tableDataCellDay <= totalDaysInMonth) {
      const rowCells = [];

      for (let j = 0; j < 7; j++) {
        let cellDate: DateType | null;
        let cellId: string;
        let cellStyle: React.CSSProperties;

        if (tableDataCellDay === 1 && j < firstDayOfMonth) {
          cellDate = {
            year: prev.year,
            month: prev.month,
            day: prevDays,
          };
          cellId = 'prev';
          cellStyle = activateSelectedDate(cellDate)
            ? {
                ...selectedStyle,
              }
            : { height: '47px', color: COLOR.GRAY_300 };
          prevDays++;
        } else if (tableDataCellDay > totalDaysInMonth) {
          cellDate = {
            year: next.year,
            month: next.month,
            day: nextDays,
          };
          cellId = 'next';
          cellStyle = activateSelectedDate(cellDate)
            ? selectedStyle
            : { height: '47px', color: COLOR.GRAY_300 };
          nextDays++;
        } else {
          cellDate = {
            year: currentYear,
            month: currentMonth,
            day: tableDataCellDay,
          };
          cellId = 'current';
          cellStyle = activateSelectedDate(cellDate)
            ? selectedStyle
            : { height: '47px', color: COLOR.GRAY_800 };
          tableDataCellDay++;
        }

        rowCells.push(
          <td key={j} id={cellId} style={cellStyle}>
            {cellDate.day}
          </td>,
        );
      }

      calendarRows.push(
        <tr key={tableDataCellDay} onClick={selectDate}>
          {rowCells}
        </tr>,
      );
    }

    return calendarRows;
  };

  const setInitialSelectedDate = () => {
    const item = getSessionStorageItem('date', initialDate) as DateType;
    setSelectedDate(item);
    setCurrentDate(item);
  };

  const setInitialHeadCount = () => {
    const item = getSessionStorageItem('headCount', 0) as number;
    setHeadCount(item);
  };

  useEffect(() => {
    setInitialSelectedDate();
    setInitialHeadCount();
    switchNavType('무료 회의룸');
  }, []);

  useEffect(() => {
    headCount && setSessionStorageItem('headCount', headCount);
  }, [headCount]);

  useEffect(() => {
    selectedDate && setSessionStorageItem('date', selectedDate);
  }, [selectedDate]);

  return {
    selectedDate,
    currentDate,
    headCount,
    renderCalendarDates,
    onChangeMonth,
    modifyDate: selectDate,
    modifyHeadCount,
  };
};
