import * as React from 'react';
import { RouterProps } from 'react-router';
import { Block, Carusel } from '../Elements';


// Following component created based off 
// https://github.com/dmarczydlo/github-component/blob/master/src/components/Repositories.jsx
const display = (type, repositories) => {
    if (type === 'slider') {
        return <Carusel repositories={repositories} />;
    }
    return <Block repositories={repositories} />;
};

export interface IRepositoriesProps extends RouterProps {
    loading?: boolean;
    repositories?: any;
    type?: 'block' | 'carusel';
}

const Repositories = ({ loading, repositories, type = 'block' }) => {
    if (loading) {
        return (
            <div>Loading data</div>
        );
    }

    return (
        <div>
            {display(type, repositories)}
        </div>
    );
};

export default Repositories;
