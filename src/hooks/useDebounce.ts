import { useEffect, useState } from 'react';

/**
 * Produces a debounced version of a value that updates only after the value remains unchanged for a specified delay.
 *
 * @param value - The input value to debounce
 * @param delay - Time in milliseconds to wait after the last change before updating the debounced value (default: 500)
 * @returns The debounced value: the most recent `value` after it has stayed unchanged for `delay` milliseconds
 */
export function useDebounce<T>(value: T, delay = 500): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return debounced;
}