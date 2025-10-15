import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  accessToken: string;
}

interface AuthState {
  status: boolean;
  userData: UserData | null;
}

const initialState: AuthState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ userData: UserData }>) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
      document.cookie = "auth-token=; path=/; max-age=0";
      if (typeof window !== "undefined") {
        localStorage.removeItem("persist:auth");
      }
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
