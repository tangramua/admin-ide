


https://auth0.com/docs/connections/calling-an-external-idp-api


Useful resource for rs256
--
https://auth0.com/blog/navigating-rs256-and-jwks/

https://github.com/qucode1/next-apollo-jobs



How to test IDP's access_token?
---

```
curl --request GET \
  --url 'https://<ACCOUNT>auth0.com/api/v2/users/<USER_ID>' \
  --data '{"grant_type": "client_credentials", "client_id": "<CLIENT_ID>", client_secret": "<CLIENT_SECRET>", "audience": "<AUDIENCE>"}' \
  --header 'authorization: Bearer <ACCESS_TOKEN of AUTH0>'
```
Get access_token with following 

```
curl --request POST \
  --url https://testworkbench.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"<CLIENT_ID>","client_secret":"<CLIENT_SECRET>","audience":"<AUDIENCE>","grant_type":"client_credentials"}'
```
response for access_token of auth0
```
{  
   "access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik9ERkVNelJGT0RCQk5EVXpNemswTURFeVJqZERRVE5GUlRWRlF6ZEdNakF6T1RFMVJFUXhSZyJ9.eyJpc3MiOiJodHRwczovL3Rlc3R3b3JrYmVuY2guYXV0aDAuYYwNTkyNywiYXpwIjoiTUV0MUNseTdvd0dGcVp2NFNxN0ppT0JQbUNGUFhsU0wiLCJzY29wZSI6InJlYWQ6Y2xpZW50X2dyYW50cyByZWFkOnVzZXJzIHJlYWQ6Y2xpZW50X2tleXMgY3JlYXRlOmNsaWVudF9rZXlzIHJlYWQ6dXNlcl929tLyIsInN1YiI6Ik1FdDFDbHk3b3dHRnFadjRTcTdKaU9CUG1DRlBYbFNMQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3Rlc3R3b3JrYmVuY2guYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE1MjU1MTk1MjcsImV4cCI6MTUdfgdfHBfdG9rZW5zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.YHEvPl1lR5tghhDNXpp-n-mnA_rT6oNJAOitwD4_3IRXcTkS8CUJfmeKvVzaofGQ4qIRmTxy33aCsZpKK82IycIjA5p3mqRKEcBnsqwe--kSqbAdzHCc40yewUHCNnuM8nKDU2JGo2XXpJPO5JApkylXx_JjHw0r4lGi0Na0loU9U6YnPPvpMm5Qar1kPucEGyZRdKWyNHbNrID4oOcqX_StThaoQWuwgVmn1CjUeTh-oIB1YpaUjC9HBFl2EJTZ4dSDCOssM4PJjdTuWTYNzjYxZdHeP7jWycRMYuBTUmKWjLos9RXLz2wQGi0c-ghzlIejk3UK19CGrfoCg3ehig",
   "scope":"read:client_grants read:users read:client_keys create:client_keys read:user_idp_tokens",
   "expires_in":86400,
   "token_type":"Bearer"
}
```

Get user profile details along with IdP's `access_token`

```
  curl --request GET \
  --url 'https://testworkbench.auth0.com/api/v2/users/google-oauth2|3423423423424' \
  --header 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik9ERkVNelJGT0RCQk5EVXpNemswTURFeVJqZERRVE5GUlRWRlF6ZEdNakF6T1RFMVJFUXhSZyJ9.eyJpc3MiOiJodHRwczovL3Rlc3R3b3JrYmVuY2guYXV0aDAuY29tLyIsInN1YiI6Ik1FdDFDbHk3b3dHRnFadjRTcTdKaU9CUG1DRlBYbFNMQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3Rlc3R3b3JrYmVuY2guYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE1MjUyOTI3MjEsImV4cCI6MTUyNTM3OTEyMSwiYXpwIjoiTUV0MUNseTdvd0dGcVp2NFNxN0ppT0JQbUNGUFhsU0wiLCJzY29wZSI6InJlYWQ6Y2xpZW50X2dyYW50cy23424zZXJzIHJlYWQ6Y2xpZW50X2tleXMgY3JlYXRlOmNsaWVudF9rZXlzIHJlYWQ6dXNlcl9pZHBfdG9rZW5zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.rZMzhxQ9AipW0_joWS9DgU1let6rUT8svnEUh7Y1h0Fq6VrenF-SD3cDQRNSBozNWzM9pCQOcFCrPbRbgthbmbPoEV0nujPRXz3boMqiJKX8jjVKzUqJNdlaEwrFUluhj4GeYGTmmmkNU9Kzki289iqh97R94xAASFXl0DggqD20sXi4Fv6HVKxvXOz3r1OBYNQcLDIgFaXDNqnlIOdC_Cl9HJUF7ve0P_q81S_bQRiZK_1URNizNwruczj8tquAbGd8sBfC9E1vXHy1v9_zKBjULhH4ssMpulKFLS0Z2pjG-5iWV4uxcLNpRM2ihZsP5Ls8ipQBNXlvt0b67nWgzg'
```


Response:
```
{  
   "email":"<email>@gmail.com",
   "email_verified":true,
   "name":"stac tom",
   "given_name":"stac",
   "family_name":"tom",
   "picture":"<picture_path>",
   "gender":"male",
   "locale":"en",
   "updated_at":"2018-04-29T13:21:44.680Z",
   "user_id":"<User_ID>",
   "nickname":"<nickname>",
   "identities":[  
      {  
         "provider":"google-oauth2",
         "access_token":"ya29.Gl2tBRVP3SvsdfNdclRN9VPEBSIwkP9LgOEO4XeZAG6whbzCvkZjSlPrxZMFc6okR5lwbbJAy-07RRT1-Ekw40ATSeWrcpKPpj5ieO8jItdrWZHspHv70wbG74",
         "expires_in":3600,
         "user_id":"<user_id>",
         "connection":"google-oauth2",
         "isSocial":true
      }
   ],
   "created_at":"2018-04-05T03:29:10.083Z",
   "last_ip":"<IP>",
   "last_login":"2018-04-29T13:21:44.680Z",
   "logins_count":129
}
```


Issues:
---
Opened issue with Auth0
https://community.auth0.com/t/idps-access-token-is-missing-in-the-profiles-response/11209

Auth Samples:
---
https://github.com/auth0-samples
Linking Accounts: https://github.com/auth0-samples/auth0-link-accounts-sample/tree/master/SPA
Revist to configure cookie
https://auth0.com/blog/ten-things-you-should-know-about-tokens-and-cookies/#token-expiration