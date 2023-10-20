import {configureStore} from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import holidayReducer from './reducers/holidayReducers';

const store = configureStore({
    reducer: {
        holiday: holidayReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;
