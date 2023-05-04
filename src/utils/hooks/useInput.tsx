import { useState } from 'react';

export const useInput = () => {
  const [input, setInput] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setInput(value);
  };
  const onReset = () => {
    setInput('');
  };
  return { input, onChange, onReset };
};
