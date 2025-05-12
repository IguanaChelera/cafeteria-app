import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

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
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint para guardar una venta completa
app.post('/sales', async (req, res) => {
  const { items, total } = req.body; // Array de productos y total

  try {
    const sale = await prisma.sale.create({
      data: {
        total,
        items: {
          create: items.map((item) => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        },
      },
    });

    res.status(201).json(sale);
  } catch (error) {
    console.error('Error saving sale:', error);
    res.status(500).json({ error: 'Error saving sale' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});