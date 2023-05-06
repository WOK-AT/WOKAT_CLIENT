import React, { useEffect, useState } from 'react';
import Layout from '@/components/common/Layout';
import { useInput } from '@/utils/hooks/useInput';
import search from '@/assets/icons/search.svg';
import reset from '@/assets/icons/delete.svg';
import delete_gray from '@/assets/icons/delete_gray.svg';
import recent from '@/assets/icons/recent.svg';
import Image from 'next/image';
import subway_info from '@/data/subway_station_info.json';
import { getStorageItem, setStorageItem } from '@/utils/localStorage';
import { useRouter } from 'next/router';
import { SubwayType } from '@/types/search';
import SearchList from '@/components/search/SearchList';

function Search() {
  const { input, onChange, onReset } = useInput();
  const router = useRouter();
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

  const deleteSearch = (target: SubwayType) => {
    const updatedRecentSearch = recentSearch.filter((v) => v !== target);
    setStorageItem('recent', updatedRecentSearch);
    setRecentSearch(updatedRecentSearch);
  };

  const resetSearch = () => {
    isSearching ? setResult([]) : setRecentSearch([]);
    setStorageItem('recent', []);
  };

  const addRecentSearch = (target: SubwayType) => {
    if (!isSearching) return;
    const updatedRecentSearch = [
      target,
      ...recentSearch.filter(
        ({ station_nm }) => target.station_nm !== station_nm,
      ),
    ];
    setStorageItem('recent', updatedRecentSearch);
  };

  const onClickStation = (station: SubwayType) => {
    addRecentSearch(station);
    router.push({
      pathname: '/list',
      query: { title: station.station_nm },
    });
  };

  useEffect(() => {
    const storage = getStorageItem<SubwayType[]>('recent', []);
    setRecentSearch(storage);
  }, []);

  useEffect(() => {
    setIsSearching(input.length > 0);
    input.length && searchStation();
  }, [input]);

  return (
    <Layout>
      <div className="mt-3 flex flex-col">
        <section className="relative mb-[18px] flex items-center justify-center ">
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
              onClick={resetSearch}
              className="font-system5_medium text-system5_medium text-GRAY_300"
            >
              전체삭제
            </span>
          </nav>

          <ul
            style={{ height: 'calc(100vh - 170px)' }}
            className="flex flex-col overflow-y-scroll scrollbar-hide"
          >
            {isSearching
              ? result.map((item, index) => (
                  <SearchList
                    key={index}
                    data={item}
                    icon={
                      recentSearch.some(
                        (rs) => rs.station_nm === item.station_nm,
                      ) && <Image src={recent} alt="recent search icon" />
                    }
                    onClick={() => onClickStation(item)}
                  />
                ))
              : recentSearch.map((item, index) => (
                  <SearchList
                    key={index}
                    data={item}
                    icon={
                      <Image
                        src={delete_gray}
                        alt="delete search history"
                        onClick={() => deleteSearch(item)}
                      />
                    }
                    onClick={() => onClickStation(item)}
                  />
                ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}

export default Search;
