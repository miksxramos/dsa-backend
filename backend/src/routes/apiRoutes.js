// src/routes/apiRoutes.js
import express from 'express';
const router = express.Router();

// Sub-rotas reais
import messageRoutes from './messageRoutes.js';
import notificationRoutes from './notificationRoutes.js';
import scheduleRoutes from './scheduleRoutes.js';

// 🔁 Usa as rotas reais com Mongoose
router.use('/messages', messageRoutes);
router.use('/notifications', notificationRoutes);
router.use('/schedules', scheduleRoutes);

// Rotas adicionais (mantidas por ti — podem usar lógica real depois)

// GET /api/user/me
router.get('/user/me', (req, res) => {
  // Isto deverá ser substituído por autenticação real em breve
  res.json({
    id: 1,
    name: 'João',
    email: 'joao@example.com',
    tipo: 'jogador',
    location: { lat: 1, lng: 1 }
  });
});

// POST /api/match
router.post('/match', (req, res) => {
  // Matchmaking mockado
  res.json({ match: { name: 'Jogador Aleatório', id: 99 } });
});

// GET /api/users/nearby
router.get('/users/nearby', (req, res) => {
  // Substituir com lógica geográfica real
  res.json([
    {
      id: 1,
      name: 'João',
      email: 'joao@example.com',
      tipo: 'jogador',
      location: { lat: 1, lng: 1 }
    }
  ]);
});

export default router;
