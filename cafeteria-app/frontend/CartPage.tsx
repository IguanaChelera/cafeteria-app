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
      const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);
      setTotal(totalAmount);
    };

    calculateTotal();
  }, [cartItems]);

  const handleRemoveItem = (uniqueId: number | undefined) => {
    if (!uniqueId) return; // Verifica que el uniqueId exista
    const updatedCart = cartItems.filter((item) => item.uniqueId !== uniqueId);
    setCartItems(updatedCart);
  };

  const handleGoToMenu = () => {
    navigate('/menu');
  };

  const handlePurchase = async () => {
    try {
      const purchaseData = cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
      }));

      await axios.post('http://localhost:4000/sales', {
        items: purchaseData,
        total,
      });

      setCartItems([]); // Vaciar el carrito después de la compra
      setTotal(0);
      alert('Compra realizada con éxito');
    } catch (error) {
      console.error('Error al realizar la compra:', error);
      alert('Hubo un error al realizar la compra');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Carrito de compras</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-white shadow rounded-lg"
          >
            <div className="flex items-center">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded mr-4"
                />
              )}
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
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

      <div className="mt-6">
        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={handleGoToMenu}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <FaUtensils className="mr-2" /> Regresar al menú
        </button>
        <button
          onClick={() => setCartItems([])}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Vaciar carrito
        </button>
        <button
          onClick={handlePurchase}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default CartPage;