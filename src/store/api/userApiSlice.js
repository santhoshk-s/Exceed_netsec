import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, } from "../constant";
import { notification } from "antd";
import { data } from "autoprefixer";

export const registerUser = createAsyncThunk(
  "users/register",
  async (user, thunkAPI) => {
    const { username, email, password } = user;
    try {
      const response = await axios.post(BASE_URL + "/api/users", {
        username,
        email,
        password,
      });
      if (response.data.message) {
        notification.success({
          message: "Success",
          description: response.data.message,
        });
      }
      return response.data;
    } catch (error) {
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
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//LOGINUSER
export const loginUser = createAsyncThunk(
  "users/login",
  async (user, thunkAPI) => {
    const { email, password } = user;
    try {
      const response = await axios.post(BASE_URL + "/api/users/auth", {
        email,
        password,
      });
      if (response.data.message) {
        notification.success({
          message: "Success",
          description: response.data.message,
        });
      }
      return response.data;
    } catch (error) {
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
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
//LOGOUT
export const logoutUser = createAsyncThunk(
  "users/logout",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL + "/api/users/logout");
      if (response.data.message) {
        notification.success({
          message: "Success",
          description: response.data.message,
        });
      }
      return response.data;
    } catch (error) {
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
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);



export const deleteUserandAdmin = createAsyncThunk(
  "users/deleteUserandAdmin",
  async ({ userId, deletedUserData }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/users/${userId}`,
        userId
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


const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: [],
    loading: "idle",
    error: null,
  
    deleteUserandAdmin: { data: [], loading: "idle", error: null },

  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = "loading";
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = "idle";
      state.entities.push(action.payload);
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.payload;
    });

    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = "loading";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = "idle";
      state.entities.push(action.payload);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.payload;
    });


    //DELETE DELETE USER AND ADMIN WITH ID
    builder.addCase(deleteUserandAdmin.pending, (state, action) => {
      state.deleteUserandAdmin.loading = "loading";
    });
    builder.addCase(deleteUserandAdmin.fulfilled, (state, action) => {
      state.deleteUserandAdmin.data = action.payload;
      state.deleteUserandAdmin.loading = "succeeded";
    });
    builder.addCase(deleteUserandAdmin.rejected, (state, action) => {
      state.deleteUserandAdmin.error = action.error.message;
      state.deleteUserandAdmin.loading = "failed";
    }); 
  },
});

export default usersSlice.reducer;
