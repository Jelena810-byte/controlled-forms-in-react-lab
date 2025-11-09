import { useState } from 'react';
//import "./Bookshelf.css";


const Bookshelf = () => {

  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (!newBook.title.trim() || !newBook.author.trim()) return;

    
    setBooks([...books, newBook]);

    
    setNewBook({
      title: '',
      author: '',
    });
  };

  // optinal Remove book by index
  const handleRemove = (indexToRemove) => {
    const updatedBooks = books.filter((_, index) => index !== indexToRemove);
    setBooks(updatedBooks);
  };



  return (
    <div className="bookshelfDiv">
      {/* --- Form --- */}
      <div className="formDiv">
        <h3>ADD A BOOK</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              placeholder="Enter book title"
            />
          </label>
          <br />
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              placeholder="Enter author name"
            />
          </label>
          <br />
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
  {books.length === 0 ? (
    <p>No books added yet!</p>
  ) : (
    books.map((book, index) => (
      <div className="bookCardRow" key={index}>
        <div className="bookCard">
          <h4 className="bookTitle">{book.title}</h4>
          <p className="bookAuthor">by {book.author}</p>
        </div>

        {/* Remove button OUTSIDE the box */}
        <button
          className="removeBtn"
          onClick={() => handleRemove(index)}
          aria-label={`Remove ${book.title}`}
          type="button"
        >
          ❌ Remove
        </button>
      </div>
    ))
  )}
</div>

    </div>
  );
};

export default Bookshelf;
