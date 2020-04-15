import * as _ from 'lodash';
import * as React from 'react';
import { compose } from 'redux';
import { graphql } from 'react-apollo';
import { Form, Button, Input } from 'antd';
import { CardElement, Elements, StripeProvider, injectStripe } from 'react-stripe-elements';

import { SubscribeDocument, AddCardDocument } from '@adminide-stack/core';

const { Item } = Form;

export const withContext = () => WrappedComponent => props => (
  <StripeProvider {...props}>
    <Elements>
      <WrappedComponent {...props} />
    </Elements>
  </StripeProvider>
);

export class SubscriptionComponent extends React.Component<any, any> {
  private handleSubmit = async ev => {
    ev.preventDefault();

    const { onToken, onError, form, onSubscribe, subscribe, addCardMutate } = this.props;

    try {
      const values = await this.validate(form);
      const token = await this.props.stripe.createToken();
      const data = Object.assign({}, values, token);
      onToken && onToken(data);
      if (onSubscribe) {
        // const result = await subscribe(data);
        addCardMutate({
          variables: { input: transform(data) },
        });
        onSubscribe();
      }
    } catch (e) {
      onError(e);
    }
  }

  private async validate(form) {
    return new Promise((resolve, reject) => {
      form.validateFields((err, values) => {
        if (err) {
          reject(err);
        } else {
          resolve(values);
        }
      });
    });
  }

  public render() {
    const { form } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Item label="Name">
          {form.getFieldDecorator('name', { rules: [{ required: 'true' }] })(
            <Input type="text" />,
          )}
        </Item>
        <Item label="Card Information">
          <CardElement />
        </Item>
        <Button htmlType="submit" type="primary">Add card</Button>
      </Form>
    );
  }
}

const transform = ({ token: { id, card: { last4, exp_year, exp_month, brand } } }) =>
  ({ expiryMonth: exp_month, expiryYear: exp_year, brand, last4, token: id });

const WithForm = compose(
  Form.create(),
  graphql(SubscribeDocument, {
    props: ({ mutate }: any): Partial<any> => ({ subscribe: data => mutate({ variables: { input: transform(data) } }) }) }),
  graphql(AddCardDocument, { name: 'addCardMutate' }),
)(SubscriptionComponent as any) as any;
const WithStripe = injectStripe(WithForm);


export default withContext()(WithStripe);
