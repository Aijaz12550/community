let ClientOAuth2 = require("client-oauth2");


export let OauthConfig = new ClientOAuth2({
  clientId: process.env.OAUTH_CLIENT_ID,
  clientSecret: process.env.OAUTH_CLIENT_SECRET,
  accessTokenUri: process.env.OAUTH_TOKEN_URL,
  redirectUri:process.env.OAUTH_REDIRECT_URL,
  scopes: ["email", "name"],
});
