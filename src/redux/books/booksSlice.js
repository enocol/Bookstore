import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded: (state, action) => state.books.push(action.payload),

    bookRemoved: (state, action) => {
      const itemId = action.payload.id;
      return state.books.filter((book) => book.id !== itemId);
    },
  },
});

export default booksSlice.reducer;
