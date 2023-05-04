import React, { useEffect, useState } from 'react';
import Layout from '@/components/common/Layout';
import { useInput } from '@/utils/hooks/useInput';
import search from '@/assets/icons/search.svg';
import reset from '@/assets/icons/delete.svg';
import recent from '@/assets/icons/recent.svg';
import Image from 'next/image';
import subway_info from '@/data/subway_station_info.json';
import { line_color } from '@/utils/subway_line_color';

interface SubwayType {
  line_num: string | string[];
  station_nm: string;
}

function Search() {
  const { input, onChange, onReset } = useInput();
  const [result, setResult] = useState<SubwayType[]>([]);
  const [recentSearch, setRecentSearch] = useState<SubwayType[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const removeItem = (target: SubwayType) => {
    setRecentSearch((prev) => prev.filter((v) => v !== target));
  };

  const getStorage = () => {
    if (typeof window === 'undefined') {
      return [];
    }
    try {
      const storage = sessionStorage.getItem('recent');
      return storage ? JSON.parse(storage) : [];
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const setStorage = (value: SubwayType) => {
    try {
      sessionStorage.setItem('recent', JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };

  const searchStation = () => {
    const stations = subway_info.data.filter(({ station_nm }) =>
      input.slice(0, input.length).includes(station_nm.slice(0, input.length)),
    );
    setResult(stations);
  };

  useEffect(() => {
    setIsSearching(input.length > 0);
    input.length && searchStation();
  }, [input]);

  useEffect(() => {
    const storage = getStorage();
    setRecentSearch(storage);
  }, []);

  return (
    <Layout>
      <div className="mt-3 flex flex-col">
        <section className="relative flex items-center justify-center">
          <input
            type="text"
            placeholder="지하철역을 검색하세요."
            value={input}
            onChange={onChange}
            maxLength={12}
            className="flex h-[52px] w-full items-center  rounded-[38px] border border-solid
            border-BLUE_400 bg-white py-3.5 pl-6 font-system4 text-system4 text-GRAY_900 selection:mb-3.5 focus:outline-none"
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
          <nav className="flex justify-between">
            <h1>{isSearching ? '검색 결과' : '최근 검색'}</h1>
            <span onClick={() => setRecentSearch([])}>전체삭제</span>
          </nav>

          <ul className="flex flex-col">
            {isSearching
              ? result.map(({ line_num, station_nm }) => (
                  <li className="flex items-center justify-between">
                    <LineNumber line_num={line_num} />

                    <p>{station_nm}</p>

                    {recentSearch.some(
                      (rs) => rs.station_nm === station_nm,
                    ) && <Image src={recent} alt="recent search icon" />}
                  </li>
                ))
              : recentSearch.map((item) => {
                  const { line_num, station_nm } = item;
                  return (
                    <li className="flex items-center justify-between">
                      <LineNumber line_num={line_num} />

                      <p>{station_nm}</p>

                      <Image
                        src={reset}
                        alt="delete search history"
                        className="fill-GRAY_300"
                        onClick={() => removeItem(item)}
                      />
                    </li>
                  );
                })}
          </ul>
        </section>
      </div>
    </Layout>
  );
}

export default Search;

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
            className={`  ${
              replaceLineText(num).length > 1 ? 'w-fit px-5' : 'w-5'
            }             ${
              line_color[num] || 'bg-gray-500'
            }           flex h-5  items-center  justify-center rounded-full  font-system5_medium text-system5_medium text-WHTIE`}
          >
            {replaceLineText(num)}
          </div>
        ))
      ) : (
        <div
          className={`  ${
            replaceLineText(line_num).length > 1 ? 'w-fit px-5' : 'w-5'
          }             ${
            line_color[line_num] || 'bg-gray-500'
          }           flex h-5  items-center  justify-center rounded-full  font-system5_medium text-system5_medium text-WHTIE`}
        >
          {replaceLineText(line_num)}
        </div>
      )}
    </>
  );
};
