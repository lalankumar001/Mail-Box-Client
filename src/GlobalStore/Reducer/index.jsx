import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Auth'

const store = configureStore({
    reducer: {
        auth: authReducer,
        // you can add multiple reducers here
    },
});

export default store;