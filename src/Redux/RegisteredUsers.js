// Slice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_HOST_URL } from "../utils/API/Api";

const initialState = {
  users: [],
  loading: false,
  error: "",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (url) => {
  return await fetch(`${API_HOST_URL}${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
});
const registeredUsers = createSlice({
  name: "registeredUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.users = [];
      });
  },
});
export default registeredUsers.reducer;
