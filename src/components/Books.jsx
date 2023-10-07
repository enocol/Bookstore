import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import AddNewBook from './AddNewBook';
import {
  bookRemoved,
  fetchBooks,
  deleteBooks,
} from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const percentage = 66;

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
      <div className="books">
        {books.map((book) => (
          <div className="bookcard" key={book.item_id}>
            <div className="book-details">
              <span className="category">{book.category}</span>
              <div>
                <li className="title">{book.title}</li>
                <span className="bookauthor">{book.author}</span>
              </div>

              <div className="left-buttom">
                <span className="m-1">Comment</span>
                <button
                  type="button"
                  className="remove m-1"
                  onClick={() => handledelete(book.item_id)}
                >
                  Remove
                </button>
                <span className="m-1">Edit</span>
              </div>
            </div>

            <div className="progress-container">
              <CircularProgressbar className="spinner" value={percentage} />
              <div className="progress">
                <span className="-Percent-Complete">59%</span>
                <div className="completed">Completed</div>
              </div>
            </div>

            <div className="right">
              <span className="Current-Chapter">Current Chapter</span>
              <span>Chatper</span>
              <span className="update">UPDATE PROGRESS</span>
            </div>
          </div>
        ))}
        <div className="book-form">
          <h3>ADD NEW BOOK</h3>
          <AddNewBook />
        </div>
      </div>
    </div>
  );
};

export default Books;
