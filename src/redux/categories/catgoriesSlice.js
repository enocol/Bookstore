import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    status: 'Under Contructions',
  },
});

export default categoriesSlice.reducer;
