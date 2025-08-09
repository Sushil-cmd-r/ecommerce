import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    cartStore: cartReducer,
  }
})


export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
