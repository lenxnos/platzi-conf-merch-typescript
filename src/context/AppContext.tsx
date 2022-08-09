import React, { FC, createContext } from 'react';
import { useInitialState } from '../hooks';
import { Buyer, IInitialState, Product } from '../models';

interface IAppContext {
  state: IInitialState;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  addToBuyer: (buyer: Buyer) => void;
}

export const AppContext = createContext({} as IAppContext);

interface Props {
  children: React.ReactNode;
}

const AppProvider: FC<Props> = ({ children }) => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
