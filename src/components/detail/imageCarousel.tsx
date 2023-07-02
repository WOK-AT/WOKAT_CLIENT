import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useGetPlaceDetail } from '@/hooks/queries/useDetail';
import { useRouter } from 'next/router';

function ImageCarousel() {
  const router = useRouter();
  const { id, station } = router.query;
  const { list } = useGetPlaceDetail(id as string, station as string);
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
            <p className="relative h-48 w-full bg-indigo-500">
              <Image
                src={imageURL}
                alt="place image"
                fill
                style={{
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
