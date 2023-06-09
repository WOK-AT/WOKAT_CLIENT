import React from 'react';
import delete_gray from '@/assets/icons/delete_gray.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import onboarding_1 from '@/assets/images/onboarding_1.avif';
import onboarding_2 from '@/assets/images/onboarding_2.avif';
import onboarding_3 from '@/assets/images/onboarding_3.avif';
import onboarding_4 from '@/assets/images/onboarding_4.avif';
import onboarding_5 from '@/assets/images/onboarding_5.avif';

interface OnboardingProps {
  close: () => void;
}

function Onboarding({ close }: OnboardingProps) {
  const settings = {
    dots: true,
    speed: 100,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    appendDots: (dots: any) => (
      <div
        style={{
          width: '100%',
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: 'dots_custom',
    className: 'onboarding_slider',
  };

  return (
    <div className="fixed z-10 w-screen">
      <div className="backdrop-[blur(0.2rem)] fixed flex h-screen w-screen flex-col items-center bg-black/50 pt-[135px]">
        <div className="z-10 h-[400px] w-[305px] rounded-[20px] bg-white">
          <div
            onClick={close}
            className="relative left-[270px] mt-[16px] h-[20px] w-[16px]"
          >
            <Image src={delete_gray} alt="delete_onboarding" />
          </div>

          <Slider {...settings}>
            <div className="mt-[-30px] flex h-[300px] w-[250px] items-center justify-center">
              <div className="h-[54px] w-[210px] text-center text-system3_bold font-system3_bold text-gray-800">
                나에게 맞는{' '}
                <span className="text-system3_bold font-system3_bold text-blue-600">
                  업무공간,
                </span>
                <br />
                어떻게 찾고 계신가요?
              </div>
              <div className="flex h-[180px] w-[250px] items-center justify-center">
                <Image
                  src={onboarding_1}
                  alt="onboarding_image"
                  width={250}
                  height={185}
                />
              </div>
            </div>

            <div className="mt-[-30px] flex h-[300px] w-[305px] items-center justify-center">
              <div className="h-[54px] w-[210px] text-center  text-system3_bold font-system3_bold text-gray-800">
                오늘은{' '}
                <span className="inline text-system3_bold font-system3_bold text-blue-600">
                  어디로
                </span>
                <br />
                일을 떠날지 정해요
              </div>
              <div className="flex h-[180px] w-[250px] items-center justify-center">
                <Image
                  src={onboarding_2}
                  alt="onboarding_image"
                  width={250}
                  height={185}
                />
              </div>
            </div>

            <div className=" mt-[-30px] flex h-[300px] w-[305px] items-center justify-center">
              <div className="h-[54px] w-[210px]  text-center text-system3_bold font-system3_bold text-gray-800">
                <span className="inline text-system3_bold font-system3_bold text-blue-600">
                  무료의{' '}
                </span>
                업무공간과
                <br />
                카페를 추천 받아보세요
              </div>
              <Image
                src={onboarding_3}
                alt="onboarding_image"
                width={250}
                height={185}
              />
            </div>

            <div className=" mt-[-30px] flex h-[300px] w-[305px] items-center justify-center">
              <div className="h-[54px] w-[220px] text-center  text-system3_bold font-system3_bold text-gray-800">
                콘센트여부, 분위기 등<br />
                <span className="inline text-system3_bold font-system3_bold text-blue-600">
                  공간의 정보
                </span>
                를 미리 들여다봐요
              </div>
              <Image
                src={onboarding_4}
                alt="onboarding_image"
                width={250}
                height={185}
              />
            </div>

            <div className="mt-[-30px] flex h-[300px] w-[305px] items-center justify-center">
              <div className="h-[54px] w-[210px] text-center  text-system3_bold font-system3_bold text-gray-800">
                나에게 맞는 업무공간 찾기,
                <br />
                <span className="text-system3_bold font-system3_bold text-blue-600">
                  워캣
                </span>
                에서 시작하세요
              </div>
              <Image
                src={onboarding_5}
                alt="onboarding_image"
                width={250}
                height={185}
              />
            </div>
          </Slider>

          <div
            onClick={close}
            className="m-auto h-[44px] w-[268px] rounded-[30px] bg-BLUE_100 py-[10px] text-center text-system4_bold font-system4_bold text-BLUE_500"
          >
            WOKAT 시작하기
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
