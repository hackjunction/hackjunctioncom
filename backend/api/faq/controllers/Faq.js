'use strict';

/**
 * Faq.js controller
 *
 * @description: A set of functions called "actions" for managing `Faq`.
 */

module.exports = {

  /**
   * Retrieve faq records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.faq.search(ctx.query);
    } else {
      return strapi.services.faq.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a faq record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.faq.fetch(ctx.params);
  },

  /**
   * Count faq records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.faq.count(ctx.query);
  },

  /**
   * Create a/an faq record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.faq.add(ctx.request.body);
  },

  /**
   * Update a/an faq record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.faq.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an faq record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.faq.remove(ctx.params);
  }
};
