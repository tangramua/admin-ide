import { Button } from 'antd';
import * as React from 'react';
import { compose } from 'redux';
import IdleTimer from 'react-idle-timer';
import { Subject, Observable, fromEvent, merge } from 'rxjs';
import { withApollo, WithApolloClient } from 'react-apollo';

import { tracer } from '../graphql-tracer';
import { ActivityScheduler } from '../scheduler';
import { IActivityScheduler } from '../interfaces';
import { takeUntil, map, flatMap, debounceTime } from 'rxjs/operators';

export interface IActivityTrackerProps {
    stream: Subject<any>;
}

// export const ACTIVITY_DEBOUNCE = 10000;
export const ACTIVITY_DEBOUNCE = 900000;

export const styles = ({
    footer: ({
        bottom: 0,
        zIndex: '9999',
        width: '100%',
        display: 'flex',
        padding: '0 15px',
        position: 'fixed',
        background: '#fff',
    }),
});

export class ActivityTrackerComponent extends React.Component<WithApolloClient<IActivityTrackerProps>, any> {
    public span: any;
    public idle: any;
    public onIdle: any;
    public onActive: any;

    public stop$ = new Subject();
    public mouse$: Observable<any>;
    public activity$: Observable<any>;
    public state = { inactive: false };
    public scheduler: IActivityScheduler;

    public componentDidMount() {
        this.scheduler = new ActivityScheduler({});

        this.scheduler
            .tick$
            .pipe(
                takeUntil(this.stop$),
                map(() => this.scheduler.prepare('user-i', {})),
                flatMap(request => this.scheduler.collect(request)),
            ).subscribe(() => { /** todos */ });

        this.mouse$ = fromEvent(document, 'mousemove')
                .pipe(
                    takeUntil(this.stop$),
                    map(() => this.setState({ inactive: false })),
                );

        merge(
            this.mouse$,
            this.props.stream,
        ).pipe(
            takeUntil(this.stop$),
            debounceTime(ACTIVITY_DEBOUNCE),

        ).subscribe((data) => this.setState({ inactive: true }));
    }

    public componentWillUnmount() {
        this.stop$.next(-1);
        this.stop$.complete();

        if (this.span) {
            this.span.finish();
            delete this.span; // Delete span objct from component
        }
    }

    private _onActive() {
        this.idle.finish();
    }

      private _onIdle() {
        alert('Idle!');
        this.idle = (tracer as any).startSpan('idle', { childOf: this.span });
        this.idle.log({ type: 'ns' });
    }

    public render() {
        return (
            <React.Fragment>
                <IdleTimer
                    timeout={5000}
                    element={document}
                    onIdle={this.onIdle}
                    onActive={this.onActive}
                >
                    {this.props.children}
                </IdleTimer>
            </React.Fragment>
        );
    }
}

export const ActivityTracker: any = compose(
    withApollo,
)(ActivityTrackerComponent);
