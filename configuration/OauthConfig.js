let ClientOAuth2 = require("client-oauth2");

let credentials = {
  clientId: process.env.OAUTH_CLIENT_ID,
  clientSecret: process.env.OAUTH_CLIENT_SECRET,
  accessTokenUri: process.env.OAUTH_TOKEN_URL,
  redirectUri: process.env.OAUTH_REDIRECT_URL,
}

export const OauthConfig = (payload) => {
  return new ClientOAuth2({
    ...credentials,
    body: payload,
  }).owner.getToken();
};

export const Token = () => {
  return new ClientOAuth2({...credentials}).token()
}
