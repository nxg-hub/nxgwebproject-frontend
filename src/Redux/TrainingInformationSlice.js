// Slice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_HOST_URL } from "../utils/API/Api";

const initialState = {
  trainingInfo: [],
  loading: false,
  error: "",
};

export const fetchTrainingInfo = createAsyncThunk(
  "training/fetchTrainingInfo",
  async (url) => {
    return await fetch(`${API_HOST_URL}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("hey");
        return res.json();
      })
      .then((data) => {
        return data;
      });
  }
);
const trainingInfo = createSlice({
  name: "trainingInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrainingInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrainingInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.trainingInfo = action.payload;
      })
      .addCase(fetchTrainingInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.trainingInfo = [];
      });
  },
});

export default trainingInfo.reducer;
