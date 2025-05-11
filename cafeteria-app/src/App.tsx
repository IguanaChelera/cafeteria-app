import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.tsx';
import Login from './components/Login.tsx';
import Register from './components/Register.tsx';
import MenuPage from '../frontend/MenuPage.tsx';
import CartPage from '../frontend/CartPage.tsx';
import { Producto } from './types';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<Producto[]>([]);

  const agregarAlCarrito = (producto: Producto) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === producto.id);
      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === producto.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...producto, uniqueId: Date.now(), quantity: 1 }];
      }
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/menu" element={<MenuPage agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
    </Router>
  );
};

export default App;