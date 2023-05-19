import { createContext, useContext } from 'react';
import { NavType } from '@/hooks/useNavigation';

const NAV_TYPE: NavType[] = ['무료 공간', '무료 회의룸', '카페'];
interface NavigationContext {
  navType: string;
  switchNavType: (args: NavType) => void;
}

export const NavigationContext = createContext({
  navType: '무료 공간',
  switchNavType: (args: NavType) => {},
});

function Navigation() {
  const { navType, switchNavType } = useContext(NavigationContext);

  return (
    <div className="mx-[1.3rem] my-[1.2rem] flex items-center justify-between rounded-[42px] bg-GRAY_50 px-[0.4rem] py-[0.4rem]">
      {NAV_TYPE.map((data) => (
        <div
          className={`${
            navType === data
              ? 'bg-BLUE_500 font-system4_bold text-white'
              : 'bg-none font-system4_medium text-GRAY_400'
          } flex h-9 w-28 cursor-pointer items-center justify-center rounded-[31px] px-[0.8rem] py-[1.3rem] transition`}
          onClick={() => switchNavType(data)}
        >
          {data}
        </div>
      ))}
    </div>
  );
}

export default Navigation;
