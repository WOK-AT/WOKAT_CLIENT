import { lazy } from 'react';
import { motion } from 'framer-motion';
import BottomSheetHeader from './BottomSheetHeader';
import useBottomSheet from '@/hooks/useBottomSheet';

interface BottomSheetProps {
  stationName: string;
}

const PlaceList = lazy(() => import('@/components/list/PlaceList'));

function BottomSheet(props: BottomSheetProps) {
  const { stationName } = props;

  const station =
    stationName.charAt(stationName.length - 1) === '역'
      ? stationName.substring(0, stationName.length - 1)
      : stationName;
  const { sheet, content } = useBottomSheet({ station } || '');

  return (
    <motion.div
      className="z-1  fixed top-[80%] -ml-4 h-full w-full flex-col rounded-t-2xl bg-white shadow-[0px_22px_40px_4px_#5b5b5b8e] transition ease-in-out"
      ref={sheet}
    >
      <BottomSheetHeader />
      <div
        ref={content}
        className="scrolling-touch touch-auto overflow-auto md:overflow-scroll"
      >
        <div className="mx-4">
          <PlaceList station={station} />
        </div>
      </div>
    </motion.div>
  );
}

export default BottomSheet;
