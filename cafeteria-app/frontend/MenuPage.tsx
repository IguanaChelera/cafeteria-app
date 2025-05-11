import React, { useState } from "react";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Producto } from '../src/types';

// Organizamos los productos por categorías
const categorias = [
  {
    nombre: "JUGOS Y LICUADOS",
    productos: [
      {
        id: 1,
        name: "JUGO DE NARANJA",
        description: "Jugo natural de naranja",
        image: "/images/jugo-naranja.png",
        price: 35.0,
        quantity: 0,
      },
      {
        id: 2,
        name: "RELAJANTE",
        description: "Naranja, Fresa, Limón",
        image: "/images/licuado-relajante.png",
        price: 40.0,
        quantity: 0,
      },
      {
        id: 3,
        name: "ANTIOXIDANTE",
        description: "Naranja, Fresa, Cúrcuma",
        image: "/images/licuado-antioxidante.png",
        price: 40.0,
        quantity: 0,
      },
      {
        id: 4,
        name: "CONSCIENTE",
        description: "Naranja, Piña, Jengibre",
        image: "/images/licuado-consciente.png",
        price: 40.0,
        quantity: 0,
      },
      {
        id: 5,
        name: "DIGESTIVO",
        description: "Naranja, Papaya, Linaza",
        image: "/images/licuado-digestivo.png",
        price: 40.0,
        quantity: 0,
      },
      {
        id: 6,
        name: "D-TOX",
        description: "Naranja, Perejil, Pepino, Chía",
        image: "/images/licuado-detox.png",
        price: 40.0,
        quantity: 0,
      },
      {
        id: 7,
        name: "LICUADO BÁSICO",
        description: "Leche o leche de soya más fruta de temporada",
        image: "/images/licuado-basico.png",
        price: 35.0,
        quantity: 0,
      },
      {
        id: 8,
        name: "POSITIVO",
        description: "Fresa, Plátano, Cacahuate",
        image: "/images/licuado-positivo.png",
        price: 40.0,
        quantity: 0,
      },
      {
        id: 9,
        name: "AMIGABLE",
        description: "Fresa, Zarzamora, Chía, Amaranto",
        image: "/images/licuado-amigable.png",
        price: 40.0,
        quantity: 0,
      },
      {
        id: 10,
        name: "INTELECTUAL",
        description: "Papaya, Manzana, Almendra",
        image: "/images/licuado-intelectual.png",
        price: 40.0,
        quantity: 0,
      },
      {
        id: 11,
        name: "EFICIENTE",
        description: "Guayaba, Plátano, Sem. Girasol, Cereal",
        image: "/images/licuado-eficiente.png",
        price: 40.0,
        quantity: 0,
      },
      {
        id: 12,
        name: "PROTEÍNA EXTRA",
        description: "Agrega 21 gr de proteína",
        image: "/images/proteina.png",
        price: 25.0,
        quantity: 0,
      },
    ]
  },
  {
    nombre: "BEBIDAS",
    productos: [
      {
        id: 13,
        name: "CHOCOMILK",
        description: "Bebida de chocolate con leche",
        image: "/images/chocomilk.png",
        price: 25.0,
        quantity: 0,
      },
      {
        id: 14,
        name: "CAFÉ",
        description: "Café americano",
        image: "/images/cafe.png",
        price: 25.0,
        quantity: 0,
      },
      {
        id: 15,
        name: "TÉ",
        description: "Té de hierbas naturales",
        image: "/images/te.png",
        price: 20.0,
        quantity: 0,
      },
      {
        id: 16,
        name: "AGUA FRESCA CHICA",
        description: "Agua fresca de frutas",
        image: "/images/agua-fresca.png",
        price: 15.0,
        quantity: 0,
      },
      {
        id: 17,
        name: "AGUA FRESCA GRANDE",
        description: "Agua fresca de frutas",
        image: "/images/agua-fresca-grande.png",
        price: 28.0,
        quantity: 0,
      },
    ]
  },
  {
    nombre: "BOWLS - TODO EN UNO",
    productos: [
      {
        id: 18,
        name: "BOWL ALEGRÍA",
        description: "Fruta, Yogurt, Granola",
        image: "/images/bowl-alegria.png",
        price: 45.0,
        quantity: 0,
      },
      {
        id: 19,
        name: "BOWL ENERGÉTICO",
        description: "Avena, Quinoa, Fruta, Semillas",
        image: "/images/bowl-energetico.png",
        price: 50.0,
        quantity: 0,
      },
      {
        id: 20,
        name: "BOWL RESPONSABLE",
        description: "Arroz, Vegetales al Vapor",
        image: "/images/bowl-responsable.png",
        price: 60.0,
        quantity: 0,
      },
    ]
  },
  {
    nombre: "ENSALADAS",
    productos: [
      {
        id: 21,
        name: "ENSALADA MIXTA",
        description: "Mezcla de Lechugas, Manzana, Champiñones, Jitomate, Pepino, Zanahoria, Betabel",
        image: "/images/ensalada.png",
        price: 40.0,
        quantity: 0,
      },
    ]
  },
  {
    nombre: "TACOS",
    productos: [
      {
        id: 22,
        name: "TACO ASADA",
        description: "Taco de carne asada",
        image: "/images/taco-asada.png",
        price: 20.0,
        quantity: 0,
      },
      {
        id: 23,
        name: "TACO ADOBADA",
        description: "Taco de carne adobada",
        image: "/images/taco-adobada.png",
        price: 18.0,
        quantity: 0,
      },
    ]
  },
  {
    nombre: "BAGUETTES",
    productos: [
      {
        id: 24,
        name: "BAGUETTE MULTIGRANO",
        description: "Pechuga de pollo, Panela, Jamón con queso o atún",
        image: "/images/baguette.png",
        price: 55.0,
        quantity: 0,
      },
    ]
  },
  {
    nombre: "TORTAS",
    productos: [
      {
        id: 25,
        name: "TORTA BÁSICA",
        description: "Panela, Lomo natural, Lomo Adobado o Jamón con queso",
        image: "/images/torta-basica.png",
        price: 45.0,
        quantity: 0,
      },
      {
        id: 26,
        name: "TORTA HAWAIANA",
        description: "Lomo natural, Queso y Piña",
        image: "/images/torta-hawaiana.png",
        price: 55.0,
        quantity: 0,
      },
      {
        id: 27,
        name: "TORTA CUBANA",
        description: "Frijol, Lomo natural, Jamón y Queso",
        image: "/images/torta-cubana.png",
        price: 55.0,
        quantity: 0,
      },
    ]
  },
  {
    nombre: "HAMBURGUESAS",
    productos: [
      {
        id: 28,
        name: "HAMBURGUESA VEGETARIANA",
        description: "Pan de espinacas con queso y champiñones",
        image: "/images/hamburguesa-vegetariana.png",
        price: 55.0,
        quantity: 0,
      },
    ]
  },
  {
    nombre: "SÁNDWICHES",
    productos: [
      {
        id: 29,
        name: "SÁNDWICH MULTIGRANO",
        description: "Panela, Jamón con queso, Pollo",
        image: "/images/sandwich.png",
        price: 45.0,
        quantity: 0,
      },
    ]
  },
  {
    nombre: "MOLLETES",
    productos: [
      {
        id: 30,
        name: "MOLLETE CLÁSICO",
        description: "Pan telera, Frijol, Queso, Pico de gallo (1pza)",
        image: "/images/mollete-clasico.png",
        price: 25.0,
        quantity: 0,
      },
      {
        id: 31,
        name: "MOLLETE VEGANO",
        description: "Pan de espinaca, Hummus y Champiñón (1pza)",
        image: "/images/mollete-vegano.png",
        price: 40.0,
        quantity: 0,
      },
      {
        id: 32,
        name: "MOLLETE LIGHT",
        description: "Pan de espinaca, Panela, Pico de gallo (1pza)",
        image: "/images/mollete-light.png",
        price: 35.0,
        quantity: 0,
      },
    ]
  },
  {
    nombre: "QUESADILLAS",
    productos: [
      {
        id: 33,
        name: "QUESADILLA SENCILLA",
        description: "Quesadilla básica de queso",
        image: "/images/quesadilla-sencilla.png",
        price: 13.0,
        quantity: 0,
      },
      {
        id: 34,
        name: "QUESADILLA CON CHAMPIÑONES",
        description: "Quesadilla con queso y champiñones",
        image: "/images/quesadilla-champinones.png",
        price: 18.0,
        quantity: 0,
      },
    ]
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
      
      <div style={styles.listaCategorias}>
        {categorias.map((categoria) => (
          <div key={categoria.nombre} style={styles.categoria}>
            <h2 style={styles.tituloCategoria}>{categoria.nombre}</h2>
            <div style={styles.listaProductos}>
              {categoria.productos.map((producto) => (
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
    paddingBottom: "80px", // Espacio para el botón del carrito
  },
  encabezado: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  },
  icono: {
    marginRight: "8px",
    cursor: "pointer",
    fontSize: "20px",
  },
  titulo: {
    textAlign: "center",
    flex: 1,
    margin: 0,
    fontSize: "24px",
  },
  listaCategorias: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  },
  categoria: {
    marginBottom: "24px",
  },
  tituloCategoria: {
    borderBottom: "2px solid #4CAF50",
    paddingBottom: "8px",
    marginBottom: "16px",
    color: "#333",
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
    objectFit: "cover",
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
    whiteSpace: "nowrap",
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
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 100,
  },
};

export default MenuPage;