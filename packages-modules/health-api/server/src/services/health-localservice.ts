import { injectable } from 'inversify';

import { IHealthService } from '../interfaces';

@injectable()
export class HealthLocalService implements IHealthService {
    public async health(workspaceId, service) {
        return true;
    }
}
