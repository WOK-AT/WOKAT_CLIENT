import Image from 'next/image';
import bookingTag from '@/assets/icons/bookingTag.svg';
import { PlaceDetail } from '@/services/detail/types';

function BookingButton({ bookingURL }: Pick<PlaceDetail, 'bookingURL'>) {
  return (
    <article className="z-1 fixed bottom-0 -ml-4 flex w-full flex-col items-center bg-gradient-to-t from-[rgba(255,255,255,255)] to-[rgba(255,255,255,0)] px-4 pb-[24px]">
      <Image src={bookingTag} alt="bookingTag" width={291} height={35} />
      <button
        type="button"
        onClick={() => window.open(bookingURL)}
        className="mt-[4px] flex h-[52px] w-full flex-row items-center justify-center rounded-[100px] bg-BLUE_500 px-4 text-system4_bold font-system4_bold text-WHTIE"
      >
        예약하러 가기
      </button>
    </article>
  );
}

export default BookingButton;
