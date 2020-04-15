import * as _ from 'lodash';
import * as React from 'react';
import { Card, Tag } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

export function TeamCard(props) {
    const { team } = props;

    return (
        <Card
            hoverable={true}
            actions={[
                <Link to={`/teams/view/${team._id}`} key={1}>View</Link>,
            ]}
        >
            <Meta
                title={team.name}
                description={(
                    <div>
                        <p>{team.description}</p>
                        <div>
                            {!_.isEmpty(team.tags)
                                ? _.map(team.tags, tag => <Tag color="blue">{tag}</Tag>)
                                : <Tag color="gray">No tags...</Tag>}
                        </div>
                    </div>
                )}
            />
        </Card>
    );
}
