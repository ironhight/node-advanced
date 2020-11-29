import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  displayName: String,
});

const User = mongoose.model('User', userSchema);
export = User;
