import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import connectDB from './config/db.js'; // Ligar ao MongoDB

// Importar rotas
import authRoutes from './routes/authRoutes.js';
import apiRoutes from './routes/apiRoutes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Conexão à base de dados
connectDB();

// Rota inicial (teste rápido)
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
app.use('/api', apiRoutes);
app.use('/api/auth', authRoutes);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
