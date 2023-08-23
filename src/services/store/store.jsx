// store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import divisionReducer from '../reducers/divisionReducer';
import districtReducer from './../reducers/districtReducer';
import upazilaReducer from './../reducers/upazilaReducer';
import unionReducer from './../reducers/unionReducer';
import allCategoriesReducer from '../reducers/allCategoriesReducer';
import flashSellReducer from '../reducers/flashSellReducer';
import flashSellDataReducer from '../reducers/flashSellDataReducer';
// ...

const rootReducer = combineReducers({
  divisions: divisionReducer,
  districts: districtReducer,
  upazilas: upazilaReducer,
  unions: unionReducer,
  allCategories: allCategoriesReducer,
  flashSell: flashSellReducer,
  flashSellData: flashSellDataReducer,
  
  // Add other reducers here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
