import { useEffect, useRef } from "react";

const useInterval = (cb: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>();
  useEffect(() => {
    savedCallback.current = cb;
  }, [cb]);

//   save the latest callback


  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
