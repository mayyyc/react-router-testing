import { calculateNewPage } from "./calculateNewPage";

describe("calculateNewPage", () => {
  it("should return the same page if it's out of bounds", () => {
    expect(
      calculateNewPage({ page: 1, nextOrPrev: "prev", totalPages: 1 })
    ).toEqual(1);
    expect(
      calculateNewPage({ page: 1, nextOrPrev: "next", totalPages: 1 })
    ).toEqual(1);
  });
  it("should return the next page if it's within bounds", () => {
    expect(
      calculateNewPage({ page: 1, nextOrPrev: "next", totalPages: 2 })
    ).toEqual(2);
  });
  it("should return the previous page if it's within bounds", () => {
    expect(
      calculateNewPage({ page: 2, nextOrPrev: "prev", totalPages: 2 })
    ).toEqual(1);
  });
});
