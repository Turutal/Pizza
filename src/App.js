import { Routes, Route } from 'react-router-dom';
import { createContext } from 'react';

import './scss/app.scss';
import MainLayout from './layouts/main-layout';
import Home from './pages/home';
import NotFound from './pages/not-found';
import Cart from './pages/cart';
import PizzaDescr from './components/pizza-descr';

export const SearchContext = createContext();

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<PizzaDescr />} />
        <Route path="*" element={<NotFound />} />{' '}
      </Route>
    </Routes>
  );
}

export default App;
