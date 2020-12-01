import { Schema, model } from 'mongoose';
import { IUserModel } from '../common/interfaces/model';

const UserSchema = new Schema({
  googleId: String,
  displayName: String,
});

export default model<IUserModel>('User', UserSchema);
