import placeLocation from '@/assets/icons/placeLocation.svg';
import DetailInformationTitle from '@/components/common/detail/DetailInformationTitle';
import Image from 'next/image';

function PlaceLocation() {
  return (
    <section className="mb-9">
      <DetailInformationTitle icon={placeLocation} title="공간 위치" />
    </section>
  );
}

export default PlaceLocation;
