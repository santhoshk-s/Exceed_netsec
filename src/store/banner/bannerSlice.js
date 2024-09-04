import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constant";
import { notification } from "antd";

// 
export const bannerEditMessages = createAsyncThunk(
  "banner/bannerEditMessages",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/banner`, formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
      },
      });
      // Success notification
      if (response.data.message) {
        notification.success({
          message: "Success",
          description: response.data.message,
        });
      }
      return response.data;
    } catch (error) {
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

export const getBannerContent = createAsyncThunk(
  "banner/getBannerContent",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/getbanner`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    bannerEditMessages: { loading: false, banner: [], error: null, success: false },
    getBanner: { loading: false, banner: [], error: null, success: false },
  },
  extraReducers: (builder) => {
    builder
      .addCase(bannerEditMessages.pending, (state) => {
        state.bannerEditMessages.loading = true;
      })
      .addCase(bannerEditMessages.fulfilled, (state) => {
        state.bannerEditMessages.loading = false;
        state.bannerEditMessages.success = true;
      })
      .addCase(bannerEditMessages.rejected, (state, action) => {
        state.bannerEditMessages.loading = false;
        state.bannerEditMessages.error = action.error.message;
      })

      // get
      .addCase(getBannerContent.pending, (state) => {
        state.getBanner.loading = true;
      })
      .addCase(getBannerContent.fulfilled, (state, action) => {
        state.getBanner.loading = false;
        state.getBanner.banner = action.payload; // Update the banner state with the payload
        state.getBanner.success = true;
      })
      .addCase(getBannerContent.rejected, (state, action) => {
        state.getBanner.loading = false;
        state.getBanner.error = action.error.message;
      });
  },
});


export const { resetSalesState } = bannerSlice.actions;
export default bannerSlice.reducer;
