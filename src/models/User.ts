import mongoose from 'mongoose';
import { IUserModel } from '../common/interfaces/model';
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  displayName: String,
});

const User = mongoose.model<IUserModel>('User', userSchema);
export = User;
