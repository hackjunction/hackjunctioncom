'use strict';

/**
 * Eventconcept.js controller
 *
 * @description: A set of functions called "actions" for managing `Eventconcept`.
 */

module.exports = {

  /**
   * Retrieve eventconcept records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.eventconcept.search(ctx.query);
    } else {
      return strapi.services.eventconcept.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a eventconcept record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.eventconcept.fetch(ctx.params);
  },

  /**
   * Count eventconcept records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.eventconcept.count(ctx.query);
  },

  /**
   * Create a/an eventconcept record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.eventconcept.add(ctx.request.body);
  },

  /**
   * Update a/an eventconcept record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.eventconcept.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an eventconcept record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.eventconcept.remove(ctx.params);
  }
};
