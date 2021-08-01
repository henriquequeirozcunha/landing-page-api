module.exports = ({ env }) => ({
  netlifyWebHook: env("NETLIFY_WEBHOOK"),
});
