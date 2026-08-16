export interface Pagination<T> {
  items: Array<T>;
  perPage: number;
  currentPage?: number;
}