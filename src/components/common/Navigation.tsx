import React, { useContext } from 'react';
import { NavContext } from '@/Contexts/Navagation';

const NAV_TYPE = ['무료 공간', '무료 회의룸', '카페'];

function Navigation() {
  const { navType, switchNav } = useContext(NavContext);

  return (
    <div className="flex items-center justify-between rounded-[42px] bg-GRAY_50 px-[0.4rem] py-[0.4rem] mx-[1.3rem] my-[1.2rem]">
      {NAV_TYPE.map((data) => (
        <div
          className={`${
            navType === data
              ? 'bg-BLUE_500 text-white font-system4_bold'
              : 'bg-none text-GRAY_400 font-system4_medium'
          } flex w-28 h-9 items-center justify-center rounded-[31px] px-[0.8rem] py-[1.3rem] cursor-pointer transition`}
          onClick={() => switchNav(data)}
        >
          {data}
        </div>
      ))}
    </div>
  );
}

export default Navigation;
