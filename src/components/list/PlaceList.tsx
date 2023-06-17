import { usePlaceList } from '@/hooks/queries/usePlaceList';
import { useContext } from 'react';
import { NavigationContext } from '@/context/NavigationContext';
import PlaceItem from './PlaceItem';
import Skeleton from './Skeleton';

interface PlaceListProps {
  station: string;
}

function PlaceList(props: PlaceListProps) {
  const { station } = props;
  const { navType } = useContext(NavigationContext);
  const { data: placeList, isLoading } = usePlaceList({ station, navType });

  if (isLoading) return <Skeleton />;

  return (
    <div
      className="mt-4 overflow-y-scroll scrollbar-hide"
      style={{
        height: `${
          navType === '무료 회의룸'
            ? 'calc(100vh - 247px)'
            : 'calc(100vh - 190px)'
        }`,
      }}
    >
      {placeList.map((data) => (
        <PlaceItem data={data} />
      ))}
    </div>
  );
}

export default PlaceList;
