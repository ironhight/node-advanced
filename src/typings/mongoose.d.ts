import { IObject } from '../common/interfaces/common';

declare module 'mongoose' {
  interface DocumentQuery<T, DocType extends import('mongoose').Document, QueryHelpers = {}> {
    cache(T: IObject<any>): DocumentQuery<T[], Document> & QueryHelpers;
  }
  interface Query<T, DocType extends import('mongoose').Document, QueryHelpers = {}> {
    mongooseCollection: {
      name: any;
    };
    cache(): DocumentQuery<T[], Document> & QueryHelpers;
    useCache: boolean;
    hashKey: string;
    model: Model<T>;
  }
}
