import { map } from 'lodash';
import * as React from 'react';
import * as moment from 'moment';
import { useFela } from 'react-fela';
import { Card, Row, Col, Modal, Select, Button, Spin } from 'antd';

import Subscription from '../Payment';
import { config } from '../../config';
import { CardsInfoQueryDocument } from '@adminide-stack/core';

const Option = Select.Option;

const currentYear = (new Date()).getFullYear();
const years = map(Array(20), (el, i) => currentYear + i);
const monthes = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

export interface IPaymentsProps {
    customerData: any;
    cardsList: any;
    styles?: any;
    cardsListRefetch: any;
    deleteCardMutate: (args: any) => any;
    updateCardMutate: (args: any) => any;
}

export interface IPaymentsState {
    showSubsciption: Boolean;
    selectedCard: any;
    showEditCard: Boolean;
    cardMonth: Number;
    cardYear: Number;
}

export function PaymentsComponent(props: any) {

    const [ state, updateState ] = React.useState<any>({
        cardYear: null,
        cardMonth: null,
        selectedCard: null,
        showEditCard: false,
        showSubsciption: false,
    });
    const setState = updates => updateState({ ...state, ...updates });

    const { css } = useFela(props);
    const { cardYear, cardMonth, selectedCard, showEditCard, showSubsciption } = state;
    const { deleteCardMutate, cardsListRefetch, cardsList, updateCardMutate, customerData } = props;

    const addCard = () => {
        setState({ showSubsciption: true });
    };

    const deleteCard = (cardId) => () => {
        deleteCardMutate({
            variables: { cardId },
            update: (store, { data }) => {
                let cars = store.readQuery({
                    query: CardsInfoQueryDocument,
                });
                cars.subscriptionCards = cars.subscriptionCards.filter(el => el.id !== cardId);
                store.writeQuery({ query: CardsInfoQueryDocument, data: cars });
            },
            optimisticResponse: {
                deleteCard: true,
            },
        });
    };

    const editCard = (card) => () => {
        setState({ showEditCard: true, selectedCard: card });
    };

    const handleChangeCardMonth = (value) => {
        setState({ cardMonth: value });
    };

    const handleChangeCardYear = (value) => {
        setState({ cardYear: value });
    };

    const onSubscribe = () => {
        props.cardsListRefetch();
        closeModal();
    };

    const closeModal = () => {
        setState({ showSubsciption: false });
    };

    const closeEditCardModal = () => {
        setState({
            selectedCard: null,
            showEditCard: false,
            cardMonth: null,
            cardYear: null,
        });
    };

    const updateCardData = () => {
        const exp_year = cardYear ? cardYear : selectedCard.exp_year;
        const exp_month = cardMonth ? cardMonth : selectedCard.exp_month;

        updateCardMutate({
            variables: {
                cardId: selectedCard.id,
                cardData: { exp_month, exp_year },
            },
            update: (store, { data }) => {
                let cars = store.readQuery({
                    query: CardsInfoQueryDocument,
                });
                cars.subscriptionCards = cars.subscriptionCards.map(el => {
                    if (el.id === selectedCard.id) {
                        return { ...el, exp_month, exp_year };
                    }
                    return el;
                });
                store.writeQuery({ query: CardsInfoQueryDocument, data: cars });
            },
            optimisticResponse: {
                updateCard: true,
            },
        });
        closeEditCardModal();
    };

    const renderCards = () => {
        if (!cardsList) {
            return <Spin />;
        }

        const element = cardsList.map((card, i) => {
            return (
                <Row key={i} gutter={5} style={styles.row as any}>
                    <Col span={5}>{card.brand}</Col>
                    <Col span={5}>•••• {card.last4}</Col>
                    <Col span={5}>{card.exp_month}/{card.exp_year}</Col>
                    <Col span={4}>
                        <Button style={styles.button} icon="delete" onClick={deleteCard(card.id)}>Delete</Button>
                    </Col>
                    <Col span={4}>
                        <Button style={styles.button} icon="edit" onClick={editCard(card)}>Edit</Button>
                    </Col>
                </Row>
            );
        });
        return cardsList.length ? element : (<div>You don't have that</div>)
    };

    const renderBankAccounts = () => {
        if (!customerData) {
            return <Spin />;
        }

        const element = customerData.bankAccounts.map((account, i) => {

            return (
                <Row key={i} gutter={5} style={styles.row as any}>
                    <Col span={5}>{account.bank_name}</Col>
                    <Col span={5}>{account.account_holder_name}</Col>
                    <Col span={5}>•••• {account.last4}</Col>
                    <Col span={5}>{account.currency}</Col>
                    <Col span={5}>{account.country}</Col>
                </Row>
            );
        });
        return customerData.bankAccounts.length ? element : (<div>You don't have that</div>)
    };

    const renderInvoices = () => {
        if (!customerData) {
            return <Spin />;
        }

        return (
            customerData.invoices.length ? 
            (<div>
                <Row gutter={20} className={css(styles.headerRow)}>
                    <Col span={4}>Amount</Col>
                    <Col span={4}>Currency</Col>
                    <Col span={4}>Status</Col>
                    <Col span={4}>Invoice Number</Col>
                    <Col span={4}>Paymend Due</Col>
                </Row>
                {
                    customerData.invoices.map((invoice, i) => {
                        return (
                            <Row key={i} gutter={20}>
                                <Col span={4}>{invoice.amount_due}</Col>
                                <Col span={4}>{invoice.currency}</Col>
                                <Col span={4}>{invoice.paid && 'Paid'}</Col>
                                <Col span={4}>{invoice.number}</Col>
                                <Col span={4}>{invoice.due_date ? invoice.due_date : '—'}</Col>
                            </Row>
                        );
                    })
                }
            </div>) : <div>You don't have that invoices</div>
        );
    };

    const renderUpcomingInvoices = () => {
        if (!customerData) {
            return <Spin />;
        }

        return (
            customerData.upcomingInvoice.length ?
            (<div>
                <Row gutter={20} className={css(styles.headerRow)}>
                    <Col span={8}>Description</Col>
                    <Col span={3}>QTY</Col>
                    <Col span={3}>Amount</Col>
                    <Col span={3}>Currency</Col>
                    <Col span={7}>Period</Col>
                </Row>
                {
                    customerData.upcomingInvoice.map((invoice, i) => {
                        const startDate = moment.unix(invoice.period.start).format('MM/DD/YYYY');
                        const endDate = moment.unix(invoice.period.end).format('MM/DD/YYYY');
                        return (
                            <Row key={i} gutter={20}>
                                <Col span={8}>{invoice.description}</Col>
                                <Col span={3}>{invoice.quantity}</Col>
                                <Col span={3}>{invoice.amount * 0.01}</Col>
                                <Col span={3}>{invoice.currency}</Col>
                                <Col span={7}>{startDate} - {endDate}</Col>
                            </Row>
                        );
                    })
                }
            </div>) : <div>You don't have that upcoming invoices</div>
        );

    };

    return (
        <div>
            <h2>Payments</h2>
            <Card title="Details" className={css(styles.card)}>
                {customerData && (
                    <div>
                        <div>Unattempted charges: {customerData.account_balance * 0.01} {customerData.currency}</div>
                        <div>Email: {customerData.email}</div>
                        <div>Invoice prefix: {customerData.invoice_prefix}</div>
                    </div>
                )}
            </Card>
            <Card title="Cards" extra={<Button onClick={addCard}>Add card</Button>} className={css(styles.card)}>
                {renderCards()}
            </Card>
            <Card
                title="Bank accounts"
                className={css(styles.card)}
            >
                {renderBankAccounts()}
            </Card>
            <Card title="Invoices" className={css(styles.card)}>
                {renderInvoices()}
            </Card>
            <Card title="Pending invoice items" className={css(styles.card)}>
                {renderUpcomingInvoices()}
            </Card>
            <Modal
                className={css(styles.modal)}
                visible={showSubsciption}
                onCancel={closeModal}
                title="Add Credit Card"
                footer={[]}
            >
                <Subscription
                    onSubscribe={onSubscribe}
                    apiKey={config.STRIPE_PUBLISHABLE_KEY}
                />
            </Modal>
            <Modal
                className={css(styles.modal)}
                visible={showEditCard}
                onCancel={closeEditCardModal}
                onOk={updateCardData}
                title="Edit Card"
                okText="Edit"
            >
                <Row gutter={20}>
                    <Col span={8}>Exp. month</Col>
                    <Col span={8}>
                        <Select
                            className="w-100"
                            onChange={handleChangeCardMonth}
                            defaultValue={selectedCard && selectedCard.exp_month}
                        >
                            {map(monthes, (el, i) => <Option key={i} value={el}>{el}</Option>)}
                        </Select>
                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col span={8}>Exp. year</Col>
                    <Col span={8}>
                        <Select
                            className="w-100"
                            onChange={handleChangeCardYear}
                            defaultValue={selectedCard && selectedCard.exp_year}
                        >
                            {map(years, (el, i) => <Option key={i} value={el}>{el}</Option>)}
                        </Select>
                    </Col>
                </Row>
            </Modal>
        </div>
    );
}

const styles: any = {
    modal: props => ({
        '& button': {
            margin: 0,
        },
    }),
    card: props => ({
        margin: '10px 0',
        '& .ant-card-head': {
            'background': '#F9F9F9',
        },
    }),
    headerRow: props => ({
        padding: '20px 0',
        background: '#f6f9fc',
    }),
    button: {
        margin: 0,
    },
    row: {
        display: 'flex',
        'alignItems': 'center',
    },
    selectCardData: {
        width: '100%',
    },
};
