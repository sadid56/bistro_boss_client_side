import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../Authentication/Login";
import Registation from "../Authentication/Registation";

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
    }
])
 
export default Routes;