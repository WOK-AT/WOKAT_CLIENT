import Image from 'next/image';

interface PlaceImageProps {
  imageURL: string;
}

function PlaceImage({ imageURL }: PlaceImageProps) {
  return (
    <p className="relative h-48 w-full">
      <Image alt={imageURL} src={imageURL} fill />
    </p>
  );
}

export default PlaceImage;
