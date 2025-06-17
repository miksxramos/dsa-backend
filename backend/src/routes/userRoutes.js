// src/routes/userRoutes.js
import express from 'express';
import { getUserById } from '../controllers/userController.js';

const router = express.Router();

router.get('/:id', getUserById); // rota GET /api/users/:id

export default router;
