import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import AddNewBook from './AddNewBook';
import {
  bookRemoved,
  fetchBooks,
  deleteBooks,
} from '../redux/books/booksSlice';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handledelete = (id) => {
    dispatch(bookRemoved(id));
    dispatch(deleteBooks(id));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="book-container">
      <h1 className="title">Books</h1>
      <div className="books">
        {books.map((book) => (
          <div className="booklist" key={book.item_id}>
            <li>{book.title}</li>
            <button type="button" onClick={() => handledelete(book.item_id)}>
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="book-form">
        <AddNewBook />
      </div>
    </div>
  );
};

export default Books;
