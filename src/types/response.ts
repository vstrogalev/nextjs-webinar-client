export interface APIResponse<T> {
  isError: boolean;
  data?: T
}
