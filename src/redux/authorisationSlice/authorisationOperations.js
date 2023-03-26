import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../helpers/authApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const register = createAsyncThunk(
  'auth/register',
  async (value, { rejectWithValue }) => {
    try {
      const result = await api.register(value);
      toast.success("Welcom", { position: toast.POSITION.TOP_CENTER})
      return result;
    } catch ({ response }) {
      toast.error('incorrect data!', {
        position: toast.POSITION.TOP_CENTER,
      });
      return rejectWithValue(response.data);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (value, { rejectWithValue }) => {
    try {
      const result = await api.login(value);
      toast.success("Welcom",{position: toast.POSITION.TOP_CENTER})
      return result;
    } catch ({ response }) {
      toast.error('email or password is not correct!', {
        position: toast.POSITION.TOP_CENTER,
      });
      return rejectWithValue(response.status);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logOut();
      toast.success("See you later",{position: toast.POSITION.TOP_CENTER})
      return result;
    } catch ({ response }) {
      toast.warning("something went wrong, try again later",{position: toast.POSITION.TOP_CENTER})
      return rejectWithValue(response.data);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token);

      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
