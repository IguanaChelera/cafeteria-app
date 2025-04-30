import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faShoppingCart, faPhone } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-between bg-white p-6">
            {/* Header */}
            <header className="text-center">
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