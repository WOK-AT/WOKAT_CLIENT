import { NavigationContext } from '@/context/NavigationContext';
import { NavType } from '@/hooks/useNavigation';
import { useContext } from 'react';
import Message from '../list/Message';

const NAV_TYPE: NavType[] = ['무료 공간', '무료 회의룸', '카페'];

function Navigation() {
  const { navType, switchNavType } = useContext(NavigationContext);

  return (
    <div className="flex flex-col ">
      <section
        style={
          navType === '무료 회의룸'
            ? { marginBottom: '4px' }
            : { marginBottom: '9px' }
        }
        className="mt-3 flex items-center justify-between rounded-[42px] bg-GRAY_50 px-[0.4rem] py-[0.4rem]"
      >
        {NAV_TYPE.map((data, index) => (
          <div
            key={index}
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
      </section>

      {navType === '무료 회의룸' && <Message />}
    </div>
  );
}

export default Navigation;
