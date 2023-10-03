import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { title: 'book1', author: 'author1', id: 1 },
  { title: 'book2', author: 'author2', id: 2 },
  { title: 'book3', author: 'author3', id: 3 },
];
const booksSlice = createSlice({
  name: 'books',
  initialState,
});

export default booksSlice.reducer;
