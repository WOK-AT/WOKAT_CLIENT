import Image from 'next/image';
import info from '@/assets/icons/info.svg';

function Message() {
  return (
    <div className="mb-[9px] mt-2 flex">
      <div className="relative mr-[6px] h-4 w-4">
        <Image src={info} alt="message info icon" fill />
      </div>
      <p className="text-system6_medium font-system6_medium text-BLUE_500">
        무료 회의룸 이용 전 예약 사이트로의 이동이 필요합니다.
      </p>
    </div>
  );
}

export default Message;
