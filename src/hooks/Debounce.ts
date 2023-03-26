import { useRef } from 'react';

const useDebounce = (
  fn: (args: any) => void | Promise<void>,
  delay: number
) => {
  const timeoutRef = useRef<any>(null);

  const debouncedFn = (args: any) => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      fn(args);
    }, delay);
  };

  return debouncedFn;
};

export default useDebounce;
