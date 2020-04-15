import * as _ from 'lodash';
import * as React from 'react';
import { useFela } from 'react-fela';
import { message, Card } from 'antd';
import { PageView } from '@adminide-stack/react-shared-components';
import { TeamForm as TeamFormComponent } from '../../../components'
import { HOCOrganizations } from '../../../hoc';

export function TeamForm({ history, createTeam, ...props }) {
    const { css } = useFela(props);

    const create = request => createTeam(request)
        .then(() => message.success(`Team ${request.name} created!`))
        .then(() => history.push(`/dashboard`))
        .catch(() => message.error(`Can not create team. Try later...`));

    return (
        <PageView title="Create Team">
            <br/>
            <Card className={css(styles.content)}>
                <HOCOrganizations>
                    {({ organizations, loading }) => (
                        <TeamFormComponent
                            createTeam={create}
                            organizations={organizations || []}
                        />
                    )}
                </HOCOrganizations>
            </Card>
        </PageView>
    );
}

const styles = {
    content: props => ({
        width: '960px',
        margin: '0 auto',
    }),
};
