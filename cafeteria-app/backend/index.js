import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import admin from 'firebase-admin';
import fs from 'fs';

const serviceAccount = JSON.parse(fs.readFileSync('./cafeteria-app-85c15-firebase-adminsdk-fbsvc-41e99c8852.json', 'utf8')); // Leer el archivo JSON manualmente

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Inicializar Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente. Usa /register o /login para interactuar con la API.');
});

// Register endpoint (GET)
app.get('/register', (req, res) => {
  res.send('Este es el endpoint de registro. Usa una herramienta como Postman para enviar una solicitud POST con los datos necesarios.');
});

// Register endpoint (POST)
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ error: 'Email already exists or invalid data' });
  }
});

// Login endpoint (GET)
app.get('/login', (req, res) => {
  res.send('Este es el endpoint de inicio de sesión. Usa una herramienta como Postman para enviar una solicitud POST con los datos necesarios.');
});

// Login endpoint (POST)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar usuario en Firebase Authentication
    const userRecord = await admin.auth().getUserByEmail(email);

    if (!userRecord) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Aquí puedes agregar lógica adicional para verificar la contraseña si es necesario
    res.status(200).json({ message: 'Login successful', user: userRecord });
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});