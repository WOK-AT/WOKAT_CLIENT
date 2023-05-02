import Layout from '@/components/common/Layout';
import search from '@/assets/icons/search.svg';
import location from '@/assets/icons/location.svg';
import background from '@/assets/images/main_background.svg';
import Image from 'next/image';

function Home() {
  return (
    <Layout>
      <Image
        src={background}
        alt="wokat_background"
        className="fixed bottom-0 w-screen translate-x-[-15px]"
      />
      <div
        className="from-30 to-101.71 border-1 relative mt-6 flex  h-[334px] w-full flex-col
       items-center justify-center rounded-3xl border-solid border-[#5C9DFF]  bg-gradient-to-b from-[#F3F9FF4E]/10 
       to-[#B5D7FF00]/20 px-5 shadow-[inset_0px_0px_10px_1px_rgba(0,0,0,0.3)] shadow-[#003E9A1A] backdrop-blur-lg"
      >
        {/* 움푹 파인 블록 */}
        <div
          className="absolute left-[-6px] top-[120px]
          h-[35px] w-[20px] translate-x-[5.3px] rotate-180 
          rounded-[24px_2px_2px_24px]  bg-white shadow-[inset_2px_0px_2px_rgba(0,0,0,0.3)] shadow-[#003E9A1A]"
        ></div>

        <div
          className="absolute right-[-6px] top-[120px]
          h-[35px] w-[20px] translate-x-[-6.3px] rounded-[24px_2px_2px_24px] 
          bg-white shadow-[inset_2px_0px_2px_rgba(0,0,0,0.3)] shadow-[#003E9A1A]"
        ></div>

        <div className="mb-[49px] flex flex-col items-center">
          <p className=" font-system1_bold text-system1_bold text-GRAY_800">
            일과 함께
          </p>
          <p className=" font-system1_bold text-system1_bold text-GRAY_800">
            <strong className="text-BLUE_600">워캣</strong> 으로 떠나요!
          </p>

          <p className="mt-3.5 font-system4_medium text-GRAY_400">
            주변의 업무 공간을 찾아드려요
          </p>
        </div>

        <div className="flex w-full flex-col">
          <button
            className="mb-3.5 flex h-[52px] w-full  rounded-[38px] border border-solid
           border-BLUE_400 bg-white py-3.5 pl-6 font-system4 text-system4 text-GRAY_200"
          >
            <div className="relative mr-[13px] h-6 w-6">
              <Image src={search} alt="search" fill />
            </div>
            지하철역을 검색하세요.
          </button>
          <button
            className="flex h-[52px] w-full items-center justify-center
           rounded-[38px] bg-BLUE_600 font-system4_bold text-system4_bold text-GRAY_50"
          >
            <div className="relative mr-2 h-6 w-6">
              <Image src={location} alt="location" fill />
            </div>
            내 주변 장소 찾기
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
