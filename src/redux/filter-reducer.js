import ACTIONS from "./actions";

const initialState = {
  filter: ''
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };

    default:
      return state;
  }
}

export default filterReducer;