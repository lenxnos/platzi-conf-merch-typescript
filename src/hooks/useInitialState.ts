import { useReducer } from 'react';
import { initialState as reducerInitialState } from '../reducer';
import initialData from '../initialState';
import { Buyer, Product } from '../models';

const useInitialState = () => {
  const [state, dispatch] = useReducer(reducerInitialState, initialData);

  const addToCart = (product: Product) =>
    dispatch({ type: 'ADD_TO_CART', payload: product });

  const removeFromCart = (product: Product) =>
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });

  const addToBuyer = (buyer: Buyer) =>
    dispatch({ type: 'ADD_TO_BUYER', payload: buyer });

  const addNewOrder = (order: any) =>
    dispatch({ type: 'ADD_NEW_ORDER', payload: order });

  return { state, addToCart, removeFromCart, addToBuyer, addNewOrder };
};

export default useInitialState;
