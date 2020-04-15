export interface IRequestWithInput {
    __input?: any;
}

export interface ICloneLinks {
    ssh: String;
    https: String;
}

export interface IBranch extends IRequestWithInput {
    name: string;
    commit?: string;
}

export interface ICommit extends IRequestWithInput {
    id: String;
    message: String;
    updatedAt?: String;
    createdAt?: String;
}

export interface IPullRequest extends IRequestWithInput {
    id: String;
    head: String;
    merged: String;
    commit: ICommit;
    updatedAt: String;
    createdAt: String;
}

export interface IGitRepository extends IRequestWithInput {
    id: String;
    url?: String;
    name: String;
    path: String;
    owner?: string;
    avatar?: String;
    private: Boolean;
    createdAt: String;
    updatedAt: String;
    clone: ICloneLinks;
    description?: String;
}
