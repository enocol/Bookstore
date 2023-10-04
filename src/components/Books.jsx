import { useSelector, useDispatch } from 'react-redux';

import AddNewBook from './AddNewBook';
import { bookRemoved } from '../redux/books/booksSlice';

const Books = () => {
  const books = useSelector((store) => store.books);
  const dispatch = useDispatch();

  const handledelete = (id) => {
    dispatch(bookRemoved(id));
  };

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
