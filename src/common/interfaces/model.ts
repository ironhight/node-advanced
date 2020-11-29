import { AnyARecord } from 'dns';
import mongoose from 'mongoose';

interface IUser {
  title: string;
  content: string;
  imageUrl: string;
  createAt: Date;
  _user: string;
}

interface IBlog {
  googleId: string;
  displayName: string;
  cache: any;
}

export interface IUserModel extends IUser, mongoose.Document {}
export interface IBlogModel extends IBlog, mongoose.Document {}
