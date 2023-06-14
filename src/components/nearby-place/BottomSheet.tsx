import BottomSheetHeader from './BottomSheetHeader';
import useBottomSheet from '@/hooks/useBottomSheet';
import { motion } from 'framer-motion';
import PlaceList from '../list/PlaceList';

interface BottomSheetProps {
  stationName: string;
}
function BottomSheet(props: BottomSheetProps) {
  const { stationName } = props;
  const { sheet, content } = useBottomSheet({ stationName } || '');

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
          <PlaceList station={stationName.replace('역', '')} />
        </div>
      </div>
    </motion.div>
  );
}

export default BottomSheet;
