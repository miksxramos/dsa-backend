import Notification from '../models/Notification.js';

export const createNotification = async (req, res) => {
  try {
    const notification = new Notification(req.body);
    const saved = await notification.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getUserNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.params.userId });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
