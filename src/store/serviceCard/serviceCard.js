import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constant';
import { notification } from "antd";




export const getServiceById = createAsyncThunk(
  'serviceCard/getServiceById',
  async (projectId) => {
    const response = await axios.get(`${BASE_URL}/api/servicecard/${projectId}`);
    return response.data;
  }
);




export const createServiceCard = createAsyncThunk(
  'serviceCard/createServiceCard',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/service-cards`, formData, {
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
    }  catch (error) {
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

export const getServiceCard = createAsyncThunk(
  'serviceCard/getServiceCard',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/service-cards/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllServiceCards = createAsyncThunk(
  'serviceCard/getAllServiceCards',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/service-cards`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateServiceCard = createAsyncThunk(
  'serviceCard/updateServiceCard',
  async ({ id, updatedCard }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/api/servicecards/${id}`,
        updatedCard
      );
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

const serviceCardSlice = createSlice({
  name: 'serviceCard',
  initialState: {
    createServiceCard: { loading: false, serviceCard: null, error: null },
    getServiceCard: { loading: false, serviceCard: null, error: null },
    allServiceCards: { loading: false, serviceCards: [], error: null },
    updateServiceCard: { loading: false, serviceCard: null, error: null },
    getServiceById: { loading: false, serviceCard: null, error: null },
  },
  extraReducers: (builder) => {
    // POST SERVICE CARD
    builder
      .addCase(createServiceCard.pending, (state) => {
        state.createServiceCard.loading = 'loading';
        state.createServiceCard.error = null;
      })
      .addCase(createServiceCard.fulfilled, (state, action) => {
        state.createServiceCard.loading = 'succeeded';
        state.createServiceCard.serviceCard = action.payload;
      })
      .addCase(createServiceCard.rejected, (state, action) => {
        state.createServiceCard.loading = 'failed';
        state.createServiceCard.error = action.payload;
      });

    // GET SERVICE CARD DETAILS
    builder
      .addCase(getServiceCard.pending, (state) => {
        state.getServiceCard.loading = 'loading';
        state.getServiceCard.error = null;
      })
      .addCase(getServiceCard.fulfilled, (state, action) => {
        state.getServiceCard.loading = 'succeeded';
        state.getServiceCard.serviceCard = action.payload;
      })
      .addCase(getServiceCard.rejected, (state, action) => {
        state.getServiceCard.loading = 'failed';
        state.getServiceCard.error = action.payload;
      });

    // GET ALL SERVICE CARDS
    builder
      .addCase(getAllServiceCards.pending, (state) => {
        state.allServiceCards.loading = 'loading';
        state.allServiceCards.error = null;
      })
      .addCase(getAllServiceCards.fulfilled, (state, action) => {
        state.allServiceCards.loading = 'succeeded';
        state.allServiceCards.serviceCards = action.payload;
      })
      .addCase(getAllServiceCards.rejected, (state, action) => {
        state.allServiceCards.loading = 'failed';
        state.allServiceCards.error = action.payload;
      });

    // UPDATE SERVICE CARD
    builder
      .addCase(updateServiceCard.pending, (state) => {
        state.updateServiceCard.loading = 'loading';
        state.updateServiceCard.error = null;
      })
      .addCase(updateServiceCard.fulfilled, (state, action) => {
        state.updateServiceCard.loading = 'succeeded';
        state.updateServiceCard.serviceCard = action.payload;
      })
      .addCase(updateServiceCard.rejected, (state, action) => {
        state.updateServiceCard.loading = 'failed';
        state.updateServiceCard.error = action.payload;
      });
      //get service card by id
      builder
      .addCase(getServiceById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getServiceById.fulfilled, (state, action) => {
        state.loading = false;
        state.service = action.payload;
      })
      .addCase(getServiceById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default serviceCardSlice.reducer;
