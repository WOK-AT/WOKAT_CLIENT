import person_icon from '@/assets/icons/person_line.svg';
import calendar from '@/assets/icons/calendar.svg';
import reset from '@/assets/icons/delete_gray.svg';
import Image from 'next/image';
import { useReservationForm } from '@/hooks/useReservationForm';
import { useRouter } from 'next/router';

function ReservationForm() {
  const router = useRouter();
  const { pathname, query } = router;
  const { date, person, modifyPersonCount } = useReservationForm();

  const resetButtonClicked = (target: HTMLImageElement) => {
    if (target.id === 'reset') {
      modifyPersonCount('reset');
      return true;
    } else {
      return false;
    }
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
    if (resetButtonClicked(target)) return;
    routeToOptionSelectPage();
  };

  return (
    <div className="mb-2.5 flex gap-2" onClick={onClick}>
      <button className="flex items-center w-full py-2 pl-2 border rounded-lg outline-none border-GRAY_200">
        <Image src={calendar} alt="calendar icon" className="mr-2" />
        <p className="font-system5 text-system5 text-GRAY_900">{date}</p>
      </button>

      <button className="flex items-center w-full p-2 border rounded-lg outline-none border-GRAY_200">
        <Image src={person_icon} alt="person icon" className="mr-2" />
        <div className="flex justify-between w-full">
          <p
            className={`text-system5 text-GRAY_900 ${
              person ? 'font-system5_bold' : 'font-system5'
            }`}
          >
            {person || '인원'}
          </p>
          {person > 0 && (
            <Image id="reset" src={reset} alt="reset person icon" />
          )}
        </div>
      </button>
    </div>
  );
}

export default ReservationForm;
