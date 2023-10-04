import { useSelector } from 'react-redux';
import AddNewBook from './AddNewBook';

const Books = () => {
  const books = useSelector((store) => store.books);

  return (
    <div className="book-container">
      <h1 className="title">Books</h1>
      <div className="books">
        {books.map((book) => (
          <div className="booklist" key={book.title}>
            <li>{book.title}</li>
            <button type="button">Delete</button>
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
