import mongoose from 'mongoose';
import * as requireLogin from '../middlewares/requestLogin';
import * as cleanCache from '../middlewares/requestLogin';
import { IObject } from '../common/interfaces/common';
import Blog from '../models/Blog';

module.exports = (app: IObject<any>) => {
  app.get('/api/blogs/:id', requireLogin, async (req: any, res: any) => {
    const blog = await Blog.findOne({
      _user: req.user.id,
      _id: req.params.id,
    });

    res.send(blog);
  });

  app.get('/api/blogs', requireLogin, async (req: any, res: any) => {
    const blogs = await Blog.find({ _user: req.user.id }).cache({
      key: req.user.id,
    });

    res.send(blogs);
  });

  app.post('/api/blogs', requireLogin, cleanCache, async (req: any, res: any) => {
    const { title, content, imageUrl } = req.body;

    const blog = new Blog({
      imageUrl,
      title,
      content,
      _user: req.user.id,
    });

    try {
      await blog.save();
      res.send(blog);
    } catch (err) {
      res.send(400, err);
    }
  });
};
