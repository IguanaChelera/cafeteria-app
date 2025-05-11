import React, { useState } from "react";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Producto } from '../src/types';

const productos: Producto[] = [
  {
    id: 1,
    name: 'Tacos',
    description: 'Tacos deliciosos con carne y salsa',
    image: '/images/tacos.png',
    price: 10.0,
    quantity: 0, // Agrego la propiedad quantity con valor inicial
  },
  {
    id: 2,
    name: 'Burritos',
    description: 'Burritos rellenos de frijoles y queso',
    image: '/images/burritos.png',
    price: 12.0,
    quantity: 0, // Agrego la propiedad quantity con valor inicial
  },
  {
    id: 3,
    name: 'Enchiladas',
    description: 'Enchiladas bañadas en salsa roja',
    image: '/images/enchiladas.png',
    price: 15.0,
    quantity: 0, // Agrego la propiedad quantity con valor inicial
  },
];

const MenuPage: React.FC<{ agregarAlCarrito: (producto: Producto) => void }> = ({ agregarAlCarrito }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/Home');
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  return (
    <div style={styles.contenedor}>
      <header style={styles.encabezado}>
        <FaArrowLeft style={styles.icono} onClick={handleBack} />
        <h1 style={styles.titulo}>Menú</h1>
      </header>
      <div style={styles.listaProductos}>
        {productos.map((producto) => (
          <div key={producto.id} style={styles.card}>
            <img src={producto.image} alt={producto.name} style={styles.imagen} />
            <div style={styles.info}>
              <h3>{producto.name}</h3>
              <p>{producto.description}</p>
              <p style={styles.precio}>${producto.price.toFixed(2)}</p>
            </div>
            <button
              style={styles.botonAgregar}
              onClick={() => agregarAlCarrito(producto)}
            >
              Agregar
            </button>
          </div>
        ))}
      </div>
      <button style={styles.botonCarrito} onClick={handleGoToCart}>
        <FaShoppingCart /> Ir al carrito
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  contenedor: {
    padding: "16px",
  },
  encabezado: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  },
  icono: {
    marginRight: "8px",
    cursor: "pointer",
  },
  titulo: {
    textAlign: "center",
    flex: 1,
  },
  listaProductos: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  imagen: {
    width: "100px",
    height: "100px",
    borderRadius: "8px",
    marginRight: "16px",
  },
  info: {
    flex: 1,
    color: "#000",
  },
  precio: {
    color: "#000",
    fontWeight: "bold",
    marginTop: "4px",
  },
  botonAgregar: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  botonCarrito: {
    position: "fixed",
    bottom: "16px",
    right: "16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
  },
};

export default MenuPage;