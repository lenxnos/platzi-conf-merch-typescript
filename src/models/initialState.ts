import { Product } from './products';
import { Buyer } from './buyer';
import { Cart } from './cart';

export interface IInitialState {
  products: Product[];
  cart: Cart[];
  buyer: Buyer[];
  orders: any[];
}
