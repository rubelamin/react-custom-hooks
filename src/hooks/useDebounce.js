import { useState, useEffect } from "react";

export default function useDebounce(value, delay = 300) {
  const [debouncedRes, setDebouncedRes] = useState(null);

  useEffect(() => {
    const timeInterval = setTimeout(() => {
      setDebouncedRes(value);
    }, delay);

    return () => clearTimeout(timeInterval);
  }, [value, delay]);

  return debouncedRes;
}
