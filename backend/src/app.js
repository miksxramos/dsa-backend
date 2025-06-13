// src/app.js
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import apiRoutes from './routes/apiRoutes.js';

const app = express(); // ⬅️ IMPORTANTE: precisa vir antes de usar app.*

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, {
  auth: {
    username: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD
  },
  authSource: "auth_db",
  retryWrites: true,
  w: "majority"
})
.then(() => console.log('Conectado ao MongoDB com sucesso!'))
.catch(err => {
  console.error('Erro na conexão com MongoDB:', err.message);
});

// Rota de boas-vindas
app.get('/', (req, res) => {
  res.json({
    message: 'Bem-vindo à API de autenticação',
    endpoints: {
      register: 'POST /api/auth/register',
      login: 'POST /api/auth/login'
    }
  });
});

// Rotas da aplicação
app.use('/api', apiRoutes);        // rotas gerais da API
app.use('/api/auth', authRoutes);  // rotas de autenticação

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
