import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUtensils, faShoppingCart, faPhone } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-between bg-white p-6 relative">
            {/* Botón flotante centrado abajo para regresar al login */}
            <button
                className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:bg-blue-600 transition z-50"
                onClick={() => navigate('/')}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
                Volver
            </button>
            {/* Header */}
            <header className="text-center w-full relative">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">TecFood</h1>
                <img 
                    src="/TecNM-logort.png" 
                    alt="Logo" 
                    className="w-20 h-20 rounded-full mx-auto"
                />
            </header>

            {/* Welcome Text */}
            <p className="text-xl text-gray-600 mt-6">Bienvenido</p>

            {/* Buttons */}
            <div className="mt-8 space-y-4 w-full max-w-xs">
                <Link to="/menu" className="block w-full bg-blue-500 text-white py-3 rounded-lg text-center font-medium shadow-md hover:bg-blue-600 transition">
                    Menú <FontAwesomeIcon icon={faUtensils} className="ml-2" />
                </Link>
                <Link to="/cart" className="block w-full bg-blue-500 text-white py-3 rounded-lg text-center font-medium shadow-md hover:bg-blue-600 transition">
                    Carrito <FontAwesomeIcon icon={faShoppingCart} className="ml-2" />
                </Link>
                <Link to="/contact" className="block w-full bg-blue-500 text-white py-3 rounded-lg text-center font-medium shadow-md hover:bg-blue-600 transition">
                    Contacto <FontAwesomeIcon icon={faPhone} className="ml-2" />
                </Link>
            </div>

            {/* Footer */}
            <footer className="mt-8 text-sm text-gray-500">
                © 2024 TecFood. Todos los derechos reservados.
            </footer>
        </div>
    );
};

export default Home;