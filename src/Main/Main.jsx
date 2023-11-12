import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navber from "../pages/Shared/Navber/Navber";

const Main = () => {
    return ( 
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
     );
}
 
export default Main;