const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const withOffline = require('next-offline')

// console.log('>>>>>>>>>>>>>>>>>>>>>>',process.env)
module.exports = withOffline(withCSS(
  withSass({
    webpack(config, { dev }) {
      if (config.mode === "production") {
        if (Array.isArray(config.optimization.minimizer)) {
          config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
        }
      }
      return config;
    }
  })
)
)
// exports.env = {
//   oauth_client_id : process.env.oauth_client_id,
//   oauth_client_secret: process.env.oauth_client_secret,
//   oauth_token_url: process.env.oauth_token_url,
//   oauth_grant_type: process.env.oauth_grant_type,
//   oauth_Authorization_key: process.env.oauth_Authorization_key,
//   oauth_redirect_url: process.env.oauth_redirect_url
// }