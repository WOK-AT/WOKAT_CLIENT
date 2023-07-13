import Image from 'next/image';
import { useState } from 'react';
import default_place from '@/assets/images/default_place.svg';

const transparent =
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';

interface PlaceImageProps {
  imageURL: string;
}

function PlaceImage({ imageURL }: PlaceImageProps) {
  const [error, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  return (
    <p className="relative h-48 w-full">
      <Image
        src={error ? default_place : imageURL ?? default_place}
        alt="place detail image"
        fill
        priority
        placeholder="blur"
        blurDataURL={`data:image/gif;base64,${transparent}`}
        style={{ objectFit: 'cover' }}
        onError={onError}
      />
    </p>
  );
}

export default PlaceImage;
