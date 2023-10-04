import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];
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
