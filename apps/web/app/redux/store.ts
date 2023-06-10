import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from "react-redux";
import { webEnv } from "../common/environments/environments";

const { isProd } = webEnv;

export const store = configureStore({
  reducer: {},
  devTools: !isProd,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatchBase<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelectorBase;
