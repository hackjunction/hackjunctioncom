'use strict';

/**
 * Onlineevent.js controller
 *
 * @description: A set of functions called "actions" for managing `Onlineevent`.
 */

module.exports = {

  /**
   * Retrieve onlineevent records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.onlineevent.search(ctx.query);
    } else {
      return strapi.services.onlineevent.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a onlineevent record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.onlineevent.fetch(ctx.params);
  },

  /**
   * Count onlineevent records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.onlineevent.count(ctx.query);
  },

  /**
   * Create a/an onlineevent record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.onlineevent.add(ctx.request.body);
  },

  /**
   * Update a/an onlineevent record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.onlineevent.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an onlineevent record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.onlineevent.remove(ctx.params);
  }
};
