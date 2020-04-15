import * as React from 'react';

export interface IEmptyTabProps {
    icon: any;
    button: any;
    styles?: any;
    text: string;
}

export interface IContextProps {
    renderer: any;
}

export function EmptyTab(props) {
    const { text, button, icon } = this.props;
    return (
        <div className="text-center">
            <div>{icon}</div>
            <h2 className="my-3">{text}</h2>
            <div>{button}</div>
        </div>
    );
}
