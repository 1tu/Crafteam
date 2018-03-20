export interface CartItem {
  count: number;
  product: any;
}

export interface CartStoreState {
  productList: CartItem[];
}
