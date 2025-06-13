import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  lat: Number,
  lng: Number,
  updatedAt: { type: Date, default: Date.now }
});

const Location = mongoose.model('Location', locationSchema);
export default Location;
