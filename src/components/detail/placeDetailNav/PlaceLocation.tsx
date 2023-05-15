import React from 'react';
import placeLocation from '@/assets/icons/placeLocation.svg';
import DetailInformationTitle from '@/components/common/detail/DetailInformationTitle';
import change from '@/assets/icons/change.svg';
import paste from '@/assets/icons/paste.svg';
import Image from 'next/image';
interface PlaceLocationProps {
  location: string;
}

function PlaceLocation({ location }: PlaceLocationProps) {
  const copyLocation = async () => {
    await navigator.clipboard.writeText(location).catch((error) => {
      console.error(error);
    });
  };

  return (
    <section id="nav-3" className="scroll-mt-[50px]">
      <DetailInformationTitle icon={placeLocation} title="공간 위치" />
      <div className="border-color-GRAY_100 h-[300px] rounded-[10px] 	border-[1px]">
        <p className="my-[14px] flex w-full justify-center font-system5_medium text-system5_medium text-GRAY_800">
          {location}
        </p>
        <div className="border-color-GRAY_100 mx-[3px] h-[1px] border-[1px]" />
        <section className="flex w-full flex-row justify-between">
          <article className="flex w-full cursor-pointer flex-row items-center justify-center">
            <Image
              src={change}
              alt="change icon"
              className="mr-2.5 cursor-pointer"
            />
            <p className="font-system5_medium text-system5_medium text-GRAY_900">
              지번
            </p>
          </article>
          <div className="border-color-GRAY_100 worigin-bottom-left mx-[3px] h-[44px] w-[1px] border-[1px]" />
          <article
            className="flex w-full cursor-pointer flex-row items-center justify-center"
            onClick={() => {
              copyLocation();
            }}
          >
            <Image
              src={paste}
              alt="paste icon"
              className="mr-2.5 cursor-pointer"
            />
            <p className="font-system5_medium text-system5_medium text-GRAY_900">
              복사
            </p>
          </article>
        </section>
      </div>
    </section>
  );
}

export default PlaceLocation;
