import { SubwayType } from '@/types/search';
import { line_color } from '@/utils/subway_line_color';

function LineNumber({ line_num }: Pick<SubwayType, 'line_num'>) {
  const replaceLineText = (line_num: string) => {
    if (line_num.includes('호선')) return line_num.replace('호선', '');
    if (line_num.at(-1) === '선') return line_num.slice(0, -1);
    return line_num;
  };

  return (
    <>
      {Array.isArray(line_num) ? (
        line_num.map((num, index) => (
          <div
            key={index}
            style={{
              backgroundColor: `${line_color[num] || '#666699'}`,
              marginRight: index === line_num.length - 1 ? '0px' : '8px',
            }}
            className={`flex  h-5  items-center justify-center rounded-full
              ${replaceLineText(num).length > 1 ? 'w-fit px-2' : 'w-5'}`}
          >
            <p className="font-system5_medium text-system5_medium text-white ">
              {replaceLineText(num)}
            </p>
          </div>
        ))
      ) : (
        <div
          style={{ backgroundColor: `${line_color[line_num] || '#666699'}` }}
          className={`flex h-5  items-center  justify-center rounded-full 
            ${replaceLineText(line_num).length > 1 ? 'w-fit px-2' : 'w-5'}`}
        >
          <p className="font-system5_medium text-system5_medium text-white">
            {replaceLineText(line_num)}
          </p>
        </div>
      )}
    </>
  );
}

export default LineNumber;
