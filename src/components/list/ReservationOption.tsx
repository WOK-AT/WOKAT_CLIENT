import person_icon from '@/assets/icons/person_line.svg';
import calendar from '@/assets/icons/calendar.svg';
import reset from '@/assets/icons/delete_gray.svg';
import Image from 'next/image';
import { OptionContext } from '@/context/OptionContext';
import { useContext } from 'react';
import { useOption } from '@/hooks/useOption';
import { formatDate } from '@/utils/formatDate';
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
  const { selectedDate } = useOption();
  const { headCount, modifyHeadCount, open } = useContext(OptionContext);

  const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLImageElement;
    if (target.closest('button') === null) return;
    if (target.id === 'reset') return;
    open();
  };

  return (
    <div className="mb-2.5 flex gap-2" onClick={onClick}>
      <button className="flex items-center w-full py-2 pl-2 border rounded-lg outline-none border-GRAY_200">
        <Image src={calendar} alt="calendar icon" className="mr-2" />
        <p className="text-system5 font-system5 text-GRAY_900">
          {formatDate(selectedDate || initialDate).join('-')}
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
