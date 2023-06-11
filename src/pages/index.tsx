import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/common/Layout';
import search from '@/assets/icons/search.svg';
import location from '@/assets/icons/location.svg';
import background from '@/assets/images/background.svg';
import block from '@/assets/images/block.svg';

function Home() {
  return (
    <Layout>
      <div className="flex flex-col">
        <article className="relative mt-6 flex h-[354px] w-full flex-col items-center">
          <Image src={block} alt="block" className="absolute top-6" />
          <div className="absolute top-[72px]">
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
        </article>

        <article
          className="bg-gradient-to-b from-transparent via-blue-200 to-blue-300"
          style={{ marginLeft: '-16px', marginRight: '-16px' }}
        >
          <Image
            src={background}
            alt="wokat_background"
            className="w-screen h-full opacity-70"
          />
        </article>
      </div>
    </Layout>
  );
}

export default Home;
