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

      {/* --- Books Display --- */}
      <div className="bookCardsDiv">
        <h3>BOOKSHELF</h3>
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
          </div>
 )
        )}
      </div>
    </div>
  );
};


              


export default Bookshelf;
