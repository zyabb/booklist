import React from 'react';
import BookContextProdvider from './context/BookContext';
import NavBar from './components/Navbar';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <BookContextProdvider>
        <NavBar />
        <BookList />
      </BookContextProdvider>
    </div>
  );
}

export default App;
