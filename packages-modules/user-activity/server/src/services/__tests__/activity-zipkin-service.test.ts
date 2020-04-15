import 'jest';
import { ActivityZipkinService } from '../activity-zipkin-service';
import { IZipkinSearchRequest, SortOrder } from '../../interfaces';
import { config } from 'dotenv';


config({ path: process.env.ENV_FILE });

describe('ActivityZipkinService', () => {

    let activityZipkinService: ActivityZipkinService;
    beforeAll(() => {
        // activityZipkinService = new ActivityZipkinService();
        // activityZipkinService.initialize({ context: {} }, undefined);
    });
    // it('search service', async () => {
    //     const request: IZipkinSearchRequest = {
    //         serviceName: 'frontend',
    //         spanName: 'workspaceeditor',
    //         limit: 2,
    //         sortOrder: SortOrder.NewestFirst,
    //     };
    //     const result = await activityZipkinService.search(request);
    //     console.log('search result', result);
    // });
});

