import person_icon from '@/assets/icons/person_line.svg';
import calendar from '@/assets/icons/calendar.svg';
import reset from '@/assets/icons/delete_gray.svg';
import Image from 'next/image';
import { useReservationForm } from '@/hooks/useReservationForm';
import { useRouter } from 'next/router';

function ReservationForm() {
  const router = useRouter();

  const { date, person } = useReservationForm();

  const routeToCalendarPage = () => {
    const { pathname, query } = router;
    const title = query.title as string | undefined;
    if (typeof title === 'undefined') return;

    const newUrl = `${pathname}/calendar`;
    router.push({
      pathname: newUrl,
      query,
    });
  };

  return (
    <div className="mb-2.5 flex gap-2" onClick={routeToCalendarPage}>
      <button className="flex items-center w-full py-2 pl-2 border rounded-lg outline-none border-GRAY_200">
        <Image src={calendar} alt="calendar icon" className="mr-2" />
        <p className="font-system5 text-system5 text-GRAY_900">{date}</p>
      </button>

      <button className="flex items-center w-full p-2 border rounded-lg outline-none border-GRAY_200">
        <Image src={person_icon} alt="person icon" className="mr-2" />
        <div className="flex justify-between">
          <p
            className={`text-system5 text-GRAY_900 ${
              person ? 'font-system5_bold' : 'font-system5'
            }`}
          >
            {person || '인원'}
          </p>
          {person > 0 && <Image src={reset} alt="reset person icon" />}
        </div>
      </button>
    </div>
  );
}

export default ReservationForm;
