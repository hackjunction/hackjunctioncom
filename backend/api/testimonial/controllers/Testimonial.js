'use strict';

/**
 * Testimonial.js controller
 *
 * @description: A set of functions called "actions" for managing `Testimonial`.
 */

module.exports = {

  /**
   * Retrieve testimonial records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.testimonial.search(ctx.query);
    } else {
      return strapi.services.testimonial.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a testimonial record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.testimonial.fetch(ctx.params);
  },

  /**
   * Count testimonial records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.testimonial.count(ctx.query);
  },

  /**
   * Create a/an testimonial record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.testimonial.add(ctx.request.body);
  },

  /**
   * Update a/an testimonial record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.testimonial.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an testimonial record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.testimonial.remove(ctx.params);
  }
};
