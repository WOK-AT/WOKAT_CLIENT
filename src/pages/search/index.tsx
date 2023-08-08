import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '@/components/common/Layout';
import { useInput } from '@/hooks/useInput';
import search from '@/assets/icons/search.svg';
import reset from '@/assets/icons/delete.svg';
import delete_gray from '@/assets/icons/delete_gray.svg';
import recent from '@/assets/icons/recent.svg';
import { SubwayType } from '@/types/search';
import SearchList from '@/components/search/SearchList';
import SearchListItem from '@/components/search/SearchListItem';
import { useStationSearch } from '@/hooks/useStationSearch';

function Search() {
  const router = useRouter();
  const { input, onChange, onReset } = useInput();
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    searchResult,
    recentSearch,
    isSearching,
    deleteSearch,
    resetSearch,
    addRecentSearch,
  } = useStationSearch(input);

  const onStationClickRoute = (station: SubwayType) => {
    addRecentSearch(station);
    router.push({
      pathname: '/list',
      query: { title: station.station_nm },
    });
  };

  const searchListItem = isSearching
    ? searchResult.map((item, index) => (
        <SearchListItem
          key={index}
          data={item}
          icon={
            recentSearch.some((rs) => rs.station_nm === item.station_nm) && (
              <Image src={recent} alt="recent search icon" />
            )
          }
          onClick={() => onStationClickRoute(item)}
        />
      ))
    : recentSearch.map((item, index) => (
        <SearchListItem
          data={item}
          key={index}
          icon={
            <Image
              src={delete_gray}
              alt="delete search history"
              onClick={() => deleteSearch(item)}
            />
          }
          onClick={() => onStationClickRoute(item)}
        />
      ));

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        inputRef.current.dispatchEvent(new Event('focus'));
      }
    }
  }, []);

  return (
    <Layout>
      <div className="flex flex-col mt-3">
        <section className="relative mb-[18px] flex items-center justify-center ">
          <input
            type="text"
            placeholder="지하철역을 검색하세요."
            value={input}
            onChange={onChange}
            maxLength={12}
            className="flex  h-[52px] w-full items-center rounded-[38px] border border-solid border-BLUE_400
            bg-white py-3.5 pl-6 text-system4 font-system4 text-GRAY_900 shadow-[0px_0px_2px_rgba(0,0,0,0.3)] selection:mb-3.5 focus:outline-none"
            ref={inputRef}
          />
          <div className="absolute right-[24px] flex justify-center items-center">
            {isSearching ? (
              <button className="w-6 h-6">
                <Image
                  src={reset}
                  alt="input reset button"
                  fill
                  onClick={onReset}
                />
              </button>
            ) : (
              <button id="click_search_subway" className="w-6 h-6">
                <Image src={search} alt="search button" fill />
              </button>
            )}
          </div>
        </section>

        <section>
          <nav className="flex items-center justify-between mb-1">
            <h1 className="text-GRAY-900 text-system3_bold font-system3_bold">
              {isSearching ? '검색 결과' : '최근 검색'}
            </h1>
            <button
              onClick={resetSearch}
              className="text-system5_medium font-system5_medium text-GRAY_300"
            >
              전체삭제
            </button>
          </nav>

          <ul
            style={{ height: 'calc(100vh - 170px)' }}
            className="flex flex-col overflow-y-scroll scrollbar-hide"
          >
            <SearchList item={searchListItem} />
          </ul>
        </section>
      </div>
    </Layout>
  );
}

export default Search;
