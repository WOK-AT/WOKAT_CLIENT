import placeLocation from '@/assets/icons/placeLocation.svg';
import Image from 'next/image';

function PlaceLocation() {
  return (
    <section className="mb-9">
      <article className=" mb-3.5 flex flex-row items-center font-system3_bold text-system3_bold text-GRAY_600">
        <Image src={placeLocation} alt="placeLocation icon" className="mr-2" />
        <h1>공간 위치</h1>
      </article>
    </section>
  );
}

export default PlaceLocation;
