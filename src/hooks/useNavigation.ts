import { getSessionStorageItem, setSessionStorageItem } from '@/utils/storage';
import { useState, useCallback, useEffect } from 'react';

export type NavType = '무료 공간' | '무료 회의룸' | '카페' | '';

type NavigationProps = {
  navType: NavType;
  switchNavType: (data: NavType) => void;
};

const useNavigation = (): NavigationProps => {
  const [navType, setNavType] = useState<NavType>('');
  const switchNavType = useCallback((data: NavType) => {
    setNavType(data);
  }, []);

  useEffect(() => {
    if (navType) setSessionStorageItem('activeTab', navType);
  }, [navType]);

  useEffect(() => {
    if (window === undefined) return;
    const sessionNavType = getSessionStorageItem(
      'activeTab',
      '무료 공간',
    ) as NavType;
    setNavType(sessionNavType);
  }, []);

  return { navType, switchNavType };
};

export default useNavigation;
