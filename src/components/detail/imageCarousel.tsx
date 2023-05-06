import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image';

interface ImageCarouselProps {
  imgUrls: string[];
}
function ImageCarousel({ imgUrls }: ImageCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  };

  return (
    <Slider className="-ml-4 w-screen" {...settings}>
      {imgUrls.map((imgUrl, index) => {
        return (
          <section key={index}>
            <p className="h-48 bg-indigo-500">{imgUrl}</p>
          </section>
        );
      })}
    </Slider>
  );
}

export default ImageCarousel;
