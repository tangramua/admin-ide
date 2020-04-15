export interface IDockerRegistry {
    _id?: string;
    url: string;
    name: string;
    owner_id: string;
    credentials: any;
}

export interface IRegistryManagementService {
    remove(_id: string): Promise<boolean>;
    test?(IDockerRegistry): Promise<boolean>;
    find(_id: string): Promise<IDockerRegistry>;
    list(owner_id: string): Promise<IDockerRegistry[]>;
    create(payload: IDockerRegistry): Promise<IDockerRegistry>;
    update(_id: string, payload: IDockerRegistry): Promise<IDockerRegistry>;
}
