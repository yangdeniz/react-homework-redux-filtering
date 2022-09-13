import ACTIONS from './actions';

const saveItem = (item) => {
  return {
    type: ACTIONS.ITEM_SAVE,
    payload: item
  };
};

const editItem = (item) => {
  return {
    type: ACTIONS.ITEM_EDIT,
    payload: item
  };
};

const removeItem = (item) => {
  return {
    type: ACTIONS.ITEM_REMOVE,
    payload: item
  };
};

const setCurrentItemTitle = (title) => {
  return {
    type: ACTIONS.ITEM_CHANGE_TITLE,
    payload: {title}
  };
};

const setCurrentItemPrice = (price) => {
  return {
    type: ACTIONS.ITEM_CHANGE_PRICE,
    payload: {price}
  };
};

const clearCurrentItem = () => {
  return {
    type: ACTIONS.ITEM_CLEAR
  };
};

const setFilter = (value) => {
  return {
    type: ACTIONS.SET_FILTER,
    payload: value
  }
}

export {saveItem, editItem, removeItem, setCurrentItemTitle, setCurrentItemPrice, clearCurrentItem, setFilter};