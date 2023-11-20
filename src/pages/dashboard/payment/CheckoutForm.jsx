import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure, { axiosSexure } from "../../../hooks/useAxiosSecure";
import useCards from "../../../hooks/useCards";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const {user} = useAuth()
  const stripe = useStripe();
  const element = useElements();
  const [error, setError] = useState("");
  const [clintSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState('')
  const axiosSecure = useAxiosSecure();
  const [items, refetch] = useCards();
  const navigate = useNavigate()
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  useEffect(() => {

   if(totalPrice > 0){
    axiosSecure
    .post("/create-peyment-intent", { price: totalPrice })
    .then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });

   }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !element) {
      return;
    }

    const card = element.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      // console.log('peyment error', error);
      setError(error.message);
    } else {
      console.log("peyment method", paymentMethod);
      setError("");
    }

    // confirm peyment
    const {paymentIntent, error: confirmError}= await stripe.confirmCardPayment(clintSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        }
      }
    })
    if(confirmError){
      console.log('confim errror', confirmError.message);
    }
    else{
      console.log('peyment intent', paymentIntent);
      if(paymentIntent.status === 'succeeded'){
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id)


        //*now save the payment
        const payment = {
          email: user?.email,
          price: totalPrice,
          date: new Date(),
          cardIds: items.map(item => item?._id),
          menuItemIds: items.map(item => item?.menuId),
          status: 'pending',
          transactionId: paymentIntent.id
        }

        console.log(payment);

        const res = axiosSexure.post('/payments', payment)
        console.log(res.data);
        refetch()
        if(res.data?.result?.insertedId){
          alert('payment success')
          navigate('/dashboard/payment-history')
        }
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          className="btn btn-sm btn-primary my-4"
          type="submit"
          disabled={!stripe || !clintSecret}>
          Pay
        </button>
        <p className="text-red-500">{error}</p>
        {
          transactionId && <p className="text-success text-xl">Your Transtaction id: {transactionId}</p>
        }
      </form>
    </div>
  );
};

export default CheckoutForm;
