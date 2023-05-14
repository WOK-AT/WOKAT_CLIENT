function BookingButton() {
  return (
    <>
      <p className="mt-[20px] flex h-[34px] w-full flex-row items-center justify-center rounded-[100px] bg-GRAY_100 font-system6_medium text-system6_medium text-GRAY_600">
        '서울시 예약사이트'에서 회원가입 후 무료로 이용할 수 있습니다.
      </p>
      <button
        type="button"
        onClick={() => window.open('https://yeyak.seoul.go.kr/web/main.do')}
        className="mb-6 mt-[10px] flex h-[52px] w-full flex-row items-center justify-center rounded-[100px] bg-BLUE_500 font-system4_bold text-system4_bold text-WHTIE"
      >
        예약하러 가기
      </button>
    </>
  );
}

export default BookingButton;
