import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShopify } from "react-icons/fa";
import useCards from "../../../hooks/useCards";

const Navber = () => {

  const {user, logOut} = useContext(AuthContext)
  const [card] = useCards()

  const handleLogOut = ()=>{
    logOut()
    .then()
    .catch(error => console.log(error.message))
  }

    const navLins = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/contact'>Contact Us</NavLink></li>
    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    <li><NavLink to='/menu'>Our Menu</NavLink></li>
    <li><NavLink to='/order'>Order Food</NavLink></li>
    <li><NavLink to='/dashboard/cart'>
      <FaShopify/>
     <div className="badge badge-secondary">+{card.length}</div>
     </NavLink>
     </li>
    </>

    return ( 
        <div className="navbar text-white uppercase bg-black fixed bg-opacity-30 z-10 max-w-screen-xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLins}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      {navLins}
    </ul>
  </div>
  <div className="navbar-end">
   {
    user ?  <button onClick={handleLogOut} className="btn">LogOut</button> :  <Link to='/login' className="btn">Login</Link>
   }
  </div>
</div>
     );
}
 
export default Navber;