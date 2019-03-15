'use strict';

/**
 * Staticcontent.js controller
 *
 * @description: A set of functions called "actions" for managing `Staticcontent`.
 */

module.exports = {

  /**
   * Retrieve staticcontent records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.staticcontent.search(ctx.query);
    } else {
      return strapi.services.staticcontent.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a staticcontent record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.staticcontent.fetch(ctx.params);
  },

  /**
   * Count staticcontent records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.staticcontent.count(ctx.query);
  },

  /**
   * Create a/an staticcontent record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.staticcontent.add(ctx.request.body);
  },

  /**
   * Update a/an staticcontent record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.staticcontent.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an staticcontent record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.staticcontent.remove(ctx.params);
  }
};
