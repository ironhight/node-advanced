import mongoose from 'mongoose';
import redis from 'redis';
import util from 'util';
import config from '../config';

const client = redis.createClient(config.CACHE);
const getAsync = util.promisify(client.hget);

const exec = mongoose.Query.prototype.exec;

type ICacheOptions = {
  key?: string;
};

mongoose.Query.prototype.cache = function (options: ICacheOptions = {}) {
  this.useCache = true;
  this.hashKey = JSON.stringify(options.key || '');

  return this;
};

mongoose.Query.prototype.exec = async function () {
  if (!this.useCache) {
    return exec.apply(this, arguments as any);
  }

  const key = JSON.stringify(
    Object.assign({}, this.getFilter(), {
      collection: this.mongooseCollection.name,
    }),
  );

  // See if we have a value for 'key' in redis
  const cacheValue = await getAsync(this.hashKey, key);

  // If we do, return that
  if (cacheValue) {
    const doc = JSON.parse(cacheValue);

    return Array.isArray(doc) ? doc.map((d) => new this.model(d)) : new this.model(doc);
  }

  // Otherwise, issue the query and store the result in redis
  const result = await exec.apply(this, arguments as any);

  client.hset(this.hashKey, key, JSON.stringify(result));
  client.expire(this.hashKey, 10);
  return result;
};

module.exports = {
  clearHash(hashKey: string) {
    client.del(JSON.stringify(hashKey));
  },
};
