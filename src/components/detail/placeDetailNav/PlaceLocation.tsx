import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import placeLocation from '@/assets/icons/placeLocation.svg';
import DetailInformationTitle from '@/components/common/detail/DetailInformationTitle';
import change from '@/assets/icons/change.svg';
import locationPaste from '@/assets/icons/locationPaste.svg';
import Image from 'next/image';
import Map from './Map';

interface PlaceLocationProps {
  location: string;
}

function PlaceLocation({ location }: PlaceLocationProps) {
  const router = useRouter();
  const copyLocation = async () => {
    await navigator.clipboard.writeText(location).catch((error) => {
      console.error(error);
    });
  };

  return (
    <section id="nav-3" className="scroll-mt-[50px]">
      <DetailInformationTitle icon={placeLocation} title="공간 위치" />
      <div className="border-color-GRAY_100 h-[306px] rounded-[10px] 	border-[1px]">
        <Link
          className="h-[300px] bg-BLUE_100"
          href={{
            pathname: `/detail/${router.query.id}/location`,
            query: {
              title: '홍대 우유기지',
              location: '인천 연수구 아트센터로 168번길 100',
            },
          }}
        >
          <Map location={location} />
        </Link>
        <p className="my-3 flex w-full justify-center font-system5_medium text-system5_medium text-GRAY_800">
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
          <div className="border-color-GRAY_100 worigin-bottom-left mx-[3px] h-[42px] w-[1px] border-[1px]" />
          <article
            className="flex w-full cursor-pointer flex-row items-center justify-center"
            onClick={() => {
              copyLocation();
            }}
          >
            <Image
              src={locationPaste}
              alt="locationPaste icon"
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
