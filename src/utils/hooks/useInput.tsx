import { useState } from 'react';

export const useInput = () => {
  const [input, setInput] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setInput(value);
  };
  return { input, onChange };
};
