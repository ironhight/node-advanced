import mongoose from 'mongoose';
import { IBlogModel } from '../common/interfaces/model';

const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  content: String,
  imageUrl: String,
  createdAt: { type: Date, default: Date.now },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Blog = mongoose.model<IBlogModel>('Blog', blogSchema);
export = Blog;
