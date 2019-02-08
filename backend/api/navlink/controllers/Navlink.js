'use strict';

/**
 * Navlink.js controller
 *
 * @description: A set of functions called "actions" for managing `Navlink`.
 */

module.exports = {

  /**
   * Retrieve navlink records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.navlink.search(ctx.query);
    } else {
      return strapi.services.navlink.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a navlink record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.navlink.fetch(ctx.params);
  },

  /**
   * Count navlink records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.navlink.count(ctx.query);
  },

  /**
   * Create a/an navlink record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.navlink.add(ctx.request.body);
  },

  /**
   * Update a/an navlink record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.navlink.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an navlink record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.navlink.remove(ctx.params);
  }
};
