'use strict';

/**
 * Newsstory.js controller
 *
 * @description: A set of functions called "actions" for managing `Newsstory`.
 */

module.exports = {

  /**
   * Retrieve newsstory records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.newsstory.search(ctx.query);
    } else {
      return strapi.services.newsstory.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a newsstory record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.newsstory.fetch(ctx.params);
  },

  /**
   * Count newsstory records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.newsstory.count(ctx.query);
  },

  /**
   * Create a/an newsstory record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.newsstory.add(ctx.request.body);
  },

  /**
   * Update a/an newsstory record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.newsstory.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an newsstory record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.newsstory.remove(ctx.params);
  }
};
