import { useEffect, useState } from 'react';
import Layout from '@/components/common/Layout';
import search from '@/assets/icons/search.svg';
import location from '@/assets/icons/location.svg';
import background from '@/assets/images/main_background.svg';
import block from '@/assets/images/block.svg';
import Onboarding from '@/components/onboarding/Onboarding';
import Image from 'next/image';
import Link from 'next/link';
import { getLocalStorageItem } from '@/utils/storage';

function Home() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  // 기본 세팅 값은 false
  // localStorage에 homeVisited 조회
  const [HOME_VISITED, setHOME_VISITED] = useState('');

  useEffect(() => {
    const home_visited: string = getLocalStorageItem('homeVisited', '');
    if (home_visited !== null) {
      setHOME_VISITED(home_visited);
    }
    const today = new Date();
    const handleMainPop = () => {
      if (home_visited === '' || new Date(home_visited) < today) {
        // 저장된 date가 없거나 today보다 작다면 온보딩 노출
        setShowOnboarding(true);
      }
    };
    handleMainPop();
  }, [HOME_VISITED]);

  return (
    <>
      {showOnboarding && <Onboarding setShowOnboarding={setShowOnboarding} />}
      <Layout>
        <Image
          src={background}
          alt="wokat_background"
          className="fixed bottom-0 w-screen translate-x-[-15px]"
        />
        <div className="relative flex flex-col items-center w-full mt-6">
          <Image
            src={block}
            alt="block"
            className="absolute  top-6 h-[334px] "
          />
          <div className="absolute  top-[72px]  h-full">
            <section className="mb-[49px] flex flex-col items-center">
              <p className=" text-system1_bold font-system1_bold text-GRAY_800">
                일과 함께
              </p>
              <p className=" text-system1_bold font-system1_bold text-GRAY_800">
                <strong className="text-BLUE_600">워캣</strong> 으로 떠나요!
              </p>

              <p className="mt-3.5 font-system4_medium text-GRAY_400">
                주변의 업무 공간을 찾아드려요
              </p>
            </section>

            <section className="flex flex-col items-center justify-center">
              <Link
                href="/search"
                className="mb-3.5 flex h-[52px] w-[303px] items-center  rounded-[38px] border border-solid
           border-BLUE_400 bg-white py-3.5 pl-6 text-system4 font-system4 text-GRAY_200 max-[340px]:h-[42px] max-[340px]:w-[250px]"
              >
                <div className="relative mr-[13px] h-6 w-6 ">
                  <Image src={search} alt="search" fill />
                </div>
                지하철역을 검색하세요.
              </Link>

              <Link href="/nearby-place">
                <button
                  className="flex h-[52px] w-[303px] items-center justify-center  rounded-[38px] bg-BLUE_600
           text-system4_bold font-system4_bold text-GRAY_50 max-[340px]:h-[42px] max-[340px]:w-[250px]"
                >
                  <div className="relative w-6 h-6 mr-2">
                    <Image src={location} alt="location" fill />
                  </div>
                  주변 업무 공간 찾기
                </button>
              </Link>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
