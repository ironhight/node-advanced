import express from 'express'
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import bodyParser from 'body-parser';

import User from "./models/User"; 
import Blog from './models/Blog'
import config from './config'

mongoose.connect(config.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const app = express();

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
