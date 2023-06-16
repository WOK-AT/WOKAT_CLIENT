import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image';

interface ImageCarouselProps {
  imageURLs: string[];
}
function ImageCarousel({ imageURLs }: ImageCarouselProps) {
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
      {imageURLs?.map((imageURL, index) => {
        return (
          <section key={index}>
            <p className="h-48 w-full bg-indigo-500">
              <Image
                src={imageURL}
                alt="place image"
                width={481}
                height={192}
              />
            </p>
          </section>
        );
      })}
    </Slider>
  );
}

export default ImageCarousel;
