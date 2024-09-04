import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constant';
import { notification } from "antd";

// Async thunk for sending contact message
export const sendHelpMessage = createAsyncThunk(
  'help/sendHelpMessage',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/help`, formData);
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
export const fetchHelpMessages = createAsyncThunk(
  'help/fetchHelpMessages',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/help`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const helpSlice = createSlice({
  name: 'help',
  initialState: {
    loading: false,
    success: false,
    error: null,
    helpMessages: [], // Added state for contact messages
  },
  reducers: {
    resetHelpstate: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendHelpMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendHelpMessage.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(sendHelpMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })


      .addCase(fetchHelpMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHelpMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.helpMessages = action.payload;
      })
      .addCase(fetchHelpMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetHelpstate } = helpSlice.actions;
export default helpSlice.reducer;
