import {createSlice} from '@reduxjs/toolkit';

const searchObject = {
  message: '',
};

export const search = createSlice({
  name: 'search',
  initialState: searchObject,
  reducers: {
    setSearch: (state, action) => {
      state.message = action.payload;
      return state;
    },
  },
});
