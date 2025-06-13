import Schedule from '../models/Schedule.js';

export const createSchedule = async (req, res) => {
  try {
    const schedule = new Schedule(req.body);
    const saved = await schedule.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
