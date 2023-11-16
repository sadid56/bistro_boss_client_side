import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  // const isAdmin = true
  console.log(isAdmin);
  return (
    <div className="flex">
      <div className="w-64 bg-[#D1A054] min-h-screen">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/admin-home">
                  {" "}
                  <FaHome />
                  Admine Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-items">
                  {" "}
                  <FaCalendar /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-items">
                  {" "}
                  <FaShoppingCart />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-booking">
                  {" "}
                  <FaAd /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-users">
                  {" "}
                  <FaList /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/user-home">
                  {" "}
                  <FaHome />
                  Usre Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  {" "}
                  <FaCalendar /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  {" "}
                  <FaShoppingCart /> My carts
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/rivew">
                  {" "}
                  <FaAd /> Add Rivew
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  {" "}
                  <FaList /> My Booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              {" "}
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order">
              {" "}
              <FaList /> Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
