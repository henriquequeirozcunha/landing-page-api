"use strict";

const axios = require("axios");
const netlifyWebHook = strapi.config.get("custom.netlifyWebHook");

module.exports = {
  /**
   * Triggered before user creation.
   */
  lifecycles: {
    async afterCreate(_, __) {
      netlifyWebHook && axios.post(netlifyWebHook);
    },
    async afterUpdate(_, __, ___) {
      netlifyWebHook && axios.post(netlifyWebHook);
    },
  },
};
