import person_icon from '@/assets/icons/person_line.svg';
import calendar from '@/assets/icons/calendar.svg';
import reset from '@/assets/icons/delete_gray.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { OptionContext } from '@/context/OptionContext';
import { useContext } from 'react';
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

function ReservationOption() {
  const router = useRouter();
  const { pathname, query } = router;
  const { currentDate, headCount, modifyHeadCount } = useContext(OptionContext);

  const formatDate = (date: DateType) => {
    const { year, month, day } = date;
    const formatted_year = String(year);
    const formatted_month = String(month).padStart(2, '0');
    const formatted_day = String(day).padStart(2, '0');
    return [formatted_year, formatted_month, formatted_day];
  };

  const routeToOptionSelectPage = () => {
    const title = query.title as string | undefined;
    if (typeof title === 'undefined') return;

    const newUrl = `${pathname}/option`;
    router.push({
      pathname: newUrl,
      query,
    });
  };

  const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLImageElement;
    if (target.closest('button') === null) return;
    if (target.id === 'reset') return;
    routeToOptionSelectPage();
  };

  return (
    <div className="mb-2.5 flex gap-2" onClick={onClick}>
      <button className="flex items-center w-full py-2 pl-2 border rounded-lg outline-none border-GRAY_200">
        <Image src={calendar} alt="calendar icon" className="mr-2" />
        <p className="font-system5 text-system5 text-GRAY_900">
          {formatDate(currentDate || initialDate).join('-')}
        </p>
      </button>

      <button className="flex items-center w-full p-2 border rounded-lg outline-none border-GRAY_200">
        <Image src={person_icon} alt="person icon" className="mr-2" />
        <div className="flex justify-between w-full">
          <p
            className={`text-system5 text-GRAY_900 ${
              headCount ? 'font-system5_bold' : 'font-system5'
            }`}
          >
            {headCount || '인원'}
          </p>
          {headCount > 0 && (
            <Image
              id="reset"
              src={reset}
              alt="reset person icon"
              onClick={() => modifyHeadCount('reset')}
            />
          )}
        </div>
      </button>
    </div>
  );
}

export default ReservationOption;
