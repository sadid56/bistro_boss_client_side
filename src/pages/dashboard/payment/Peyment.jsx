import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const Peyment = () => {
    const stripePromiss = loadStripe('pk_test_51OEBrkL70yxcRZ4CcKLXwW3LCRir1xPbPSE9gLmSBKDSLjgepAnRyVCpk0gIk2kBWjnGV5FsaCMWVhZ9TgqtMx6400xn1cV6VW')
    return (  
        <div>
            <SectionTitle heading={'Payment'} title={'peyment now'}/>

            <div>
                <Elements stripe={stripePromiss}>
                    <CheckoutForm/>
                </Elements>
            </div>
        </div>
     );
}
 
export default Peyment;