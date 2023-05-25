import React from 'react';
import BottomSheetHeader from './BottomSheetHeader';
import useBottomSheet from '@/hooks/useBottomSheet';
import { motion } from 'framer-motion';
import PlaceList from '../list/PlaceList';
import ListFilter from '../common/ListFilter';
function BottomSheet() {
  const { sheet, content } = useBottomSheet();
  return (
    <motion.div
      className="z-1  fixed top-[80%] -ml-4 h-full w-full flex-col rounded-t-2xl bg-white shadow-[0px_22px_40px_4px_#5b5b5b8e] transition ease-in-out"
      ref={sheet}
    >
      <BottomSheetHeader />
      <div
        ref={content}
        className="overflow-auto scrolling-touch touch-auto md:overflow-scroll"
      >
        <div className="mx-4">
          <ListFilter />
          <PlaceList />
        </div>
      </div>
    </motion.div>
  );
}

export default BottomSheet;
