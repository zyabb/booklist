import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';
export const BookContext = createContext();

const BookContextProdvider = props => {
  const [books, setBooks] = useState([
    { title: 'First Book', author: 'Will Smith', id: 1 },
    { title: 'Second Book', author: 'Selena Gomez', id: 2 },
    { title: 'Third Book', author: 'Katy Perry', id: 3 }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProdvider;
