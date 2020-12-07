import * as dotenv from 'dotenv';
import path from 'path';

const test = dotenv.config({
  path: path.resolve(__dirname, './envs/' + (process.env.NODE_ENV as string) + '.env'),
});
console.log('🚀 ~ file: index.ts ~ line 7 ~ test', test);

const config = {
  NODE_ENV: process.env.NODE_ENV,
  MONGO_URL: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/blog_dev',
  CACHE: process.env.CACHE || 'redis://127.0.0.1:6379',
  PORT: process.env.PORT || 5000,
};

export = config;
