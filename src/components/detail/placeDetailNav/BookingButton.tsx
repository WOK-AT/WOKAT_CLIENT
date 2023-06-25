interface BookingButtonProps {
  bookingURL: string;
}
function BookingButton({ bookingURL }: BookingButtonProps) {
  return (
    <>
      <p className="mt-[-20px] flex h-[34px] w-full flex-row items-center justify-center rounded-[100px] bg-GRAY_100 text-system6_medium font-system6_medium text-GRAY_600">
        '서울시 예약사이트'에서 회원가입 후 무료로 이용할 수 있습니다.
      </p>
      <button
        type="button"
        onClick={() => window.open(bookingURL)}
        className="mb-[40px] mt-[10px] flex h-[52px] w-full flex-row items-center justify-center rounded-[100px] bg-BLUE_500 text-system4_bold font-system4_bold text-WHTIE"
      >
        예약하러 가기
      </button>
    </>
  );
}

export default BookingButton;
