import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    'pk_test_51GvkEADZcX3gY9xKtyybIE6mgw15A4kwwDdYLvcfKjjh52c9g4dDidlKMSvRGqChspS7wI3UJ3m0mkvzgM8gYqOn00Ezkby1xV';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successfull');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing LTD.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
