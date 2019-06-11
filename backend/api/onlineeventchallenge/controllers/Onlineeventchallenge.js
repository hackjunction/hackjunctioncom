'use strict';

/**
 * Onlineeventchallenge.js controller
 *
 * @description: A set of functions called "actions" for managing `Onlineeventchallenge`.
 */

module.exports = {

  /**
   * Retrieve onlineeventchallenge records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.onlineeventchallenge.search(ctx.query);
    } else {
      return strapi.services.onlineeventchallenge.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a onlineeventchallenge record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.onlineeventchallenge.fetch(ctx.params);
  },

  /**
   * Count onlineeventchallenge records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.onlineeventchallenge.count(ctx.query);
  },

  /**
   * Create a/an onlineeventchallenge record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.onlineeventchallenge.add(ctx.request.body);
  },

  /**
   * Update a/an onlineeventchallenge record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.onlineeventchallenge.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an onlineeventchallenge record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.onlineeventchallenge.remove(ctx.params);
  }
};
