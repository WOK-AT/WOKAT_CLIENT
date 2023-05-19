import Image from 'next/image';
import arrow_right from '@/assets/icons/arrow_right.svg';
import arrow_left from '@/assets/icons/arrow_left.svg';
import { useCalendar } from '@/hooks/useCalendar';

const dayList = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function Calendar() {
  const { selectedDate, currentDate, renderCalendarDates, onChangeMonth } =
    useCalendar();
  const { year, month, day } = currentDate;
  const calendarRows = renderCalendarDates();

  return (
    <div>
      <section
        className="flex"
        onClick={(e: React.MouseEvent) => {
          if (e.target instanceof HTMLElement) {
            const target = e.target.closest('button') as HTMLButtonElement;
            onChangeMonth(target.id);
          }
        }}
      >
        <button id="prev">
          <Image src={arrow_left} alt="prev" />
        </button>
        <h1>{`${year}년 ${month}월`}</h1>
        <button id="next">
          <Image src={arrow_right} alt="next" />
        </button>
      </section>

      <table>
        <thead>
          <tr>
            {dayList.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>{calendarRows}</tbody>
      </table>
    </div>
  );
}

export default Calendar;
