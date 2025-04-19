import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice"
import createReducer from "./features/cart/cartSlice"

export const store = configureStore({
    reducer : {
        user: userReducer,
        cart: createReducer,
    }
})
export default store;
