'use strict';

/**
 * Socialmedia.js controller
 *
 * @description: A set of functions called "actions" for managing `Socialmedia`.
 */

module.exports = {

  /**
   * Retrieve socialmedia records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.socialmedia.search(ctx.query);
    } else {
      return strapi.services.socialmedia.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a socialmedia record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.socialmedia.fetch(ctx.params);
  },

  /**
   * Count socialmedia records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.socialmedia.count(ctx.query);
  },

  /**
   * Create a/an socialmedia record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.socialmedia.add(ctx.request.body);
  },

  /**
   * Update a/an socialmedia record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.socialmedia.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an socialmedia record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.socialmedia.remove(ctx.params);
  }
};
