import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
  user1Id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  user2Id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  matchedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
});

const Match = mongoose.model('Match', matchSchema);
export default Match;
