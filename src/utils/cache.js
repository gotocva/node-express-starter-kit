/**
 * Cache system
 */
class Cache {

    cacheIndex = {};

    /**
     * 
     * @param {*} key 
     * @param {*} value 
     */
    store(key, value) {
        this.cacheIndex[key] = value;
    }

    /**
     * 
     * @param {*} key 
     * @returns 
     */
    get(key) {
        return this.cacheIndex[key] ? this.cacheIndex[key] : undefined;
    }

    /**
     * 
     * @param {*} key 
     */
    destroy(key) {
        this.cacheIndex[key] = undefined;
    }

    /**
     * clear all cache
     */
    clearCache() {
        this.cacheIndex = {};
    }
}


module.exports = new Cache();