import { clearHash } from '../services/cache';
import { IObject } from '../common/interfaces/common';

module.exports = async (req: IObject<any>, res: IObject<any>, next: any) => {
  await next();

  clearHash(req.user.id);
};
