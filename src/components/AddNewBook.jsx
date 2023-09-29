const AddNewBook = () => (
  <form className="newbook-form">
    <div className="form-container">
      <div className="new-book-input">
        <input type="text" id="inputText" placeholder="Book name" />
      </div>
      <div>
        <input
          type="text"
          placeholder="author"
          name="author"
          id="author"
          className="author-input"
        />

        <button htmlFor="inputText" className="add-book" type="button">
          Add Book
        </button>
      </div>
    </div>
  </form>
);

export default AddNewBook;
