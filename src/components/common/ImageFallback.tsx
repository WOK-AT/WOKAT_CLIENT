import { ReactElement, useState } from 'react';
import Image from 'next/image';
import fallbackImage from '@/assets/images/background.svg';

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
      alt={alt}
      onError={onError}
      className="overflow-hidden rounded"
      fill
    />
  );
}

export default ImageFallback;
