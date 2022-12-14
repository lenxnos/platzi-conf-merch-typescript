import { IInitialState } from '../models';

interface ActionState {
  type: string;
  payload: any;
}

const reducerInitialState = (
  state: IInitialState,
  action: ActionState
): IInitialState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case 'REMOVE_FROM_CART': {
      const { id } = action.payload as { id: string };
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== id),
      };
    }
    case 'ADD_TO_BUYER': {
      return {
        ...state,
        buyer: [...state.buyer, action.payload],
      };
    }
    case 'ADD_NEW_ORDER': {
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    }
    default:
      return state;
  }
};

export default reducerInitialState;
