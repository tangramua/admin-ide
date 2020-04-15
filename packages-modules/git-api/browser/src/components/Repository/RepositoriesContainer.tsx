import * as React from 'react';
import { graphql } from 'react-apollo';
import Repositories, { IRepositoriesProps } from './Repositories';
import { GitFetchUserDocument } from '@adminide-stack/core';
import { fetchUserQuery } from '../../gql/schema';
import { ApolloError } from 'apollo-client';


export interface IProps extends IRepositoriesProps {
    error?: ApolloError;

}
const RepositoriesWithData = graphql<IProps, fetchUserQuery, {}, {}>(GitFetchUserDocument, {
    // options: { variables: { number_of_repos: 30, before: null } },
    props: ({ data: { loading, viewer } }) => {
        if (loading) {
            return { loading: true };
        }

        return {
            viewer: viewer.name,
            repositories: viewer.repositories.edges.map((repo) => {
                const {
                    name, description, createdAt, updatedAt, descriptionHTML, url,
                } = repo.node;

                return {
                    name,
                    description,
                    createdAt,
                    updatedAt,
                    descriptionHTML,
                    url,
                    languages: repo.node.languages.edges.map((lang) => {
                        return lang.node.name || '';
                    }),
                };
            }),
        };
    },
})(Repositories as any);

export default RepositoriesWithData;
