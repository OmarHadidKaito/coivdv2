import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import {search} from './slice-search';

const reducers = combineReducers({
  search: search.reducer,
});

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
  reducer: reducers,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});
