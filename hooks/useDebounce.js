import { useRef } from "react";

const useDebounce = (fn, delay) => {
  const timeoutRef = useRef();

  return function (...args) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export default useDebounce;
