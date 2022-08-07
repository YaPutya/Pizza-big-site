export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

// type SearchPizzaParams = {
//   sortBy: string;
//   order: string;
//   category: string;
//   search: string;
//   currentPage: string;
// } сократил на params: Record<string, string>, т.к все значения - строчки. После, пришлось создать отдельный тип, что пофиксить ошибки.