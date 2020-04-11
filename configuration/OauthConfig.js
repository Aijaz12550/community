let ClientOAuth2 = require("client-oauth2");


export let OauthConfig = new ClientOAuth2({
  clientId: 'talktivaApp',
  clientSecret: "talk@Tiva!1",
  accessTokenUri: "https://devapp.talktiva.com/uaa/oauth/token",
  redirectUri:"http://localhost:3000",
  scopes: ["email", "name"],
});
