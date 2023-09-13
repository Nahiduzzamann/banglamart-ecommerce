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
import allSellerReducer from '../reducers/allSellerReducer';
import bargainingProductsReducer from '../reducers/bargainingProductsReducer';
import forYouProductsReducer from '../reducers/forYouProductsReducer';
// ...

const rootReducer = combineReducers({
  divisions: divisionReducer,
  districts: districtReducer,
  upazilas: upazilaReducer,
  unions: unionReducer,
  allCategories: allCategoriesReducer,
  flashSell: flashSellReducer,
  flashSellData: flashSellDataReducer,
  allSellerData: allSellerReducer,
  bargainingProducts: bargainingProductsReducer,
  forYouProducts: forYouProductsReducer,
  
  // Add other reducers here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
