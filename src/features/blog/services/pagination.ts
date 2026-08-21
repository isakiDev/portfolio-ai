export interface Pagination<T> {
  items: Array<T>;
  perPage: number;
  currentPage?: number;
}

export const BLOG_ITEMS_PER_PAGE = 4;

export const paginate = <T>({
  items,
  perPage,
  currentPage = 1,
}: Pagination<T>) => {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / perPage);

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const paginatedItems = items.slice(startIndex, endIndex);

  return {
    paginatedItems,
    currentPage,
    totalPages,
    perPage,
    totalItems,
  };
};

export const getPagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array(totalPages)
      .fill(null)
      .map((_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, "...", totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [
      1,
      "...",
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export const isActivePage = (page: number, currentPage: number) =>
  page === currentPage;
