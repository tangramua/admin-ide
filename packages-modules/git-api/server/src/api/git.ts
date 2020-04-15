// import * as DataLoader from 'dataloader';

// const GITHUB_API_ROOT = 'https://api.github.com';

// //  Keys are GitHub API URLs, values are { etag, result } objects
// const eTagCache = {};

// export class GitApi {

//     private clientId: string;
//     private clientSecret: string;
//     private loader: any;

//     constructor({ clientId, clientSecret } = {}) {
//         this.clientId = clientId;
//         this.clientSecret = clientSecret;

//         this.loader = new DataLoader(this.fetch.bind(this), {
//             // The GitHub API doesn't have bacthing, so we should send requests as
//             // soon as we know about them
//             batch: false,
//         });
//     }

//     public fetch(urls) {
//         const options = {
//             json: true,
//             resolveWithFullResponse: true,
//             headers: {
//                 'user-agent': 'app',
//             },
//         };

//         if (this.clientId) {
//             options.qs = {
//                 client_id: this.clientId,
//                 client_secret: this.clientSecret,
//             };
//         }

//         return Promise.all(urls.map((url) => {
//             const cachedRes = eTagCache[url];

//             if(cachedRes && cachedRes.eTag) {
//                 options.headers['If-None-Match'] = cachedRes.eTag;
//             }

//             return new Promise((resolve) => {

//             })
//         }))
//     }

//     public get(path) {
//         return this.loader.load(GITHUB_API_ROOT + path);
//     }

// }
