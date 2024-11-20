type Callback = (...args: unknown[]) => void;
export const useDebounce = (callback: Callback, delay: number) => {
  let timeOutId: NodeJS.Timeout;
  return function (...args: Array<string | number | null>) {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
