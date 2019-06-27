'use strict';

/**
 * Newsletter.js controller
 *
 * @description: A set of functions called "actions" for managing `Newsletter`.
 */

const axios = require('axios');
const validate = require('./validate');

const ADD_TO_LIST_ENDPOINT = (list_id, recipient_id) =>
  `https://api.sendgrid.com/v3/contactdb/lists/${list_id}/recipients/${recipient_id}`;
const ADD_RECIPIENT_ENDPOINT = 'https://api.sendgrid.com/v3/contactdb/recipients';

module.exports = {
  create: async (ctx, res) => {
    const { email, country } = ctx.request.body;

    if (!validate(country, email)) {
      return ctx.send({
        message: 'Validation error'
      });
    }

    return axios
      .post(
        ADD_RECIPIENT_ENDPOINT,
        [
          {
            email: ctx.request.body.email,
            country: ctx.request.body.country
          }
        ],
        {
          timeout: 1000,
          headers: {
            Authorization: 'Bearer ' + strapi.config.currentEnvironment.sendgridApiKey,
            'Content-Type': 'application/json'
          }
        }
      )
      .then(res => {
        if (Array.isArray(res.data.persisted_recipients) && res.data.persisted_recipients.length > 0) {
          const recipientID = res.data.persisted_recipients[0];
          const listID = strapi.config.currentEnvironment.sendgridEmailList; //7150117 Junction Newsletter recipients 2019
          return axios.post(
            ADD_TO_LIST_ENDPOINT(listID, recipientID),
            {},
            {
              timeout: 1000,
              headers: {
                Authorization: 'Bearer ' + strapi.config.currentEnvironment.sendgridApiKey,
                'Content-Type': 'application/json'
              }
            }
          );
        }
        return Promise.resolve();
      })
      .then(res => {
        ctx.send({
          message: 'success'
        });
      })
      .catch(err => {
        console.log('/api/newsletters: SG ERR ADDING CONTACT', err.response.data);
        ctx.send({
          message: 'error'
        });
      });
  }
};
