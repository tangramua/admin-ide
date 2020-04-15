import { Auth } from '../../auth';
import { IUserProfile } from '@adminide-stack/user-core';
import { logger } from '@cdm-logger/client';
import { FETCH_CLIENT_PROFILE } from '../gql';


const __typename = 'UserProfile';

export const resolver = {
    Query: {
        profile: async (_, variables, { cache, getCacheKey }) => {
            logger.debug('===> pulling profile');
            let profile;
            if (Auth.Instance.isTokenExpired) {
                await Auth.Instance.renewToken();
            }

            profile = getCacheKey({ __typename });

            if (!profile) {
                profile = { ...(await Auth.Instance.getProfile()), __typename };

                cache.writeQuery({
                    query: FETCH_CLIENT_PROFILE,
                    data: { profile },
                });
            }

            return { ...profile, __typename };
        },
    },
    Mutation: {
        link: (root, { to }) => Auth.Instance.link(to),
    },
};
