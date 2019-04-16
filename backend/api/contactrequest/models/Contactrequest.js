'use strict';

const htmlCreator = require('html-creator');
const sanitizeHtml = require('sanitize-html');


/**
 * Lifecycle callbacks for the `Contactrequest` model.
 */

module.exports = {
  // Before saving a value.
  // Fired before an `insert` or `update` query.
  // beforeSave: async (model) => {},

  // After saving a value.
  // Fired after an `insert` or `update` query.
  // afterSave: async (model, result) => {},

  // Before fetching all values.
  // Fired before a `fetchAll` operation.
  // beforeFetchAll: async (model) => {},

  // After fetching all values.
  // Fired after a `fetchAll` operation.
  // afterFetchAll: async (model, results) => {},

  // Fired before a `fetch` operation.
  // beforeFetch: async (model) => {},

  // After fetching a value.
  // Fired after a `fetch` operation.
  // afterFetch: async (model, result) => {},

  // Before creating a value.
  // Fired before an `insert` query.
  // beforeCreate: async (model) => {},

  // After creating a value.
  // Fired after an `insert` query.
  afterCreate: async (model, result) => {

    const name = sanitizeHtml(model.firstName + ' ' + model.lastName);
    const email = sanitizeHtml(model.email);
    const reason = sanitizeHtml(model.reason);
    const message = sanitizeHtml(model.message);

    const msg = new htmlCreator([
      {
        type: 'body',
        content: [
          {
            type: 'div',
            content: [
              {
                type: 'h4',
                content: 'Someone filled the contact form at hackjunction.com :--)',
              },
              {
                type: 'ul',
                content: [
                  {
                    type: 'li',
                    content: [
                      {
                        type: 'span',
                        content: [
                          {
                            type: 'strong',
                            content: 'Name: '
                          },
                          {
                            type: 'span',
                            content: name
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'li',
                    content: [
                      {
                        type: 'span',
                        content: [
                          {
                            type: 'strong',
                            content: 'Email: '
                          },
                          {
                            type: 'span',
                            content: email
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'li',
                    content: [
                      {
                        type: 'span',
                        content: [
                          {
                            type: 'strong',
                            content: 'Interested in: '
                          },
                          {
                            type: 'span',
                            content: reason
                          }
                        ]
                      }
                    ]
                  }
                ],
              },
              {
                type: 'h4',
                content: 'message: '
              },
              {
                type: 'p',
                content: '"' + message + '"'
              }
            ],
          },
        ],
      },
    ]);

    if (strapi.config.currentEnvironment.partnerFormEmail) {
      strapi.plugins['email'].services.email.send({
        to: strapi.config.currentEnvironment.partnerFormEmail,
        from: 'contact-form@hackjunction.com',
        replyTo: 'no-reply@hackjunction.com',
        subject: 'Hackjunction.com | Hello from ' + name,
        html: msg.renderHTML(),
      }).catch(e => {
        console.log('Partner email err', e);
      })
    }
  },

  // Before updating a value.
  // Fired before an `update` query.
  // beforeUpdate: async (model) => {},

  // After updating a value.
  // Fired after an `update` query.
  // afterUpdate: async (model, result) => {},

  // Before destroying a value.
  // Fired before a `delete` query.
  // beforeDestroy: async (model) => {},

  // After destroying a value.
  // Fired after a `delete` query.
  // afterDestroy: async (model, result) => {}
};
