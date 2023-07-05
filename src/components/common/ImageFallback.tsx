import { ReactElement, useState } from 'react';
import Image from 'next/image';
import fallbackImage from '@/assets/images/background.webp';

interface ImageFallbackProps {
  src: string;
  alt: string;
}

function ImageFallback(props: ImageFallbackProps): ReactElement {
  const { src, alt } = props;
  const [error, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  return (
    <Image
      src={error ? fallbackImage : src}
      placeholder="blur"
      blurDataURL={`/_next/image?url=${src}&w=16&q=1`}
      alt={alt}
      onError={onError}
      className="overflow-hidden rounded"
      fill
    />
  );
}

export default ImageFallback;
