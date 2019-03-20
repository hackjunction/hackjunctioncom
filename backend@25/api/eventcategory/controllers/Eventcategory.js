'use strict';

/**
 * Eventcategory.js controller
 *
 * @description: A set of functions called "actions" for managing `Eventcategory`.
 */

module.exports = {

  /**
   * Retrieve eventcategory records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.eventcategory.search(ctx.query);
    } else {
      return strapi.services.eventcategory.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a eventcategory record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.eventcategory.fetch(ctx.params);
  },

  /**
   * Count eventcategory records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.eventcategory.count(ctx.query);
  },

  /**
   * Create a/an eventcategory record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.eventcategory.add(ctx.request.body);
  },

  /**
   * Update a/an eventcategory record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.eventcategory.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an eventcategory record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.eventcategory.remove(ctx.params);
  }
};
