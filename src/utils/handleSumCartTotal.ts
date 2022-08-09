import { Cart } from '../models';

// eslint-disable-next-line import/prefer-default-export
export const handleSumCartTotal = (cart: Cart[]) => {
  const reducer = (acc: number, curr: Cart): number => acc + curr.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
};
