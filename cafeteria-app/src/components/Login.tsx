import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:4000/login", { email, password }); // Verificar que la URL sea correcta
            localStorage.setItem("token", response.data.token);
            navigate("/Home");
        } catch (err: any) {
            setError(err.response?.data?.error || "Error al iniciar sesión");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-blue-500 to-purple-600">
            <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-6">
                    <img 
                        src="/TecNM-logort.png"
                        alt="Logo"
                        style={{ width: '80px', height: '80px' }}
                        className="object-contain hover:rotate-6 transition-transform duration-300 shadow-lg rounded-full"
                    />
                </div>

                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                    ¡Bienvenido de Nuevo!
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-blue-600">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition-shadow duration-300 hover:shadow-lg"
                            placeholder="ejemplo@correo.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-blue-600">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition-shadow duration-300 hover:shadow-lg"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 font-bold shadow-md hover:shadow-lg"
                    >
                        Iniciar Sesión
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    ¿No tienes cuenta?{' '}
                    <a href="/Register" className="text-blue-700 hover:underline font-medium transition-colors duration-300 hover:text-purple-600">
                        Regístrate aquí
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
