import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Products from './Pages/Products/Product';
const Products=React.lazy(()=>import('./Pages/Products/Product'));
const Productlist=React.lazy(()=>import('./Pages/Productlist/Productlist'))

function App() {
  const route = (
    <Routes>
      <Route path="/productlist" element={<React.Suspense fallback='loading...'><Productlist /></React.Suspense>}></Route>
      <Route path="/products" element={<React.Suspense fallback='logading...'><Products /></React.Suspense>}></Route>
    </Routes>
  );
  return (
    <div className="App">
    <BrowserRouter>{route}</BrowserRouter>
    </div>
  );
}

export default App;
