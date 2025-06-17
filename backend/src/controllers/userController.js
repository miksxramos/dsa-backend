// src/controllers/userController.js
import User from '../models/User.js';

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'Utilizador não encontrado' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao obter utilizador', error: err.message });
  }
};
