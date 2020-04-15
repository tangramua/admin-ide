import * as React from 'react';

export function Loading() {
    const style: any = {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
    };

    return (
        <div style={style}>
            <div>Loading....</div>
        </div>
    );
}
