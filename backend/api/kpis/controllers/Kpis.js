'use strict';

/**
 * Kpis.js controller
 *
 * @description: A set of functions called "actions" for managing `Kpis`.
 */

module.exports = {

  /**
   * Retrieve kpis records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.kpis.search(ctx.query);
    } else {
      return strapi.services.kpis.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a kpis record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.kpis.fetch(ctx.params);
  },

  /**
   * Count kpis records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.kpis.count(ctx.query);
  },

  /**
   * Create a/an kpis record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.kpis.add(ctx.request.body);
  },

  /**
   * Update a/an kpis record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.kpis.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an kpis record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.kpis.remove(ctx.params);
  }
};
