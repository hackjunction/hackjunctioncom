'use strict';

/**
 * Kpi.js controller
 *
 * @description: A set of functions called "actions" for managing `Kpi`.
 */

module.exports = {

  /**
   * Retrieve kpi records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.kpi.search(ctx.query);
    } else {
      return strapi.services.kpi.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a kpi record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.kpi.fetch(ctx.params);
  },

  /**
   * Count kpi records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.kpi.count(ctx.query);
  },

  /**
   * Create a/an kpi record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.kpi.add(ctx.request.body);
  },

  /**
   * Update a/an kpi record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.kpi.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an kpi record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.kpi.remove(ctx.params);
  }
};
