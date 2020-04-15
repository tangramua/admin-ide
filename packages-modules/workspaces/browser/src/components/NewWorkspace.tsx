import * as _ from 'lodash';
import * as React from 'react';
import { compose } from 'redux';
import { Layout, Modal, Button } from 'antd';
import { graphql, ChildProps as ApolloChildProps } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { IWorkspace, IStack, IStackType } from '@adminide-stack/core';
import { Form, Input, Select, Radio, Table, Divider, Tabs, Icon, Row, Col, message } from 'antd';
import { RouterProps } from 'react-router';
import {
    ADD_WORKSPACE_MUTATION,
} from '../graphql';
import { useAddWorkspaceMutation } from '../generated'
import { Projects } from './input/Projects';
// import { IUserProfile } from '@adminide-stack/user-core';
import { InactivityInterval, IWorkspaceCreate_Input, IMutationAddWorkspaceArgs, AddWorkspaceMutationResult} from '@adminide-stack/core';
import { PageView, TeamsList} from '@adminide-stack/react-shared-components';
import { useFela } from 'react-fela';
import { StackSelector, StackVariant } from './StackSelectors/StackSelectror';

const { Item } = Form;
const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;
const { Header, Content } = Layout;
const { Group, Button: RadioButton } = Radio;

const INACTIVITY_OPTIONS = [
    { value: InactivityInterval.HalfHour, title: 'After 30 minutes' },
    { value: InactivityInterval.Hour, title: 'After one hour' },
    { value: InactivityInterval.FourHours, title: 'After four hours' },
    { value: InactivityInterval.Day, title: 'After a day' },
    { value: InactivityInterval.Week, title: 'After a week' },
    { value: InactivityInterval.Never, title: 'Never' },
];

const FORM_LAYOUT = {
    labelCol: {
        md: { span: 6 },
    },
    wrapperCol: {
        md: { span: 18 },
    },
};

const defaultDockerChart: IStack = {
    type: IStackType.IdeStack,
    chartName: 'node',
    repository: '',
    releaseName: 'node',
    chartVersion: 'latest',
};


export namespace INewWorkspace {

    export interface ComponentProps {
        form: any;
        styles?: any;
        providers: any;
        clearCache?: any;
        cacheForm?: any;
        cache?: { data: string };
    }
    export interface InputProps extends IMutationAddWorkspaceArgs {

    }

    export interface PropsFromDispatch {

    }

    export interface Mutation {
        add?: any;
    }

    export interface Response extends AddWorkspaceMutationResult { }
    export interface ChildProps extends ApolloChildProps<Mutation, Response> { }
    // Props passed from mapStateToProps
    export interface PropsFromState {
        user: any;
    }
    export type Props = ComponentProps & RouterProps & PropsFromState & PropsFromDispatch
        & ChildProps;
}

let uuid = 0;

export function NewWorkspaceComponent(props: any) {
    let cache = {};

    const { css } = useFela(props);
    const [ modal, setModal ] = React.useState(false);
    const values = props.form.getFieldsValue();
    const { form, providers, add, history, user } = props;
    console.log('providers', providers)
    const toggleModal = (status: boolean) => () => setModal(status);

    const onSubmit = (e) => {
        e.preventDefault();

        form.validateFields((err) => {
            if (err) { return; }

            const keys = form.getFieldValue('keys');
            const data: IWorkspaceCreate_Input =
                form.getFieldsValue(['name', 'projects', 'teamId', 'language', 'spec', 'description', 'projects', 'stacks']);

            add({ variables: { request: data } })
                .then(() => {
                    history.push('/dashboard');
                    message.success('Workspace created!');
                })
                .catch(() => {
                    message.error('Check your data. Try later...');
                });
            // .finally(() => clearCache());
        });
    };

    const onStacksChange = (updates) => {
        const docker = _.map(updates[StackVariant.Docker], (record) => ({
            repository: '',
            chartName: record.id,
            releaseName: record.id,
            type: IStackType.IdeStack,
            chartVersion: record.version || 'master',
        }));

        const monocular = _.map(updates[StackVariant.Monocular], (record) => _.pick(record, [
            'type',
            'variables',
            'chartName',
            'releaseName',
            'repository',
            'chartVersion',
        ]));

        const stacks = [ ...docker, ...monocular ];

        form.setFieldsValue({ stacks });
    };

    form.getFieldDecorator('stacks', {
        initialValue: _.get(cache, 'stacks') ||
            [{ ...defaultDockerChart }],
    });
    form.getFieldDecorator('stackIds', { initialValue: [] });
    form.getFieldProps('keys', { initialValue: _.get(cache, 'keys') || [uuid] });

    // form.getFieldDecorator('spec', { initialValue: _.get(cache, 'spec', { inactivity: InactivityInterval.HalfHour }) });

    const rowSelection = {
        selectedRowKeys: form.getFieldValue('stackIds'),
        onChange: (keys) => form.setFieldsValue({ stackIds: keys }),
    };

    return (
        <React.Fragment>
            <PageView title="New Workspace">
                <Form
                    onSubmit={onSubmit}
                    className={css(styles.container)}
                >
                    <Item {...FORM_LAYOUT} label="Name">
                        {form.getFieldDecorator('name', {
                            initialValue: _.get(cache, 'name'),
                            normalize: value => (value || '').replace(/[^a-zA-Z0-9]/g, ''),
                            rules: [{
                                required: true,
                                message: 'Workspace name is required',
                            }],
                        })(
                            <Input size="large" />,
                        )}
                    </Item>
                    <Item {...FORM_LAYOUT} label="Description">
                        {form.getFieldDecorator('description', {
                            initialValue: _.get(cache, 'description'),
                        })(
                            <TextArea />,
                        )}
                    </Item>
                    <Item
                        {...FORM_LAYOUT}
                        label="Cost-saving settings"
                        help="Choose predetermined amount of time to auto-hibernate your environment and prevent unnecessary charges."
                    >
                        {form.getFieldDecorator('spec.inactivity', {
                            initialValue: _.get(cache, 'spec.inactivity', InactivityInterval.HalfHour),
                        })(
                            (
                                <Select size="large">
                                    {_.map(INACTIVITY_OPTIONS, (option, i) =>
                                        <Option key={i} value={option.value}>{option.title}</Option>)}
                                </Select>
                            ),
                        )}
                    </Item>
                    <TeamsList>
                        {({ data, loading }) => (
                            <Item required={true} {...FORM_LAYOUT} label="Team">
                                {form.getFieldDecorator('teamId', {
                                    initialValue: _.get(cache, 'teamId'),
                                    rules: [{ required: true, message: 'Select team' }],
                                })(
                                    (
                                        <Select size="large">
                                            {_.map(_.get(data, 'teams'), team => (
                                                <Option key={team._id} value={team._id}>{team.name}</Option>
                                            ))}
                                        </Select>
                                    ),
                                )}
                            </Item>
                        )}
                    </TeamsList>
                    <Item {...FORM_LAYOUT} label="Workspace Environment" required={true}>
                        <StackSelector onChange={onStacksChange} />
                    </Item>
                    <Item {...FORM_LAYOUT} label="Projects">
                        {form.getFieldDecorator('projects', { initialValue: _.get(cache, 'projects') || [{}] })(
                            (
                                <Projects
                                    user={user}
                                    providers={providers}
                                />
                            ),
                        )}
                    </Item>
                    <Item {...FORM_LAYOUT} colon={false} label=" ">
                        <Button
                            size="large"
                            type="primary"
                            htmlType="submit"
                            className={css(styles.submit)}
                        >
                            Submit
                        </Button>
                    </Item>
                </Form>
            </PageView>
        </React.Fragment>
    );

}

const styles: any = {
    search: props => ({}),
    submit: props => ({
        width: '220px',
    }),
    title: props => ({
        fontSize: '20px',
    }),
    tabs: props => ({
        height: '100%',
        '& > .ant-tabs-content': {
            height: '100%',
        },
    }),
    table: props => ({
        '& .ant-table': {
            border: '1px solid #d3d3d3',
        },
        '& .ant-table-placeholder': {
            border: 'none',
        },
    }),
    pane: props => ({
        height: 'calc(100% - 45px)',
        overflowY: 'auto',
        padding: '0 15px',
    }),
    header: props => ({
        backgroundColor: '#f0f2f5',
    }),
    page: () => ({
        width: '100%',
        height: '100%',
        display: 'flex',
        'flex-direction': 'column',
    }),
    copy: props => ({
        textAlign: 'center',
    }),
    container: props => ({
        padding: '15px',
        overflowY: 'auto',
        background: '#fff',
        height: 'calc(100vh - 64px)',
    }),
};

const NewWorkspaceWithForm = Form.create({})(NewWorkspaceComponent)

const NewWorkspaceWithMutation = props => {
    const [ add ] = useAddWorkspaceMutation();
    const data = {...props, add}

    return <NewWorkspaceWithForm {...data} />
}

export const NewWorkspace = withRouter(NewWorkspaceWithMutation)