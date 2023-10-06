import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndPoint = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/9g8gWcp1UOlVIcNnZwEx/books';

export const postData = createAsyncThunk('books/postBooks', async (newData) => {
  const response = await axios.post(apiEndPoint, newData);
  return response.data;
});

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(apiEndPoint);

  return response.data;
});
export const deleteBooks = createAsyncThunk('books/deleteBooks', async (id) => {
  await axios.delete(`${apiEndPoint}/${id}`);
  return id;
});

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded: (state, action) => {
      state.books.push(action.payload);
    },

    bookRemoved: (state, action) => {
      const bookIndex = state.books.findIndex(
        (book) => book.item_id === action.payload,
      );
      if (bookIndex !== -1) {
        state.books.splice(bookIndex, 1);
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        // Transform the data
        state.books = Object.entries(action.payload).map(
          ([bookId, bookArray]) => ({
            item_id: bookId,
            author: bookArray[0].author,
            title: bookArray[0].title,
            category: bookArray[0].category,
          }),
        );
      })

      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(postData.pending, (state) => {
        state.status = 'loading';
      })
      // .addCase(postData.fulfilled, (state, action) => {
      //   state.status = 'succeeded';
      //   state.books.push(action.payload);
      // })

      .addCase(postData.fulfilled, (state) => ({
        ...state,
        status: false,
      }))
      .addCase(postData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { bookAdded, bookRemoved } = booksSlice.actions;

export default booksSlice.reducer;
