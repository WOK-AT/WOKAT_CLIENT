import { useState } from 'react';

export const useFilter = <T>(defaultOption: T) => {
  const [currentOption, setCurrentOption] = useState(defaultOption);

  const changeOption = (option: T) => {
    setCurrentOption(option);
  };

  return { currentOption, changeOption };
};
