import { useSearchParams } from "react-router-dom";

export const useSearchParamAlternative = (
  key: string
): [string, (value: string) => void] => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = getParamValue(key, searchParams);
  const setValue = (value: string) =>
    setSearchParams(setParamValue(key, value, searchParams));

  return [value, setValue];
};

/**
 * alternative implementation for useSearchParam
 * we can seperate the logic into pure functions
 * then we can test the functions
 *
 * why I prefer the other solution:
 *
 * 1. line 6 is not covered in tests, but in the other solution, it's covered
 * 2. it seems a little clumsy to me now that we have three functions here,
 * I don't like to "get out of the way" in order to write tests, I prefer to
 * write code the intuitive way and let the tests to accommodate the implementation
 *
 * But all in all, it's a valid solution too, just different preference
 */

export const getParamValue = (key: string, searchParams: URLSearchParams) => {
  return searchParams.get(key) || "";
};

export const setParamValue = (
  key: string,
  value: string,
  searchParams: URLSearchParams
) => {
  const paramsCopy = new URLSearchParams(searchParams);
  paramsCopy.set(key, value);
  return paramsCopy;
};
