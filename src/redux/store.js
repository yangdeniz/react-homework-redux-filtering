import { combineReducers, compose, legacy_createStore } from 'redux';
import filterReducer from './filter-reducer';
import itemsReducer from './items-reducer';

const ReactReduxDevTools = window
  .__REDUX_DEVTOOLS_EXTENSIONS__ && window
  .__REDUX_DEVTOOLS_EXTENSIONS__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      items: itemsReducer,
      filter: filterReducer
    }),
    undefined,
    compose(
      ReactReduxDevTools
    )
  )
}

export default configureStore;