import { useEffect, useState } from 'react';
import { SubwayType } from '@/types/search';
import subway_info from '@/data/subway_station_info.json';
import { getLocalStorageItem, setLocalStorageItem } from '@/utils/storage';

export const useStationSearch = (input: string) => {
  const [searchResult, setSearchResult] = useState<SubwayType[]>([]);
  const [recentSearch, setRecentSearch] = useState<SubwayType[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchStation = () => {
    const stations = subway_info.data
      .filter(
        ({ station_nm }) =>
          input.slice(0, input.length) === station_nm.slice(0, input.length),
      )
      .sort((a, b) =>
        a.station_nm.localeCompare(b.station_nm, 'ko', { sensitivity: 'base' }),
      );
    setSearchResult(stations);
  };

  const deleteSearch = (target: SubwayType) => {
    const updatedRecentSearch = recentSearch.filter((v) => v !== target);
    setLocalStorageItem('recent', updatedRecentSearch);
    setRecentSearch(updatedRecentSearch);
  };

  const resetSearch = () => {
    isSearching ? setSearchResult([]) : setRecentSearch([]);
    setLocalStorageItem('recent', []);
  };

  const addRecentSearch = (target: SubwayType) => {
    if (!isSearching) return;
    const updatedRecentSearch = [
      target,
      ...recentSearch.filter(
        ({ station_nm }) => target.station_nm !== station_nm,
      ),
    ];
    setLocalStorageItem('recent', updatedRecentSearch);
  };

  useEffect(() => {
    const storage = getLocalStorageItem<SubwayType[]>('recent', []);
    setRecentSearch(storage);
  }, []);

  useEffect(() => {
    setIsSearching(input.length > 0);
    input.length && searchStation();
  }, [input]);

  return {
    searchResult,
    recentSearch,
    isSearching,
    deleteSearch,
    resetSearch,
    addRecentSearch,
  };
};
