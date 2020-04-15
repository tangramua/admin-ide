import * as React from 'react';
import RepoInfoCarusel from './RepoInfoBlock';
import { getIndex } from '../../utils';

export namespace Carusel {
    export interface Props {
        repositories: any;
    }

    export interface State {
        activeIndex: any;
    }
}
class Carusel extends React.Component<Carusel.Props, Carusel.State> {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };
    }

    public onNextClick = () => {
        const { repositories } = this.props;
        const active = (this.state.activeIndex + repositories.length - 1) % repositories.length;

        this.setState({
            activeIndex: active,
        });
    }

    private onPrevClick = () => {
        const { repositories } = this.props;
        const active = (this.state.activeIndex + 1) % repositories.length;
        this.setState({
            activeIndex: active,
        });
    }

    public render() {
        const { repositories } = this.props;
        return (
            <div className="box">
                <div className="button-carusel">
                    <button onClick={this.onPrevClick}><span className="left-arrow" /></button>
                </div>
                <div className="carousel is-steady">
                    {repositories.map((repo, i) => {
                        const props = { repo, i };
                        return (
                            <div
                                key={i}
                                style={{ order: getIndex(i, this.state.activeIndex, repositories.length) }}
                                className={`carousel-item  ${i === this.state.activeIndex ? 'is-first' : ''}`}
                            >
                                <RepoInfoCarusel key={i} {...props} />
                            </div>
                        );
                    })}
                </div>
                <div className="button-carusel">
                    <button onClick={this.onNextClick}><span className="right-arrow" /></button>
                </div>
            </div>
        );
    }
}

export default Carusel;
