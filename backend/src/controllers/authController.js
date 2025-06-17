import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const authController = {
  register: async (req, res) => {
  try {
    const { name, email, password, tipo } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'Email já está em uso' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      tipo
    });

    user.password = undefined; // não enviar de volta
    

    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email }).select('+password');
      if (!user) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      const token = jwt.sign(
        { id: user._id, tipo: user.tipo },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.json({ token, user: { id: user._id, name: user.name, email: user.email, tipo: user.tipo } });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default authController;
