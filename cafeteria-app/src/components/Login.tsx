import { useState } from "react";
import React from "react"; // Import necesario para los tipos de React

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Especificar el tipo de 'e'
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
        // Aquí iría la lógica para autenticar
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-blue-500 to-purple-600">
            <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                {/* Imagen */}
                <div className="flex justify-center mb-6">
                    <img 
                        src="/TecNM-logort.png"
                        alt="Logo"
                        style={{ width: '80px', height: '80px' }}
                        className="object-contain hover:rotate-6 transition-transform duration-300 shadow-lg rounded-full"
                    />
                </div>

                {/* Título */}
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                    ¡Bienvenido de Nuevo!
                </h2>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email */}
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

                    {/* Contraseña */}
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

                    {/* Botón */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 font-bold shadow-md hover:shadow-lg"
                    >
                        Iniciar Sesión
                    </button>
                </form>

                {/* Enlace */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    ¿No tienes cuenta?{' '}
                    <a href="/register" className="text-blue-700 hover:underline font-medium transition-colors duration-300 hover:text-purple-600">
                        Regístrate aquí
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
