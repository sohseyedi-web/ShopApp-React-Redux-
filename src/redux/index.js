import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./reducers/shopping-reducer";

const store = configureStore({
  reducer: {
    shop: shoppingReducer,
  },
});

export default store;
