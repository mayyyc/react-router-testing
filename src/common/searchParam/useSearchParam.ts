import { useSearchParams } from "react-router-dom";

export const useSearchParam = (
  key: string
): [string, (value: string) => void] => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(key) || "";
  const setValue = (value: string) => {
    const paramsCopy = new URLSearchParams(searchParams);
    paramsCopy.set(key, value);
    setSearchParams(paramsCopy);
  };
  return [value, setValue];
};
