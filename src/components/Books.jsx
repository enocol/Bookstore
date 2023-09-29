import AddNewBook from './AddNewBook';

const Books = () => {
  const books = [
    { title: 'book1', author: 'author1', id: 1 },
    { title: 'book2', author: 'author2', id: 2 },
    { title: 'book3', author: 'author3', id: 3 },
  ];
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
