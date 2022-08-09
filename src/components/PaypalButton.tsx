import React, { FC } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

interface Props {
  amount: string;
  onPaymentSuccess: (payment: any) => void;
  onPaymentError: (error: any) => void;
}

const PaypalButton: FC<Props> = ({
  amount,
  onPaymentError,
  onPaymentSuccess,
}) => {
  return (
    <PayPalButtons
      style={{ layout: 'vertical', shape: 'rect' }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount,
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order!.capture().then((details) => {
          onPaymentSuccess(details);
        });
      }}
      onError={onPaymentError}
    />
  );
};

export default PaypalButton;
