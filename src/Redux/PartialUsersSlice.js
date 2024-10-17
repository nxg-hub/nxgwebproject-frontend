// Slice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_HOST_URL } from "../utils/API/Api";

const initialState = {
  partialUsers: [],
  loading: false,
  error: "",
};

export const fetchPartialUsers = createAsyncThunk(
  "users/fetchPartialUsers",
  async (url) => {
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
  }
);
const partialUsersSlice = createSlice({
  name: "userInputSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPartialUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPartialUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.partialUsers = action.payload;
      })
      .addCase(fetchPartialUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.partialUsers = [];
      });
  },
});

export default partialUsersSlice.reducer;
