import Link from 'next/link';
import { usePlaceList } from '@/hooks/queries/usePlaceList';
import { useContext, useEffect, useRef } from 'react';
import { NavigationContext } from '@/context/NavigationContext';
import PlaceItem from './PlaceItem';
import EmptyList from './EmptyList';

interface PlaceListProps {
  station: string;
}

function PlaceList(props: PlaceListProps) {
  const { station } = props;
  const { navType } = useContext(NavigationContext);
  const { data: placeList } = usePlaceList({ station, navType });
  const placeListWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!placeListWrapperRef.current) return;
    placeListWrapperRef.current.style.height =
      navType === '무료 회의룸'
        ? `${window.innerHeight - 190}px`
        : `${window.innerHeight - 150}px`;
  }, [navType]);

  return (
    <div
      ref={placeListWrapperRef}
      className="mt-4 overflow-y-scroll scrollbar-hide"
    >
      {placeList.length > 0 ? (
        placeList.map((data, index) => (
          <Link
            href={{
              pathname: `/detail/${data.id}`,
              query: {
                station,
              },
            }}
            key={index}
            className="mb-4 flex w-full border-b-2 border-GRAY_100 pb-4"
          >
            <PlaceItem data={data} />
          </Link>
        ))
      ) : (
        <EmptyList />
      )}
    </div>
  );
}

export default PlaceList;
