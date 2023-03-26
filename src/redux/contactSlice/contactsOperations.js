import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  "https://640f3ef9cde47f68db45bb39.mockapi.io/contacts"


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get('/');
      return response.data;
    } catch ({message}) {
      return rejectWithValue(message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, {rejectWithValue}) => {
    try {
      const response = await axios.post("/", contact);
      console.log(response.data)
      return response.data;
    } catch ({message}) {
      return rejectWithValue(message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, {rejectWithValue}) => {
    try {
      const response = await axios.delete(`/${id}`);
      return response.data;
    } catch ({message}) {
      return rejectWithValue(message);
    }
  }
);


