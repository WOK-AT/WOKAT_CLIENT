import React, { useState, useEffect, MutableRefObject } from 'react';
interface DetailNavigatorProps {
  scrollRef: MutableRefObject<HTMLDivElement[]>;
}

function DetailNavigator({ scrollRef }: DetailNavigatorProps) {
  const [navIndex, setNavIndex] = useState<number>(-1);
  const [navigator, setNavigator] = useState([
    { index: 0, name: '공간 소개', clicked: false },
    { index: 1, name: '운영 시간', clicked: false },
    { index: 2, name: '시설 정보', clicked: false },
    { index: 3, name: '공간 위치', clicked: false },
  ]);
  const [scrollY, setScrollY] = useState(0);

  const clickNavigator = (index: number) => {
    let newNavigator = navigator.map((item) => {
      if (item.index === index) {
        return {
          ...item,
          clicked: true,
        };
      } else {
        return {
          ...item,
          clicked: false,
        };
      }
    });

    setNavigator(newNavigator);
  };

  useEffect(() => {
    scrollRef.current[navIndex]?.scrollIntoView({ behavior: 'smooth' });
    clickNavigator(navIndex);
  }, [scrollRef, navIndex]);

  useEffect(() => {
    const handleShadow = () => {
      setScrollY(document.body.scrollTop);

      let newNavigator = navigator.map((item) => {
        if (
          scrollRef.current[item.index].offsetTop - 70 <
            document.body.scrollTop &&
          document.body.scrollTop <
            scrollRef.current[item.index + 1].offsetTop - 70
        ) {
          return {
            ...item,
            clicked: true,
          };
        } else {
          return {
            ...item,
            clicked: false,
          };
        }
      });

      setNavigator(newNavigator);
    };

    window.addEventListener('scroll', handleShadow, true);
    return window.removeEventListener('scroll', handleShadow);
  }, [scrollY]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <nav className="sticky top-0 -ml-4 flex h-[34px] w-screen flex-row items-center justify-between bg-WHTIE px-4">
        {navigator.map(({ index, name, clicked }) => {
          return (
            <article className=" flex flex-col items-center active:text-BLUE_600">
              <button
                key={index}
                onClick={() => {
                  setNavIndex(index);
                }}
                type="button"
                className={`flex flex-col items-center font-system4_bold text-system4_bold ${
                  clicked ? 'text-BLUE_600' : 'text-GRAY_300 '
                }`}
              >
                <p className="flex h-[36px] flex-row items-center active:text-BLUE_600">
                  {name}
                </p>
                <p
                  className={` h-[3px] w-[84px]  rounded-full ${
                    clicked ? 'bg-BLUE_600 ' : null
                  }`}
                ></p>
              </button>
            </article>
          );
        })}
      </nav>
      <div className="-ml-4 mb-6  h-[2px] w-screen bg-GRAY_100"></div>
    </>
  );
}

export default DetailNavigator;
