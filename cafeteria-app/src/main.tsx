import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import CartPage from '../frontend/CartPage';
import { createBrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

// Elimino la definición de la ruta duplicada
// const router = createBrowserRouter([
//   {
//     path: '/cart',
//     element: <CartPage />,
//   },
// ]);
