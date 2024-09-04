import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice';

import userApiReducer from "./api/userApiSlice";
import serviceCardReducer from "./serviceCard/serviceCard";
import contactReducer from './contactUs/contactus'
import salesReducer from './sales/salesSlice'
import helpReducer from './help/helpSlice'
import bannerSlice from "./banner/bannerSlice";


export const store = configureStore({
    reducer: {
        auth:authReducer,
        serviceCard:serviceCardReducer,
        users:userApiReducer,
        contact: contactReducer,
        sales:salesReducer,
        help:helpReducer,
        banner:bannerSlice
    }
})