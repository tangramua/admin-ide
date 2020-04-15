

import 'jest';
import { transformWorkspace } from '../util';
import * as _ from 'lodash';
import { logger } from '@cdm-logger/server';

describe('transformWorskapce utlity test', () => {

    it('test', () => {
        const workspace = {
            'name': 'dfsfsdf',
            'stacks': [
                {
                    'type': 'MONOCULAR_STACK',
                    'chartName': 'aerospike',
                    'repository': 'stable',
                    'releaseName': 'sdfsafdsf',
                    'chartVersion': '0.1.7',
                    'variables': [
                        {

                        },
                    ],
                },
            ],
            'projects': [
                {
                    'name': 'sdarewr',
                    'source': {
                        'type': 'BLANK',
                        'location': '',
                        'providers': 'NONE',
                        'parameters': {
                            'branch': '',
                        },
                    },
                },
                {
                    'name': 'jLJfwer',
                    'source': {
                        'type': 'GIT',
                        'location': '',
                        'providers': 'GITHUB',
                        'parameters': {
                            'branch': '',
                        },
                    },
                },
            ],
        };
        const metadata: any = {
            'namespace': 'stackflow1',
            'identity': [
                {
                    'provider': 'google-oauth2', 'access_token': 'googleccesssstoookkkkeeeen',
                    'expires_in': 3600, 'user_id': '100879977420', 'connection': 'google-oauth2', 'isSocial': true,
                }, {
                    'provider': 'github', 'access_token': 'gitesssstoookkkkeeeen',
                    'expires_in': 3600, 'user_id': '2342342', 'connection': 'github', 'isSocial': true,
                },
            ],
            'orgId': '5b31afefcd52937450187a2d',
        };
        const output = transformWorkspace(workspace, metadata);
        expect(output).toMatchSnapshot();
        logger.info('output [%o]', output);

    });
});
