import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dateTime: { type: Date, required: true },
  description: { type: String }
});

const Schedule = mongoose.model('Schedule', scheduleSchema);
export default Schedule;
