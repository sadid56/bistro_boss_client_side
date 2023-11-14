import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return ( 
        <div className="flex">
            <div className="w-64 bg-[#D1A054] min-h-screen">
                <ul className="menu">
                    <li><NavLink to='/dashboard/user-home'> <FaHome/>Usre Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'> <FaCalendar/> Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/cart'> <FaShoppingCart/> My carts</NavLink></li>
                    <li><NavLink to='/dashboard/rivew'> <FaAd/> Add Rivew</NavLink></li>
                    <li><NavLink to='/dashboard/bookings'> <FaList/> My Booking</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'> <FaHome/>Home</NavLink></li>
                    <li><NavLink to='/order'> <FaList/> Menu</NavLink></li>
                </ul>
            </div>
            <div className="w-full">
                <Outlet/>
            </div>
        </div>
     );
}
 
export default Dashboard;