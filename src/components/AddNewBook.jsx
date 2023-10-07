import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { postData, bookAdded } from '../redux/books/booksSlice';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.title === '' || formValues.author === '') return;
    const newBook = {
      title: formValues.title,
      author: formValues.author,
      item_id: uuidv4(),
      category: 'Action',
    };
    dispatch(postData(newBook));
    dispatch(bookAdded(newBook));

    setFormValues({
      title: '',
      author: '',
    });
  };

  return (
    <form className="newbook-form">
      <div className="form-container">
        <div className="new-book-input">
          <input
            type="text"
            id="inputText"
            placeholder="Book name"
            name="title"
            onChange={handleChange}
            value={formValues.title}
            className="title-input"
          />
        </div>
        <div className="author-container">
          <input
            type="text"
            placeholder="author"
            name="author"
            id="author"
            className="author-input"
            onChange={handleChange}
            value={formValues.author}
          />

          <button
            htmlFor="inputText"
            className="add-book"
            type="button"
            onClick={handleSubmit}
          >
            Add Book
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddNewBook;
