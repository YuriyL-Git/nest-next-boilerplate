import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from "react-redux";
import { environment } from "@libs/shared/environement";
import user from "./slices/user-slice";

const { isProd } = environment;

export const store = configureStore({
  reducer: {
    user,
  },
  devTools: !isProd,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatchBase<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelectorBase;
