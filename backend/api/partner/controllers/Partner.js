'use strict';

/**
 * Partner.js controller
 *
 * @description: A set of functions called "actions" for managing `Partner`.
 */

module.exports = {

  /**
   * Retrieve partner records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.partner.search(ctx.query);
    } else {
      return strapi.services.partner.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a partner record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.partner.fetch(ctx.params);
  },

  /**
   * Count partner records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.partner.count(ctx.query);
  },

  /**
   * Create a/an partner record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.partner.add(ctx.request.body);
  },

  /**
   * Update a/an partner record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.partner.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an partner record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.partner.remove(ctx.params);
  }
};
