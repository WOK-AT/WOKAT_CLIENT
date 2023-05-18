import { useState, useCallback } from 'react';

export type NavType = '무료 공간' | '무료 회의룸' | '카페';

type NavigationProps = {
  navType: NavType;
  switchNavType: (data: NavType) => void;
};

const useNavigation = (): NavigationProps => {
  const [navType, setNavType] = useState<NavType>('무료 공간');
  const switchNavType = useCallback((data: NavType) => setNavType(data), []);

  return { navType, switchNavType };
};

export default useNavigation;
