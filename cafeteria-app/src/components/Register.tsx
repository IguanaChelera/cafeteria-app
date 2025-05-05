import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeePYOD6E1bl8dHslfj4B4YzPqbgDzQeo",
  authDomain: "cafeteria-app-85c15.firebaseapp.com",
  projectId: "cafeteria-app-85c15",
  storageBucket: "cafeteria-app-85c15.firebasestorage.app",
  messagingSenderId: "791444604779",
  appId: "1:791444604779:web:dcf06b2cda2faa5217ae2e",
  measurementId: "G-YGFD7S7MQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (formData.password !== formData.confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            setSuccess("Usuario registrado exitosamente");
        } catch (err) {
            console.error("Error al registrar el usuario:", err); // Agregar log para depuración
            const errorMessage = (err as { message: string }).message || "Error desconocido";
            setError("Error al registrar el usuario: " + errorMessage);
        }
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
                    Crear Cuenta
                </h2>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nombre completo */}
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-blue-600">
                            Nombre Completo
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition-shadow duration-300 hover:shadow-lg"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {/* Mensajes de error y éxito */}
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {success && <p className="text-green-500 text-sm">{success}</p>}

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
                    <a href="/" className="text-blue-700 hover:underline font-medium transition-colors duration-300 hover:text-purple-600">
                        Inicia Sesión
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register; // Asegurarse de que el componente Register esté exportado como default