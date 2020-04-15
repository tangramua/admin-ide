import * as React from 'react';
import Languages from './Languages';
import { parseTime } from '../../utils';

const RepoInfoBlock = ({ repo, i }) => {
    return (
        <div key={i} className="col-xs-12 col-md-4">
            <div className="repository-block shadow">
                <div className="header">
                    <a href={repo.url}>{repo.name}</a>
                </div>
                <div className="content">
                    <div className="description">
                        <p>{repo.description}</p>
                        <p className="date">Created: {parseTime(repo.createdAt)}</p>
                        <p className="date">Last udpate: {parseTime(repo.updatedAt)}</p>
                    </div>
                    <div className="languages">
                        <Languages languages={repo.languages} />
                    </div>
                    <div className="footer">
                        <a href={repo.url}><i className="fa fa-github" aria-hidden="true" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default RepoInfoBlock;
