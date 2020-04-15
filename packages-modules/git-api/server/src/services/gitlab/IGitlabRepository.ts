export interface IGitlabBranch {
    name: String;
    merged: String;
    protected: String;
    commit: IGitlabCommit;
}

export interface IGitlabAuthor {
    id: String;
    name: String;
    state: String;
    web_url: String;
    username: String;
    avatar_url: String;
}

export interface IGitlabPullRequest {
    id: String;
    sha: String;
    iid: String;
    state: String;
    title: String;
    project_id: String;
    created_at: String;
    updated_at: String;
    merge_status: String;
    target_branch: String;
    source_branch: String;
    author: IGitlabAuthor;
    assignee: IGitlabAuthor;
}

export interface IGitlabCommit {
    id: String;
    title: String;
    message: String;
    short_id: String;
    author_email: String;
    author_name: String;
    authored_date: String;
    committed_date: String;
    committer_email: String;
    committer_name: String;
}

export interface IGitlabOwner {
    id?: string;
    name?: string;
    created_at?: string;
}

export interface IGitlabRepository {
    id: String;
    name: String;
    web_url: String;
    created_at: String;
    avatar_url: String;
    description: String;
    visibility: Boolean;
    owner?: IGitlabOwner;
    default_branch: String;
    ssh_url_to_repo: String;
    http_url_to_repo: String;
    last_activity_at: String;
    path_with_namespace: String;
    namespace: IGitlabNamespace;
    _links: IGitlabRepositoryLinks;
}

export interface IGitlabRepositoryLinks {
    self: String;
    issue: String;
    labels: String;
    events: String;
    members: String;
    repo_branches: String;
    merge_requests: String;
}

export interface IGitlabNamespace {
    id: String;
    name: String;
    path: String;
    kind: String;
    full_path: String;
}
