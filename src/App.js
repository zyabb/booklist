import React from 'react';
import BookContextProdvider from './context/BookContext';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BookContextProdvider>
        <NavBar />
      </BookContextProdvider>
    </div>
  );
}

export default App;
