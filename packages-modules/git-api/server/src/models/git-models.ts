
export class GitRepositories {
    private connector;
    constructor({ connector }) {
        this.connector = connector;
    }

    public getByFullName(fullName) {
        return this.connector.get(`/repos/${fullName}`);
    }

}

export class GitUsers {
    private connector;

    constructor({ connector }) {
        this.connector = connector;
    }

    public getByLogin(username) {
        return this.connector.get(`/users/${username}`);
    }
}
