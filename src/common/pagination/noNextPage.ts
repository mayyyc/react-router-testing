/**
 * we are using this logic in calculateNewPage and Pagination
 * thus we extract it out to avoid code duplication
 */

export const noNextPage = ({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}): boolean => {
  return page >= totalPages;
};
