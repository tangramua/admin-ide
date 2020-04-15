import * as React from 'react';

export interface IEmptyTabProps {
    icon: any;
    button: any;
    styles?: any;
    text: string;
}

export function EmptyTab(props: any) {
    const { text, button, icon } = props;
    return (
        <div className="text-center">
            <div>{icon}</div>
            <h2 className="py-3">{text}</h2>
            <div>{button}</div>
        </div>
    );
}
