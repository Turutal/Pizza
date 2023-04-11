import { Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';

import './scss/app.scss';
import Header from './components/header';
import Home from './pages/home';
import NotFound from './pages/not-found';
import Cart from './pages/cart';

export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
