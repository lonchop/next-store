import { useState, useEffect } from "react";

function useLocalStorage<TKey extends string, TValue>(
  key: TKey,
  initialValue: TValue
): [TValue, (value: TValue) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
        console.log(error);
      }
    }
  }, [storedValue]);

  const setValue = (value: TValue) => {
    setStoredValue(value);
  };

  // const setValue = (value: TValue) => {
  //   if (typeof window !== "undefined") {
  //     try {
  //       setStoredValue(value);
  //       window.localStorage.setItem(key, JSON.stringify(value));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  return [storedValue, setValue];
}

export default useLocalStorage;
