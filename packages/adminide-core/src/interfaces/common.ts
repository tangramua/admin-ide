export interface ICdmbaseUser {
    id: string;
    githubUsername: string;
}

export type GraphQLContext = {
    user?: ICdmbaseUser;
};
