
export interface ISelectRepoState {
    accessToken: string;
}

export interface IStepChildProps {
    parent?: IStepParent;
    jumpToStep?: Function;
  }

export interface IStepParent {
    index?: number;
    state?: any;
    props?: any;
    updateState?: Function;
    loadBranches?: Function;
    selectRepositoryType?: Function;
    handleCreate?: Function;
}

export interface IGitRepository {
    id?: number;
    name?: string;
    clone_url?: string;
    branches_url?: string;
    html_url?: string;
    owner?: IGitOwner;
    private?: boolean;
}

export interface IGitBranch {
    name?: string;
    commit?: IGitCommit;
}

export interface IGitCommit {
    sha: string;
    url: string;
}

export interface IGitOwner {
    id?: number;
    name?: string;
    avatar_url?: string;
}
