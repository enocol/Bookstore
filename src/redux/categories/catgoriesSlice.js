import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    status: 'Under Constructions',
    reducers: {
      category: (state) => {
        if (state.categories.status === 'Under Contructions') {
          return state.categories.status;
        }
        return 'Thanks for visiting';
      },
    },
  },
});

export default categoriesSlice.reducer;
