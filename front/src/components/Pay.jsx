import React from "react";
import StripeCheckout from "react-stripe-checkout";

const key =
  "pk_test_51Mk3hWSHUdToPcq8gaPkRmtWGoA9uuuQ8n0QANkSmHaR3r3tAnK6xagbRi7AtiKYRFTHGjPchjyROHr3UAMQTlLf008M0ChoHK";

function Pay() {
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <>
      <div>
        <StripeCheckout
          name="indiancuisine"
          image={"assets/images/breads/b1.jpg"}
          shippingAddress
          billingAddress
          description="my first payment"
          amount={2000}
          token={onToken}
          stripeKey={key}
        >
          <button className="btn btn-primary">Pay</button>
        </StripeCheckout>
      </div>
    </>
  );
}

export default Pay;
