import Message from '../models/Message.js';

export const createMessage = async (req, res) => {
  try {
    const message = new Message(req.body);
    const saved = await message.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
