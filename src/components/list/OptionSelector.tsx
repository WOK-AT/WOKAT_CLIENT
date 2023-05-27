import { useContext } from 'react';
import Calendar from '../option/Calendar';
import HeadCount from '../option/HeadCount';
import { OptionContext } from '@/context/OptionContext';

function OptionSelector() {
  const { close } = useContext(OptionContext);

  return (
    <>
      <Calendar />
      <HeadCount />

      <button
        onClick={close}
        className="mb-10 mt-10 w-full rounded-full bg-BLUE_500 py-[18px] text-center font-system4_bold text-system4_bold text-white"
      >
        확인
      </button>
    </>
  );
}

export default OptionSelector;
