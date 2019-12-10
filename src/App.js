import React from 'react';
import BookContextProdvider from './context/BookContext';
import NavBar from './components/Navbar';
import BookList from './components/BookList';
import NewBookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextProdvider>
        <NavBar />
        <BookList />
        <NewBookForm />
      </BookContextProdvider>
    </div>
  );
}

export default App;
