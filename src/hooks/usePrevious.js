import { useEffect, useRef } from 'react';

export const usePrevious = (value) => {
  const prevValue = useRef();

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return prevValue.current;
};
