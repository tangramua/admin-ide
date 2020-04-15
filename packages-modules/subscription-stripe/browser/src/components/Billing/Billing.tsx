import * as React from 'react';
import { map, sortBy } from 'lodash';
import { Icon, Button, Card, Row, Col, Modal, Tabs } from 'antd';
import { SubscriberPlanDocument, CardsInfoQueryDocument } from '@adminide-stack/core';
import Subscription from '../Payment';
import { config } from '../../config';
import { useFela } from 'react-fela';

const TabPane = Tabs.TabPane;

export interface IBillingProps {
    plans: any[];
    styles?: any;
    subscriberPlan: any;
    cardsList: [any];
    changePlanMutate: (args: any) => any;
}

export interface IBillingState {
    showSubsciption: boolean;
    selectedPlanId: number;
}

export function BillingComponent(props: any) {
    const [ state, updateState ] = React.useState({
        selectedPlanId: null,
        showSubsciption: false,
    });

    const { plans, subscriberPlan, changePlanMutate, cardsList } = props;
    const setState = (updates) => updateState({ ...state, ...updates });
    const { selectedPlanId, showSubsciption } = state;

    const { css } = useFela(props);

    const onUpgradeClick = (el) => () => {
        if (!cardsList.length && el.amount > 0) {
            setState({ showSubsciption: true, selectedPlanId: el.id });
        } else {
            setState({ selectedPlanId: el.id });
            changePlan(el.id);
        }
    };

    const closeModal = () => {
        setState({ showSubsciption: false, selectedPlanId: null });
    };

    const changePlan = (input?: string) => {
        const id = input || selectedPlanId;
        const planData = { oldPlanId: subscriberPlan && subscriberPlan.itemId, planId: id };
        changePlanMutate({
            variables: planData,
            refetchQueries: () => [{ query: SubscriberPlanDocument }, { query: CardsInfoQueryDocument }],
            update: (store, { data }) => {
                const plan = store.readQuery({
                    query: SubscriberPlanDocument,
                });
                plan.subscriberPlan = { ...plans.find(el => el.id === id), itemId: id };
                store.writeQuery({ query: SubscriberPlanDocument, data: plan });
            },
            optimisticResponse: {
                changePlan: true,
            },
        }).then(() => closeModal());
    };

    const renderDescription = (description) => {
        if (!description) { return null; }

        return map(description.split(';'), (item, i) => {
            return (
                <div key={i} className={css(styles.planDescription)}>
                    <Icon type="check" className={css(styles.planDescriptionIcon)} />
                    <div>{item}</div>
                </div>
            );
        });
    };

    const renderPlanTab = (users) => {
        const tabPlans = plans.filter(el => el && el.transform_usage ? el.transform_usage.divide_by === users : false);
        const sortedPlans = sortBy(tabPlans, el => Number(el.metadata.order));
        return sortedPlans.map((el, ind) => {
            return (
                <Col
                    span={8}
                    key={ind}
                    style={styles.cardWrapper as any}
                >
                    <Card title={el.nickname} className={css(styles.planHeader)}>
                        <div>{`${el.amount * 0.01} ${el.currency}/${el.interval}`}</div>
                        {renderDescription(el.metadata.description)}
                        {subscriberPlan.id === el.id &&
                            <span className={css(styles.currentPlan)}>Your current plan</span>
                        }
                        {el.amount === 0 &&
                            <div>The basics, for free!</div>}
                        {subscriberPlan.id !== el.id &&
                            <Button onClick={onUpgradeClick(el)}>Change your account</Button>}
                    </Card>
                </Col>
            );
        });
    };

    const renderPlans = () => {
        if (!plans || !subscriberPlan) { return null; }
        const userNum = [2, 5, 10, 25, 50, 100];
        return (
            <Tabs type="card">
                {map(userNum, (el, i) => {
                    return (
                        <TabPane tab={`${el} users`} key={i.toString()}>
                            <Row gutter={16}>{renderPlanTab(el)}</Row>
                        </TabPane>
                    );
                })}
            </Tabs>
        );
    };

    return (
        <div className={css(styles.tab)}>
            <h2>Billing</h2>
            {renderPlans()}
            <Modal
                className={css(styles.modal)}
                visible={showSubsciption}
                onCancel={closeModal}
                title="Add Credit Card"
                footer={[]}
            >
                <Subscription
                    onSubscribe={changePlan}
                    apiKey={config.STRIPE_PUBLISHABLE_KEY}

                />
            </Modal>
        </div>
    );
}

const styles: any = {
    tab: props => ({
        padding: '10px',
    }),
    planHeader: props => ({
        '& .ant-card-head': {
            'background-image': 'linear-gradient(to right, rgb(255, 204, 99) 0px, rgb(253, 97, 87) 100%)',
        },
        '& .ant-card-head-title': {
            'color': 'white',
            'font-weight': 'bold',
        },
    }),
    currentPlan: props => ({
        ':before': {
            backgroundColor: 'rgb(97, 191, 139)',
            content: "' '",
            height: '0.625rem',
            left: '0',
            position: 'absolute',
            top: '0.375rem',
            width: '0.625rem',
            borderRadius: '100%',
        },
        position: 'relative',
        padding: '2px 20px',
        fontWeight: 'bold',
    }),
    cardWrapper: {
        textAlign: 'center',
    },
    modal: props => ({
        '& button': {
            margin: 0,
        },
    }),
    planDescription: props => ({
        display: 'flex',
        'align-items': 'center',
        padding: '10px 0',
    }),
    planDescriptionIcon: props => ({
        paddingRight: '10px',
    }),
};
