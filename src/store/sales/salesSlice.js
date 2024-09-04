import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constant';
import { notification } from "antd";

// Async thunk for sending contact message
export const sendSalesMessage = createAsyncThunk(
  'contact/sendSalesMessage',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/sales`, formData);
        // Success notification
        if (response.data.message) {
          notification.success({
            message: "Success",
            description: response.data.message,
          });
        }
      return response.data;
    }catch (error) {
      // Error notification
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        notification.error({
          message: "Error",
          description: error.response.data.message,
        });
      }
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for fetching contact messages
export const fetchSalesMessages = createAsyncThunk(
  'contact/fetchSalesMessagess',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/sales`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const salesSlice = createSlice({
  name: 'sales',
  initialState: {
    loading: false,
    success: false,
    error: null,
    contactMessages: [], // Added state for contact messages
  },
  reducers: {
    resetSalesState: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendSalesMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendSalesMessage.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(sendSalesMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })


      .addCase(fetchSalesMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSalesMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.contactMessages = action.payload;
      })
      .addCase(fetchSalesMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetSalesState } = salesSlice.actions;
export default salesSlice.reducer;
