import { Schema, model } from 'mongoose';
import { IBlogModel } from '../common/interfaces/model';

const BlogSchema = new Schema({
  title: String,
  content: String,
  imageUrl: String,
  createdAt: { type: Date, default: Date.now },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

export default model<IBlogModel>('Blog', BlogSchema);
