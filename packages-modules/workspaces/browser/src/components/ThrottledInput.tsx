import * as _ from 'lodash';
import { Input } from 'antd';
import * as React from 'react';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

export class ThrottledInput extends React.Component<any, any> {
    public stop$ = new Subject();
    public changes$ = new Subject();

    public state = {
        value: this.__value,
    };

    get __value() { return this.props.value || ''; }

    public UNSAFE_componentWillReceiveProps(props) {
        if ('value' in props) {
            this.setState({ value: props.value });
        }
    }

    public componentDidMount() {
        this
            .changes$
            .pipe(
                takeUntil(this.stop$),
                debounceTime(750),
            )
            .subscribe(value => this.props.onChange(value));

        this
            .changes$
            .pipe(
                takeUntil(this.stop$),
            )
            .subscribe(value => this.setState({ value }));
    }

    public componentWillUnmount() {
        this.stop$.next();
        this.stop$.complete();
    }

    public onChange = e => {
        const value = e.target.value;
        this.changes$.next(value);
    }

    public render() {
        const { value } = this.state;
        const props = _.pick(this.props, ['type', 'size', 'style', 'className']);

        return (
            <Input {...props} value={value} onChange={this.onChange} />
        );
    }
}

