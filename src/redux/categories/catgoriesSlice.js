import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    status: 'Under Constructions',
    reducers: {},
  },
});

export const { category } = categoriesSlice.actions;
export default categoriesSlice.reducer;
