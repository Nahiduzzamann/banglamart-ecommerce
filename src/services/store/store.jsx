// store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import divisionReducer from '../reducers/divisionReducer';
// ...

const rootReducer = combineReducers({
  divisions: divisionReducer,
  
  // Add other reducers here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
