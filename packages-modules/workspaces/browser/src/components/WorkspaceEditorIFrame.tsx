import * as _ from 'lodash';
import * as React from 'react';
import Frame from 'react-iframe';
import * as qs from 'query-string';
import { IWorkspace, StackType, IStack } from '@adminide-stack/core';
const opentracing = require('opentracing');
import IdleTimer from 'react-idle-timer';


export interface IWorkspaceEditorProps {
  user: any;
  workspace: IWorkspace;
}
export class WorkspaceEditorIFrameComponent extends React.Component<IWorkspaceEditorProps, {}> {

  private componentId;
  private connectionId;
  private tracer;
  private span;
  private childSpan;
  private ideSpan;
  private frame;

  private onActive;
  private onIdle;
  private reset;
  private pause;
  private resume;
  private changeTimeout;

  private idleTimer;
  constructor(props: IWorkspaceEditorProps) {
    super(props);

    const { workspace } = this.props;

    this.connectionId = this.getIDEStack(props).connectionId;
    this.componentId = `iframe_${this.connectionId}`;

    this.tracer = opentracing.globalTracer();
    this.span = this.tracer.startSpan('workspaceEditor');
    this.span.log({ type: 'ns', connectionId: this.connectionId, namespace: workspace.namespace });
    this.state = {
      timeout: 3000,
      remaining: null,
      isIdle: false,
      lastActive: null,
      elapsed: null,
    };
    // Bind event handlers and methods
    this.onActive = this._onActive.bind(this);
    this.onIdle = this._onIdle.bind(this);
    this.reset = this._reset.bind(this);
    this.pause = this._pause.bind(this);
    this.resume = this._resume.bind(this);
    this.changeTimeout = this._changeTimeout.bind(this);
  }

  private handleWindowClose = async (ev) => {
    ev.preventDefault();
    window.removeEventListener('beforeunload', this.handleWindowClose);

    // if we need confirm the user
    // return ev.returnValue = 'Are you sure you want to close?';
  }


  // For communication between IFrame
  // https://www.dyn-web.com/tutorials/iframes/postmessage/demo.php
  // public handleMessage(e) { }


  public componentDidMount() {
    window.addEventListener('beforeunload', this.handleWindowClose);
    // Assign handler to message event
    // window.addEventListener('message', this.handleMessage, false);

    //idle timer
    // this.setState({
    //   remaining: this.idleTimer.getRemainingTime(),
    //   lastActive: this.idleTimer.getLastActiveTime(),
    //   elapsed: this.idleTimer.getElapsedTime()
    // });

    // setInterval(() => {
    //   this.setState({
    //     remaining: this.idleTimer.getRemainingTime(),
    //     lastActive: this.idleTimer.getLastActiveTime(),
    //     elapsed: this.idleTimer.getElapsedTime()
    //   });
    // }, 1000);


    // setTimeout(() => {
    //   try {
    //     const frameComp: any = document.getElementById(this.componentId); //this.frame.refs.iframe;
    //     // some tricks using iframe
    //     //     https://github.com/ryanseddon/react-frame-component/issues/91

    //     // const loadedContent = document.getElementsByClassName('monaco-workbench');
    //     console.log('iframe body', frameComp.contentWindow.document.body);
    //     // console.log('loadedContent', loadedContent);
    //   } catch (err) {
    //     //err:SecurityError: Blocked a frame with origin "http://*********" from accessing a cross-origin frame.
    //     console.log('err:' + err);
    //     // this.span.log({ error: err });
    //     // this.span.finish();
    //   }
    // }, 15000);

  }

  public shouldComponentUpdate() {
    return false;
  }

  public componentDidCatch(err) {
    this.span.log({ error: err });
    this.span.finish();
  }
  public componentWillUnmount() {
    this.span.finish();
    // window.removeEventListener('message', this.handleMessage);
    window.removeEventListener('beforeunload', this.handleWindowClose);
  }
  private getIDEStack(props): IStack {
    const stacks = _.get(props, 'workspace.stacks');
    let idestack = null;
    if (stacks !== null) {
      return idestack = stacks.filter(stack => stack.type === StackType.IDE_STACK)[0];
    }
    return idestack;
  }

  private iframeLoading = () => {
    const { workspace } = this.props;
    this.childSpan = this.tracer.startSpan('iframe-loading', { childOf: this.span });
    this.childSpan.log({ type: 'ns', 'name': 'iframe loading' });
    this.childSpan.log({ type: 'ns', connectionId: this.connectionId, namespace: workspace.namespace });
  }

  private iframeLoaded(): void {
    this.childSpan.finish();
  }

  public render() {

    const { workspace, user } = this.props;

    const q = qs.stringify({ access_token: _.get(user, 'accessToken') });

    if (!workspace || _.isEmpty(workspace)) {
      return <h1>Workspace not found!</h1>;
    }
    this.iframeLoading();
    const ideStack = this.getIDEStack(this.props);
    /* tslint:disable:max-line-length */
    const url = `${process.env.CDE_WORKSPACE_URL_PRFIX}-${workspace.namespace}-${ideStack.connectionId}.${process.env.CDE_WORKSPACE_DOMAIN}/?${q}`;

    return (
      <IdleTimer
        // ref={ref => { this.idleTimer = ref }}
        element={document}
        onActive={this.onActive}
        onIdle={this.onIdle}
        // timeout={this.state.timeout}
        timeout={1000 * 3}
        // startOnLoad={true}
      >
        <Frame
          url={url}
          width="100%"
          height="100%"
          display="block"
          position="relative"
          id={this.componentId}
          allowFullScreen={true}
          className="myClassname"
          onLoad={this.iframeLoaded}
          // ref={(ref) => this.frame = ref}
          // url="http://idefront-default-test.blancboard.com/"
        />
      </IdleTimer>
    );
  }

  private _onActive() {
    this.ideSpan.finish();
    this.setState({ isIdle: false });
  }

  private _onIdle() {
    const { workspace } = this.props;
    this.ideSpan = this.tracer.startSpan('idle', { childOf: this.span });
    this.ideSpan.log({ type: 'ns', connectionId: this.connectionId, namespace: workspace.namespace });
    this.setState({ isIdle: true });
  }

  private _changeTimeout() {
    this.setState({
      timeout: (this.refs.timeoutInput as any).state.value(),
    });
  }

  private _reset() {
    this.idleTimer.reset();
  }

  private _pause() {
    this.idleTimer.pause();
  }

  private _resume() {
    this.idleTimer.resume();
  }
}
