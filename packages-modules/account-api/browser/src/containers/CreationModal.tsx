import { compose } from 'redux';
import { graphql } from 'react-apollo';
import { CreateTeamDocument, TeamsDocument } from '@adminide-stack/core'
import { CreationModal as CreationModalComponent } from '../components/CreationModal';

export const CreationModal = compose(
    graphql(CreateTeamDocument, {
        options: {
            update: (proxy, { data: { createTeam } }) => {
                const query = TeamsDocument;
                const data = proxy.readQuery({ query }) as any;
                data.teams.push(createTeam);
                proxy.writeQuery({ query, data });
            },
        } as any,
        props: ({ mutate }): Partial<any> => ({
            createTeam: (request) => mutate({ variables: { request } }),
        }),
    }),
)(CreationModalComponent as any) as any;
