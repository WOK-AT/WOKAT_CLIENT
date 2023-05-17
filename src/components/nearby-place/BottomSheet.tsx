import React from 'react';
import BottomSheetHeader from './BottomSheetHeader';
import useBottomSheet from '@/hooks/useBottomSheet';
import { motion } from 'framer-motion';
import List from '@/pages/list';

function BottomSheet() {
  const { sheet, content } = useBottomSheet();
  return (
    <motion.div
      className="z-1 delay-30 fixed top-[80%] -ml-4 h-full w-full flex-col rounded-t-2xl bg-white shadow-[0px_22px_40px_4px_#5b5b5b8e] transition ease-in-out"
      ref={sheet}
    >
      <BottomSheetHeader />
      <div ref={content} className="overflow-auto md:overflow-scroll">
        <List />
      </div>
    </motion.div>
  );
}

export default BottomSheet;
