import { IBitbucketLink } from './IBitbucketLink';

export interface IBitbucketRepositoryLinks {
    self: IBitbucketLink;
    html: IBitbucketLink;
    avatar: IBitbucketLink;
    hooks: IBitbucketLink;
    forks: IBitbucketLink;
    clone: IBitbucketLink[];
    watchers: IBitbucketLink;
    downloads: IBitbucketLink;
    commits: IBitbucketLink;
    pullrequests: IBitbucketLink;
}

export interface IBitbucketBranchTargetLinks {
    self: IBitbucketLink;
    html: IBitbucketLink;
    comments: IBitbucketLink;
    patch: IBitbucketLink;
    diff: IBitbucketLink;
    approve: IBitbucketLink;
    statuses: IBitbucketLink;
}

export interface IBitbucketBranchLinks {
    self: IBitbucketLink;
    html: IBitbucketLink;
    commits: IBitbucketLink;
}

export interface IBitbucketBranchTarget {
    hash: String;
    repository: IBitbucketRepository;
    links: IBitbucketBranchTargetLinks[];
    message: String;
    date: String;
}

export interface IBitbucketHeadItem {
    type: string;
    hash: string;
}

export interface IBitbucketBranch {
    type: string;
    name: string;
    date: string;
    heads: IBitbucketHeadItem[];
    target: IBitbucketBranchTarget;
}

export interface IBitbucketOwner {
    username?: string;
    account_id?: string;
    display_name?: string;
}

export interface IBitbucketRepository {
    uuid: String;
    name: String;
    website: String;
    language: String;
    full_name: String;
    created_on: String;
    updated_on: String;
    is_private: Boolean;
    description: String;
    owner?: IBitbucketOwner;
    links: IBitbucketRepositoryLinks;
}
