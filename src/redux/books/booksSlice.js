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
    bookAdded: (books, action) => {
      books.push(action.payload);
    },

    bookRemoved: (books, action) => {
      const bookIndex = books.findIndex(
        (book) => book.item_id === action.payload,
      );
      if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
      }
    },
  },
});

export const { bookAdded, bookRemoved } = booksSlice.actions;

export default booksSlice.reducer;
