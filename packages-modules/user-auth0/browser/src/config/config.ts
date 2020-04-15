

export const config = {
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    APP_URL: process.env.CLIENT_URL,
    REDIRECT_URL: `${process.env.CLIENT_URL}/callback/`,
    AUTH0_API_AUDIENCE: process.env.AUTH0_API_AUDIENCE,
    AUTH0_REALM: process.env.AUTH0_REALM,
    AUTH0_TOKEN_GRANTED_TIME: process.env.AUTH0_TOKEN_GRANTED_TIME || 0,
};
