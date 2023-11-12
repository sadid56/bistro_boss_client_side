import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import CallUss from "../CallUs/CallUs";
import OrderOnline from "../Category/Category";
import ChefServic from "../ChefService/ChefServes";
import PopularMenu from "../PopulerMenu/PopularMenu";
import Futured from "../futured/Futured";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
    return ( 
        <div>

            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>

            <Banner/>
            <OrderOnline/>
            <ChefServic/>
            <PopularMenu/>
            <CallUss/>
            <Futured/>
            <Testimonial/>
        </div>
     );
}
 
export default Home;