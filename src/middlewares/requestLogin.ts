import { IObject } from '../common/interfaces/common';

module.exports = (req: IObject<any>, res: IObject<any>, next: any) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!' });
  }

  next();
};
