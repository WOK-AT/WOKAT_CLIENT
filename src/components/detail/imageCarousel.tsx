import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useGetPlaceDetail } from '@/hooks/queries/useDetail';
import { useRouter } from 'next/router';

function ImageCarousel() {
  const router = useRouter();
  const placeId = router.query.id as string;
  const { list } = useGetPlaceDetail(placeId);
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
      {imageURLs?.map((imageURL: string, index: number) => {
        return (
          <section key={index}>
            <p className="h-48 w-full bg-indigo-500">
              <Image
                src={imageURL}
                alt="place image"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: '12rem',
                  background: ' #3687ff',
                }}
              />
            </p>
          </section>
        );
      })}
    </Slider>
  );
}

export default ImageCarousel;
