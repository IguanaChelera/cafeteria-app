import React from "react";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const productos = [
  {
    id: 1,
    nombre: "Tacos",
    descripcion: "Tacos deliciosos con carne y salsa",
    imagen: "/images/tacos.png",
    precio: "$10.00",
  },
  {
    id: 2,
    nombre: "Burritos",
    descripcion: "Burritos rellenos de frijoles y queso",
    imagen: "/images/burritos.png",
    precio: "$12.00",
  },
  {
    id: 3,
    nombre: "Enchiladas",
    descripcion: "Enchiladas bañadas en salsa roja",
    imagen: "/images/enchiladas.png",
    precio: "$15.00",
  },
];

const ProductoCard = ({ producto, agregarAlCarrito }) => {
  return (
    <div style={styles.card}>
      <img src={producto.imagen} alt={producto.nombre} style={styles.imagen} />
      <div style={styles.info}>
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <p style={styles.precio}>{producto.precio}</p>
      </div>
      <button style={styles.botonAgregar} onClick={() => agregarAlCarrito(producto)}>
        Agregar
      </button>
    </div>
  );
};

const MenuPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/Home');
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  const agregarAlCarrito = (producto) => {
    console.log("Producto agregado:", producto);
  };

  return (
    <div style={styles.contenedor}>
      <header style={styles.encabezado}>
        <FaArrowLeft style={styles.icono} onClick={handleBack} />
        <h1 style={styles.titulo}>Menú</h1>
      </header>
      <div style={styles.listaProductos}>
        {productos.map((producto) => (
          <ProductoCard
            key={producto.id}
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
          />
        ))}
      </div>
      <button style={styles.botonCarrito} onClick={handleGoToCart}>
        <FaShoppingCart /> Ir al carrito
      </button>
    </div>
  );
};

const styles = {
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
    color: "#000", // Set text color to black
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