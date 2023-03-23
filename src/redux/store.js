
import { configureStore } from '@reduxjs/toolkit';

import filterReducer from '../redux/contactSlice/contactSlice';
import contactReducer from '../redux/contactSlice/contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});