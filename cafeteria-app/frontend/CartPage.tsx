import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaUtensils } from 'react-icons/fa';
import axios from 'axios';
import { Producto } from '../src/types';

interface CartPageProps {
  cartItems: Producto[];
  setCartItems: React.Dispatch<React.SetStateAction<Producto[]>>;
}

const CartPage: React.FC<CartPageProps> = ({ cartItems, setCartItems }) => {
  const [total, setTotal] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const calculateTotal = () => {
      const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      setTotal(totalAmount);
    };

    calculateTotal();
  }, [cartItems]);

  const handleRemoveItem = (uniqueId: number | undefined) => {
    if (!uniqueId) return;
    const updatedCart = cartItems.filter((item) => item.uniqueId !== uniqueId);
    setCartItems(updatedCart);
  };

  const handleGoToMenu = () => {
    navigate('/menu');
  };

  const handlePurchase = async () => {
    try {
      const purchaseData = cartItems.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      }));

      await axios.post('http://localhost:4000/sales', {
        items: purchaseData,
        total,
      });

      setCartItems([]);
      setTotal(0);
      alert('Compra realizada con éxito');
    } catch (error) {
      console.error('Error al realizar la compra:', error);
      alert('Hubo un error al realizar la compra');
    }
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Carrito de compras</h1>

      <div>
        {cartItems.map((item) => (
          <div key={`${item.id}-${item.uniqueId}`} className="cart-item">
            <div className="flex items-center">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
              )}
              <div className="cart-item-details">
                <h2 className="cart-item-name">{item.name}</h2>
                <p className="cart-item-info">Cantidad: {item.quantity}</p>
                <p className="cart-item-info">Precio: ${item.price.toFixed(2)}</p>
                <p className="cart-item-info">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleRemoveItem(item.uniqueId)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash size={20} />
            </button>
          </div>
        ))}
      </div>

      <div className="cart-total">Total: ${total.toFixed(2)}</div>

      <div className="cart-actions">
        <button
          onClick={handleGoToMenu}
          className="cart-button cart-button-back"
        >
          <FaUtensils className="mr-2" /> Regresar al menú
        </button>
        {cartItems.length > 0 && (
          <>
            <button
              onClick={() => setCartItems([])}
              className="cart-button cart-button-clear"
            >
              Vaciar carrito
            </button>
            <button
              onClick={handlePurchase}
              className="cart-button cart-button-purchase"
            >
              Comprar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;