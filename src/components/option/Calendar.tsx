import Image from 'next/image';
import arrow_right from '@/assets/icons/arrow_right.svg';
import arrow_left from '@/assets/icons/arrow_left.svg';
import { useOption } from '@/hooks/useOption';

const DAY_LIST = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function Calendar() {
  const { currentDate, renderCalendarDates, onChangeMonth } = useOption();
  const calendarRows = renderCalendarDates();

  const changeMonth = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      const target = e.target.closest('button') as HTMLButtonElement;
      if (!target) return;
      onChangeMonth(target.id);
    }
  };

  return (
    <div className="mb-5  w-full flex-col items-center justify-center border-b-2 border-b-GRAY_100 pb-[18px]">
      <section
        className="flex w-full items-center justify-center pb-[21px] pt-5"
        onClick={changeMonth}
      >
        <button id="prev">
          <Image src={arrow_left} alt="prev" />
        </button>
        <h1 className="mx-2 flex w-[120px] justify-center font-system2_bold text-system2_bold text-GRAY_900">{`${
          currentDate ? currentDate.year : new Date().getFullYear()
        }년 ${
          currentDate ? currentDate.month : new Date().getMonth() + 1
        }월`}</h1>
        <button id="next">
          <Image src={arrow_right} alt="next" />
        </button>
      </section>

      <table className="h-[338px] w-full text-center ">
        <thead className="h-10">
          <tr className="font-system4_medium text-system4_medium text-GRAY_800">
            {DAY_LIST.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody className="font-system4 text-system4 text-GRAY_800">
          {calendarRows}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
