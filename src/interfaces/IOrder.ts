export interface IOrder {
  id: string;
  date: string;
  product: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  customer: string;
  paid: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
