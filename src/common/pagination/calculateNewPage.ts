import { noNextPage } from "./noNextPage";
import { noPrevPage } from "./noPrevPage";

export const calculateNewPage = ({
  page,
  nextOrPrev,
  totalPages,
}: {
  page: number;
  nextOrPrev: "next" | "prev";
  totalPages: number;
}): number => {
  switch (nextOrPrev) {
    case "next":
      if (noNextPage({ page, totalPages })) return page;
      return page + 1;
    case "prev":
      if (noPrevPage({ page })) return page;
      return page - 1;
  }
};
