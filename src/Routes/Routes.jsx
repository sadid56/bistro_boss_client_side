import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../Authentication/Login";
import Registation from "../Authentication/Registation";
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/menu',
                element: <Menu/>
            },
            {
                path: '/order',
                element: <Order/>
            }
        ],
      
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/registration',
        element: <Registation/>
    },
    {
    path: '/dashboard',
    element: <Dashboard/>,
    children: [
        {
            path: '/dashboard/cart',
            element: <Cart/>
        }
    ]
    }
])
 
export default Routes;