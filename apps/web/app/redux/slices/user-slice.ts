import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = { isAuth: false };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth } = userSlice.actions;
export default userSlice.reducer;
