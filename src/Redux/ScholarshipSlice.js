// Slice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_HOST_URL } from "../utils/API/Api";

const initialState = {
  users: [],
  loading: false,
  error: "",
};

export const fetchScholarshipUsers = createAsyncThunk(
  "users/fetchScholarshipUsers",
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
const scholarshipUsers = createSlice({
  name: "scholarshipUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchScholarshipUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchScholarshipUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addCase(fetchScholarshipUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.users = [];
      });
  },
});
export default scholarshipUsers.reducer;
