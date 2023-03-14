import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") ? true : false,
  email: localStorage.getItem("email") || "",
};

const authSlice = createSlice({
  initialState: initialAuthState,
  name: "authentication",
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.email = action.payload;
      localStorage.setItem("email", JSON.stringify(action.payload));
      localStorage.setItem("isAuthenticated", "true");
    },
    logout(state) {
      state.isAuthenticated = false;
      state.email = "";
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("email");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
