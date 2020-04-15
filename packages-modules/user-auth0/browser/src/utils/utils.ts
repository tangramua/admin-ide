import * as R from 'ramda';
// import atob from 'atob';
// const store = require('store');

// export const getIdToken = () => {
//   const idToken = store.get('id_token');
//   if (!idToken) {
//     throw new Error('No id token found');
//   }
//   return idToken;
// };

// export const getAccessToken = () => {
//   const accessToken = store.get('access_token');
//   if (!accessToken) {
//     throw new Error('No access token found');
//   }
//   return accessToken;
// };

// export const getClaimFromToken = (token, claim) => {
//   var payload = token.split('.')[1];
//   var bin = atob(payload);
//   var obj = JSON.parse(bin);
//   return obj[claim];
// };


export const convertQueryStrToObj = R.curry(queryStr => {
  // i.e. ?pathname=checkout&somethingelse=x
  // returns {pathname: 'checkout', somethingelse: 'x'}
  if (R.isNil(queryStr)) { return; }
  return R.compose(R.fromPairs, R.map(R.split('=')), R.split('&'), R.replace('?', ''))(queryStr);
});

