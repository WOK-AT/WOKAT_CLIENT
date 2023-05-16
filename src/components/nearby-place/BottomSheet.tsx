import React from 'react';
import BottomSheetHeader from './BottomSheetHeader';
import useBottomSheet from '@/hooks/useBottomSheet';
import { motion } from 'framer-motion';
import Home from '@/pages';

const BOTTOM_SHEET_HEIGHT =
  typeof window !== 'undefined' && window.innerHeight - 60;

function BottomSheet() {
  const { sheet, content } = useBottomSheet();
  return (
    <motion.div
      className={`h-${BOTTOM_SHEET_HEIGHT} z-1 delay-30 fixed top-[620px] -ml-4 h-full w-full flex-col rounded-t-2xl bg-white shadow-[0px_22px_40px_4px_#5b5b5b8e] transition ease-in-out`}
      ref={sheet}
    >
      <BottomSheetHeader />
      <div ref={content} className="overflow-auto md:overflow-scroll">
        {/* {...any contents} */}
        <Home />
      </div>
    </motion.div>
  );
}

export default BottomSheet;
