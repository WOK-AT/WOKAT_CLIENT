import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import placeLocation from '@/assets/icons/placeLocation.svg';
import DetailInformationTitle from '@/components/common/detail/DetailInformationTitle';
import change from '@/assets/icons/change.svg';
import locationPaste from '@/assets/icons/locationPaste.svg';
import Image from 'next/image';
import Map from './Map';
import { useGetPlaceAddress } from '@/hooks/useDetail';

interface PlaceLocationProps {
  place: string;
  location: string;
}

function PlaceLocation({ place, location }: PlaceLocationProps) {
  const [address, setAddress] = useState<string>(location);
  const [isRoadName, setIsRoadName] = useState<boolean>(false);
  const { value } = useGetPlaceAddress(isRoadName, address);
  const router = useRouter();
  const copyLocation = async () => {
    await navigator.clipboard.writeText(location);
  };

  const changeRoadName = () => {
    setIsRoadName(!isRoadName);
  };

  useEffect(() => {
    setAddress(value?.data);
  }, [value]);

  return (
    <section id="nav-3" className="mb-8 scroll-mt-[50px]">
      <DetailInformationTitle icon={placeLocation} title="공간 위치" />
      <div className="border-color-GRAY_100 h-[306px] rounded-[10px] 	border-[1px]">
        <Link
          className="h-[300px] bg-BLUE_100"
          href={{
            pathname: `/detail/${router.query.id}/location`,
            query: {
              place: place,
              location: location,
            },
          }}
        >
          <Map location={location} />
        </Link>
        <p className="my-3 ml-[14px] flex w-full justify-start font-system5_medium text-system5_medium text-GRAY_800">
          {address}
        </p>
        <div className="border-color-GRAY_100 mx-[3px] h-[1px] border-[1px]" />
        <section className="flex w-full flex-row justify-between">
          <article
            className="flex w-full cursor-pointer flex-row items-center justify-center"
            onClick={() => changeRoadName()}
          >
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
