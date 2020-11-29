declare module 'mongoose' {
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
