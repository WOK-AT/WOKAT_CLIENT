import { ReactElement, useState } from 'react';
import Image from 'next/image';
import fallbackImage from '@/assets/images/main_background.svg';

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
    <>
      {error ? (
        <Image
          src={fallbackImage}
          alt={alt}
          className="overflow-hidden rounded"
          fill
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          onError={onError}
          className="overflow-hidden rounded"
          fill
        />
      )}
    </>
  );
}

export default ImageFallback;
