import { useEffect } from "react";

export interface DebouncerConfig<T> {
  valueToBeDebounced: T;
  onTimeOut: (value: T) => void;
  timeoutInSeconds: number;
}

export function useDebouce<T = any>(config: DebouncerConfig<T>) {
  const { valueToBeDebounced, onTimeOut, timeoutInSeconds } = config;

  useEffect(() => {
    const timeout = setTimeout(() => {
      onTimeOut(valueToBeDebounced);
    }, timeoutInSeconds * 1000);

    return () => {
      clearInterval(timeout);
    };
  }, [valueToBeDebounced, onTimeOut, timeoutInSeconds]);
}

export default useDebouce;
