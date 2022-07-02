import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from "./games/reducer";
import cartReducer from "./cart/reducer"

const store = configureStore({
  reducer: {
    game: gamesReducer,
    cart: cartReducer
  },
});

export default store;