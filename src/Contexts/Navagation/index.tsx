import { createContext, useState } from 'react';

const NavContext = createContext({
  navType: '무료 공간',
  switchNav: (data: string) => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const NavProvider = ({ children }: Props): JSX.Element => {
  const [navType, setNavType] = useState('무료 공간');

  const switchNav = (data: string): void => {
    setNavType(data);
  };

  return (
    <NavContext.Provider
      value={{
        navType,
        switchNav,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export { NavContext, NavProvider };
