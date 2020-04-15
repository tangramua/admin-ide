
# How to setup custom OAuth2 provider
1. On Extensions page(https://manage.auth0.com/#/extensions) click on "Custom Social Connections"
2. Click after redirect on *Webtask* page click on "New Connection"
3. Fill inputs
- Client ID: *[value from Gitlab OAuth application settings]*
- Client Secret: *[value from Gitlab OAuth application settings]*
- Authorization URL: ***https://gitlab.com/oauth/authorize***
- Token URL: ***https://gitlab.com/oauth/authorize***
- Scope: ***api***
- Fetch User Profile Script:
```
function(accessToken, ctx, cb) {
  request.get(
	  'https://gitlab.com/api/v4/user?access_token=' + accessToken, 
	  {}, 
	  function(e, r, b){
	    undefined
	    if (e) return cb(e);
	    if (r.statusCode !== 200) return cb(new Error('StatusCode: ' + r.statusCode));
	    var profile = JSON.parse(b);
	    console.log(profile, accessToken)
	    profile.user_id = profile.uuid;
	    cb(null, profile);
  });
}```