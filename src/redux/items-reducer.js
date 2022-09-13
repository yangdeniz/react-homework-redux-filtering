import { nanoid } from 'nanoid';
import ACTIONS from './actions';

const initialState = {
  items: [],
  currentItem: {}
}

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ITEM_SAVE:
      if (!action.payload.id) {
        return {
          ...state,
          items: [...state.items, {...action.payload, id: nanoid()}]
        };
      }
      return {
        ...state,
        items: state.items.map(x => x.id === action.payload.id ? {...action.payload} : x)
      };
    
    case ACTIONS.ITEM_EDIT:
      return {
        ...state, 
        currentItem: {...action.payload}
      };

    case ACTIONS.ITEM_REMOVE:
      return {
        ...state, 
        items: state.items.filter(x => x.id !== action.payload.id)
      };

    case ACTIONS.ITEM_CHANGE_TITLE:
      return {
        ...state,
        currentItem: {...state.currentItem, title: action.payload.title}
      };
    
    case ACTIONS.ITEM_CHANGE_PRICE:
      return {
        ...state,
        currentItem: {...state.currentItem, price: action.payload.price}
      };

    case ACTIONS.ITEM_CLEAR:
      return {
        ...state,
        currentItem: {}
      };

    default:
      return state;
  }
}

export default itemsReducer;