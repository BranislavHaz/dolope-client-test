import { useCallback, useEffect, useRef } from "react";

function useTimeout() {
  const timeoutIdRef = useRef();

  // Spustenie funkcie s oneskorením
  const set = useCallback((callback, delay) => {
    timeoutIdRef.current = setTimeout(callback, delay);
  }, []);

  // Zrušenie timeoutu pri unmountingu
  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  return set;
}

export default useTimeout;
