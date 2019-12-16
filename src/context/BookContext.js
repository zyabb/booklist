import React, { createContext, useState, useReducer, useEffect } from 'react';
import uuid from 'uuid/v1';
import { bookReducer } from '../reducer/BookReducer';
export const BookContext = createContext();

const BookContextProdvider = props => {
  // const [books, setBooks] = useState([
  //   { title: 'First Book', author: 'Will Smith', id: 1 },
  //   { title: 'Second Book', author: 'Selena Gomez', id: 2 },
  //   { title: 'Third Book', author: 'Katy Perry', id: 3 }
  // ]);
  // const [books, dispatch] = useReducer(bookReducer, [
  //   { title: 'First Book', author: 'Will Smith', id: 1 },
  //   { title: 'Second Book', author: 'Selena Gomez', id: 2 },
  //   { title: 'Third Book', author: 'Katy Perry', id: 3 }
  // ]);

  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: uuid() }]);
  // };

  // const removeBook = id => {
  //   setBooks(books.filter(book => book.id !== id));
  // };
  return (
    // <BookContext.Provider value={{ books, addBook, removeBook }}>
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProdvider;
