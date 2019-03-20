'use strict';

/**
 * Media.js controller
 *
 * @description: A set of functions called "actions" for managing `Media`.
 */

module.exports = {

  /**
   * Retrieve media records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.media.search(ctx.query);
    } else {
      return strapi.services.media.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a media record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.media.fetch(ctx.params);
  },

  /**
   * Count media records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.media.count(ctx.query);
  },

  /**
   * Create a/an media record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.media.add(ctx.request.body);
  },

  /**
   * Update a/an media record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.media.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an media record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.media.remove(ctx.params);
  }
};
