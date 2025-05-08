import { noPrevPage } from "./noPrevPage";

describe("noPrevPage", () => {
  it("should return true if page is less than or equal to 1", () => {
    expect(noPrevPage({ page: 1 })).toEqual(true);
  });
  it("should return false if page is greater than 1", () => {
    expect(noPrevPage({ page: 2 })).toEqual(false);
  });
});
