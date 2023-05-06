import React, { useEffect, useState } from 'react';
import Layout from '@/components/common/Layout';
import { useInput } from '@/utils/hooks/useInput';
import search from '@/assets/icons/search.svg';
import reset from '@/assets/icons/delete.svg';
import delete_gray from '@/assets/icons/delete_gray.svg';
import recent from '@/assets/icons/recent.svg';
import Image from 'next/image';
import subway_info from '@/data/subway_station_info.json';
import { line_color } from '@/utils/subway_line_color';
import { getStorageItem, setStorageItem } from '@/utils/localStorage';

interface SubwayType {
  line_num: string | string[];
  station_nm: string;
}

interface ResultProps {
  data: SubwayType;
  icon: React.ReactNode;
}

function Search() {
  const { input, onChange, onReset } = useInput();
  const [result, setResult] = useState<SubwayType[]>([]);
  const [recentSearch, setRecentSearch] = useState<SubwayType[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchStation = () => {
    const stations = subway_info.data
      .filter(({ station_nm }) =>
        input
          .slice(0, input.length)
          .includes(station_nm.slice(0, input.length)),
      )
      .sort((a, b) =>
        a.station_nm.localeCompare(b.station_nm, 'ko', { sensitivity: 'base' }),
      );
    setResult(stations);
  };

  const removeItem = (target: SubwayType) => {
    const updatedRecentSearch = recentSearch.filter((v) => v !== target);
    setStorageItem('recent', updatedRecentSearch);
    setRecentSearch(updatedRecentSearch);
  };

  const removeAllSearch = () => {
    isSearching ? setResult([]) : setRecentSearch([]);
    setStorageItem('recent', []);
  };

  useEffect(() => {
    const storage = getStorageItem<SubwayType[]>('recent', []);
    setRecentSearch(storage);
  }, []);

  useEffect(() => {
    setIsSearching(input.length > 0);
    input.length && searchStation();
  }, [input]);

  // 검색 결과
  const Result = (props: ResultProps) => {
    const { data, icon } = props;
    const { line_num, station_nm } = data;

    /* TODO : 검색 결과 클릭 시 공간 리스트 뷰로 이동 */
    const addRecentSearch = (target: SubwayType) => {
      if (!isSearching) return;
      const updatedRecentSearch = [
        target,
        ...recentSearch.filter(
          ({ line_num, station_nm }) =>
            target.line_num !== line_num && target.station_nm !== station_nm,
        ),
      ];
      setStorageItem('recent', updatedRecentSearch);
    };

    return (
      <li
        onClick={() => addRecentSearch(data)}
        className="flex items-center justify-between border-b-[0.75px] border-GRAY_100 py-3"
      >
        <div className="flex items-center">
          <LineNumber line_num={line_num} />
          <p className="ml-3 font-system4_medium text-system4_medium text-GRAY_900">
            {station_nm}역
          </p>
        </div>
        {icon}
      </li>
    );
  };

  // 지하철 호선
  const LineNumber = ({ line_num }: Pick<SubwayType, 'line_num'>) => {
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
  };

  return (
    <Layout>
      <div className="mt-3 flex flex-col">
        <section className="relative mb-[18px] flex items-center justify-center">
          <input
            type="text"
            placeholder="지하철역을 검색하세요."
            value={input}
            onChange={onChange}
            maxLength={12}
            className="flex  h-[52px] w-full items-center rounded-[38px] border border-solid border-BLUE_400
            bg-white py-3.5 pl-6 font-system4 text-system4 text-GRAY_900 shadow-[0px_0px_2px_rgba(0,0,0,0.3)] selection:mb-3.5 focus:outline-none"
          />
          <div className="absolute right-[24px]  h-6 w-6 ">
            {isSearching ? (
              <Image
                src={reset}
                alt="input reset button"
                fill
                onClick={onReset}
              />
            ) : (
              <Image src={search} alt="search button" fill />
            )}
          </div>
        </section>

        <section>
          <nav className="mb-1 flex items-center justify-between">
            <h1 className="text-GRAY-900 font-system3_bold text-system3_bold">
              {isSearching ? '검색 결과' : '최근 검색'}
            </h1>
            <span
              onClick={removeAllSearch}
              className="font-system5_medium text-system5_medium text-GRAY_300"
            >
              전체삭제
            </span>
          </nav>

          <ul className="flex flex-col">
            {isSearching
              ? result.map((item, index) => (
                  <Result
                    key={index}
                    data={item}
                    icon={
                      recentSearch.some(
                        (rs) => rs.station_nm === item.station_nm,
                      ) && <Image src={recent} alt="recent search icon" />
                    }
                  />
                ))
              : recentSearch.map((item, index) => (
                  <Result
                    key={index}
                    data={item}
                    icon={
                      <Image
                        src={delete_gray}
                        alt="delete search history"
                        onClick={() => removeItem(item)}
                      />
                    }
                  />
                ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}

export default Search;
