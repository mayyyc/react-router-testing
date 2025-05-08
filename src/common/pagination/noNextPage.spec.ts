import { noNextPage } from "./noNextPage";

describe("noNextPage", () => {
  it("should return true if page is greater than or equal to total pages", () => {
    expect(noNextPage({ page: 1, totalPages: 1 })).toEqual(true);
  });
  it("should return false if page is less than total pages", () => {
    expect(noNextPage({ page: 1, totalPages: 2 })).toEqual(false);
  });
});
