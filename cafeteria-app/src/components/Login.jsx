import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
        // Aquí iría la lógica para autenticar
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl flex flex-col items-center">
                
                {/* Logo */}
                <img 
                    src="/TecNM-logort.png"
                    alt="Logo"
                    className="h-24 w-auto object-contain hover:scale-105 transition-transform duration-200 shadow-lg rounded-lg mb-6"
                />

                {/* Título */}
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Iniciar Sesión
                </h2>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-5 w-full flex flex-col items-center">
                    {/* Email */}
                    <div className="w-full">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                            Usuario (Email)
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="ejemplo@escuela.com"
                            required
                        />
                    </div>

                    {/* Contraseña */}
                    <div className="w-full">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {/* Botón */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
                    >
                        Entrar
                    </button>
                </form>

                {/* Enlace */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    ¿No tienes cuenta?{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                        Regístrate aquí
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
