export interface IDokerImageConfig {
    Image: string;
    NetworkDisabled: boolean;
    OnBuild: any[];
    StdinOnce: boolean;
    PublishService: string;
    AttachStdin: boolean;
    OpenStdin: boolean;
    Domainname: string;
    AttachStdout: boolean;
    Tty: boolean;
    Hostname: string;
    Cmd: string[];
    Env: string[];
    MacAddress: string;
    AttachStderr: boolean;
    WorkingDir: string;
    User: string;
}

export interface IDockerContainerGraphDriver {
    Data: any;
    Name: string;
}

export interface IDockerContainerConfig {
    Tty: boolean;
    Hostname: string;
    Domainname: string;
    AttachStdout: boolean;
    PublishService: string;
    AttachStdin: boolean;
    OpenStdin: boolean;
    StdinOnce: boolean;
    NetworkDisabled: boolean;
    OnBuild: any[];
    Image: string;
    User: string;
    WorkingDir: string;
    MacAddress: string;
    AttachStderr: boolean;
    Env: string[];
    Cmd: string[];
}


export interface IDockerRootFS {
    Type: string;
    Layers: string[];
}

export interface IDockerImageInfo {
    Id: string;
    Os: string;
    Size: number;
    Author: string;
    Parent: string;
    Created: string;
    Comment: string;
    Container: string;
    RepoTags: string[];
    VirtualSize: number;
    Architecture: string;
    RepoDigests: string[];
    DockerVersion: string;
    RootFS: IDockerRootFS;
    Config: IDokerImageConfig;
    ContainerConfig: IDockerContainerConfig;
    GraphDriver: IDockerContainerGraphDriver;
}

export interface IDockerSearchImageObject {
    name: string;
    star_count: number;
    description?: string;
    is_official: boolean;
    is_automated: boolean;
}

export interface IDockerListItem {
    Id: string;
    Labels: any;
    Size: number;
    Created: number;
    ParentId: string;
    SharedSize: number;
    RepoTags: string[];
    Containers: number;
    VirtualSize: number;
    RepoDigests: string[];
}

export interface IRegistryCatalog {
    repositories: string[];
}

export interface IImageTags {
    name: string;
    tags: string[];
}
