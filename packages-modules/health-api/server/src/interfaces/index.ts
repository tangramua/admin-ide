export interface IHealthService {
    health(workspaceId, service): Promise<boolean>;
}
