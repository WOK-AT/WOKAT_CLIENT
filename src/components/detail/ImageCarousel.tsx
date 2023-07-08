import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGetPlaceDetail } from '@/hooks/queries/useDetail';
import { useRouter } from 'next/router';
import default_place from '@/assets/images/default_place.svg';
import PlaceImage from './PlaceImage';

function ImageCarousel() {
  const router = useRouter();
  const id = router.query.id as string;
  const station = router.query.station as string;
  const { list } = useGetPlaceDetail(id, station);
  if (!list) return <h1></h1>;
  const imageURLs = list?.data.imageURLs;

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    className: 'detail-slider',
  };

  return (
    <Slider {...settings}>
      {imageURLs.length ? (
        imageURLs?.map((imageURL: string, index: number) => (
          <PlaceImage key={index} imageURL={imageURL} />
        ))
      ) : (
        <PlaceImage imageURL={default_place} />
      )}
    </Slider>
  );
}

export default ImageCarousel;
