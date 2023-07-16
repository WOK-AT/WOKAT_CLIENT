import Layout from '@/components/common/Layout';
import PlaceInfo from '@/components/detail/PlaceInfo';
import ImageCarousel from '@/components/detail/ImageCarousel';
import PlaceDetailInfo from '@/components/detail/PlaceDetailInfo';
import { useEffect, useRef } from 'react';
import WokatSEO from '@/components/WokatSEO';
import { NextPageContext } from 'next';
import { getPlaceDetail } from '@/services/detail';
import { PlaceDetail } from '@/services/detail/types';
import { useRouter } from 'next/router';

function Detail(
  props: Pick<PlaceDetail, 'placeName' | 'hashtags' | 'imageURLs'>,
) {
  const { placeName, hashtags, imageURLs } = props;
  const router = useRouter();
  const placeDetailWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!placeDetailWrapperRef.current) return;
    placeDetailWrapperRef.current.style.height = `${window.innerHeight - 56}px`;

    document.body.style.overflow = 'scroll';
  }, []);

  return (
    <Layout>
      <WokatSEO
        title={placeName}
        description={hashtags ? hashtags.join(' ') : ''}
        imageURL={imageURLs.length ? imageURLs[0] : ''}
        url={`${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`}
      />

      <div ref={placeDetailWrapperRef}>
        <ImageCarousel />
        <PlaceInfo />
        <PlaceDetailInfo />
      </div>
    </Layout>
  );
}

export default Detail;

export const getServerSideProps = async ({ query }: NextPageContext) => {
  const placeId = query.id as string;
  const station = query.station as string;
  const { data } = await getPlaceDetail({ placeId, station });
  const { placeName, hashtags, imageURLs } = data;
  return {
    props: {
      placeName,
      hashtags,
      imageURLs,
    },
  };
};
