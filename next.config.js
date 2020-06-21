const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const withOffline = require("next-offline");

module.exports = withOffline(
  withCSS(
    withSass({
      webpack(config, { dev }) {
        if (config.mode === "production") {
          if (Array.isArray(config.optimization.minimizer)) {
            config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
          }
        }
        return config;
      },
    })
  )
);

module.exports.env = {
  OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET: process.env.OAUTH_CLIENT_SECRET,
  OAUTH_TOKEN_URL: process.env.OAUTH_TOKEN_URL,
  OAUTH_GRANT_TYPE: process.env.OAUTH_GRANT_TYPE,
  OAUTH_AUTHORIZATION_KEY: process.env.OAUTH_AUTHORIZATION_KEY,
  OAUTH_REDIRECT_URL: process.env.OAUTH_REDIRECT_URL,
  API_BASE_URL: process.env.API_BASE_URL,
  API_BASE_URL_1: process.env.API_BASE_URL_1,
  EDITOR_KEY: process.env.EDITOR_KEY,
};
