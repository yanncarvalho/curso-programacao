/**
 * A class that implements a cache with TTL (Time to Live).
 * Data is stored temporarily and is automatically removed after the specified time or when it expires.
 */
class Cache {
    /**
     * Creates an instance of the Cache class with the specified TTL.
     * @param {number} ttl - The Time to Live (TTL) for the cache data in milliseconds.
     */
    constructor(ttl) {

      this._cache = new Map();

      this._CachedValue = class {
            _ttl = ttl;
            constructor(value) {
                this.expirationTime = Date.now() + this._ttl;
                this.value = value;
            }
      }
    }
  
    /**
     * Adds a value to the cache with a key and starts the TTL countdown.
     * The value will be automatically removed after the TTL expires.
     * @param {string} key - The key for the value to be stored.
     * @param {*} value - The value to be stored in the cache.
     */
    set(key, value) {
      this._cache.set(key, new this._CachedValue(value));
    }
  
    /**
     * Retrieves the value associated with a key.
     * If the value does not exist or the TTL has expired, it returns undefined.
     * @param {string} key - The key for which the value will be retrieved.
     * @returns {*} The value associated with the key, or undefined if the value does not exist or has expired.
     */
    get(key) {
      const cachedValue = this._cache.get(key);

      if (Date.now() > cachedValue?.expirationTime) {
        this._cache.delete(key); 
        return undefined;
      }
  
      return cachedValue?.value;
    }
  
    /**
     * Removes the value associated with a key from the cache.
     * @param {string} key - The key of the value to be removed.
     */
    remove(key) {
      this._cache.delete(key);
    }
  
    /**
     * Removes all values whose TTL has expired.
     */
    removeExpired() {
      const now = Date.now();
      for (const [key, cachedValue] of this._cache.entries()) {
        if (now > cachedValue.expirationTime) {
          this._cache.delete(key);
        }
      }
    }
  }
  
  module.exports = Cache;