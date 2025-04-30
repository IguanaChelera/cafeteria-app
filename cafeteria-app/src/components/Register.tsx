import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

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
                    Crear Cuenta
                </h2>

                {/* Formulario */}
                <form className="space-y-6">
                    {/* Nombre completo */}
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-blue-600">
                            Nombre Completo
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            value={formData.fullName}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition-shadow duration-300 hover:shadow-lg"
                            placeholder="Juan Pérez"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-blue-600">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
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
                            value={formData.password}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition-shadow duration-300 hover:shadow-lg"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {/* Confirmar Contraseña */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-blue-600">
                            Confirmar Contraseña
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition-shadow duration-300 hover:shadow-lg"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {/* Botón */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 font-bold shadow-md hover:shadow-lg mt-8"
                    >
                        Registrarse
                    </button>
                </form>

                {/* Enlace */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    ¿Ya tienes cuenta?{' '}
                    <a href="/login" className="text-blue-700 hover:underline font-medium transition-colors duration-300 hover:text-purple-600">
                        Inicia Sesión
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;