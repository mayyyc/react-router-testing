import { getParamValue, setParamValue } from "./useSearchParamAlternative";

describe("getParamValue", () => {
  it("should get correct param value", () => {
    const searchParams = new URLSearchParams("page=5&perPage=3");
    expect(getParamValue("page", searchParams)).toEqual("5");
  });
  it("should get empty string if param doesn't exist", () => {
    const searchParams = new URLSearchParams("page=5&perPage=3");
    expect(getParamValue("author", searchParams)).toEqual("");
  });
});

describe("setParamValue", () => {
  it("should set correct param value", () => {
    const searchParams = new URLSearchParams("page=5&perPage=3");
    const newSearchParams = setParamValue("page", "10", searchParams);
    expect(newSearchParams.get("page")).toEqual("10");
    expect(newSearchParams.get("perPage")).toEqual("3");
    expect(newSearchParams.toString()).toEqual("page=10&perPage=3");
  });
  it("should set correct param value when it doesn't exist", () => {
    const searchParams = new URLSearchParams("page=5&perPage=3");
    const newSearchParams = setParamValue("author", "10", searchParams);
    expect(newSearchParams.get("page")).toEqual("5");
    expect(newSearchParams.get("perPage")).toEqual("3");
    expect(newSearchParams.get("author")).toEqual("10");
    expect(newSearchParams.toString()).toEqual("page=5&perPage=3&author=10");
  });
});
