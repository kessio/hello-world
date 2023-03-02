import { combineReducers, configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './reducers/greetings';

const allReducers = combineReducers({
  greetings: greetingsReducer
});

const setupStore = (preloadedState) => configureStore({
    reducer: allReducers,
    preloadedState,
  });
  
  export default setupStore;
