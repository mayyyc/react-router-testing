export const noPrevPage = ({ page }: { page: number }): boolean => {
  return page <= 1;
};
