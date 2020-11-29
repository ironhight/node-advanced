import passport from 'passport';
import { IObject } from '../common/interfaces/common';

module.exports = (app: IObject<any>) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }),
  );

  app.get('/auth/google/callback', passport.authenticate('google'), (req: any, res: any) => {
    res.redirect('/blogs');
  });

  app.get('/auth/logout', (req: any, res: any) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req: any, res: any) => {
    res.send(req.user);
  });
};
