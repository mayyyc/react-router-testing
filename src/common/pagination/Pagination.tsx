import React from "react";
import { noPrevPage } from "./noPrevPage";
import { noNextPage } from "./noNextPage";
export const Pagination: React.FC<{
  page: string;
  setPage: (page: string) => void;
  totalPages: number;
}> = ({ page, setPage, totalPages }) => {
  const onChangePage = (nextOrPrev: "next" | "prev") => {
    const newPage =
      nextOrPrev === "next" ? parseInt(page) + 1 : parseInt(page) - 1;
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage.toString());
  };
  return (
    <div>
      <button
        disabled={noPrevPage({ page: parseInt(page) })}
        onClick={() => onChangePage("prev")}
      >
        prev page
      </button>
      <div>{page}</div>
      <button
        disabled={noNextPage({ page: parseInt(page), totalPages })}
        onClick={() => onChangePage("next")}
      >
        next page
      </button>
    </div>
  );
};
