import { createSlice } from "@reduxjs/toolkit";

const initialState = { qid: "" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setQid(state, action) {
      console.log(`action`, action.payload);
      state.qid = action.payload;
    },
    unSetQid(state) {
      state.qid = "";
    },
  },
});

export const { setQid, unSetQid } = authSlice.actions;
export default authSlice.reducer;
