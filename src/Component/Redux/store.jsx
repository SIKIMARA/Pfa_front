import { configureStore } from "@reduxjs/toolkit";
import MaterialReducer from './userSlice';


const store = configureStore({
    reducer: {
        Material: MaterialReducer,
        
    }
});
export default store;