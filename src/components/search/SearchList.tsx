import { SubwayType } from '@/types/search';
import LineNumber from './StationLine';

interface ResultProps {
  data: SubwayType;
  icon: React.ReactNode;
  onClick(args: unknown): void;
}

function Result(props: ResultProps) {
  const { data, icon, onClick } = props;
  const { line_num, station_nm } = data;

  return (
    <li className="flex w-full items-center justify-between border-b-[0.75px] border-GRAY_100 py-3">
      <div className="flex w-full items-center" onClick={() => onClick(data)}>
        <LineNumber line_num={line_num} />
        <p className="ml-3 font-system4_medium text-system4_medium text-GRAY_900">
          {station_nm}역
        </p>
      </div>
      {icon}
    </li>
  );
}

export default Result;
