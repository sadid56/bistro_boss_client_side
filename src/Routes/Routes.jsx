import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../Authentication/Login";
import Registation from "../Authentication/Registation";
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";
import Private from "./Private";
import ALlUsers from "../pages/dashboard/AllUsers/AllUsers";
import AddItem from "../pages/dashboard/addItems/AddItems";
import AdminRoute from "./AdminRout";
import ManageItems from "../pages/dashboard/ManageItems/ManagItems";
import UpdateMenu from "../pages/dashboard/UpdateMenu/UpdateMenu";

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
    element: <Private><Dashboard/></Private>,
    children: [
        {
            path: '/dashboard/cart',
            element: <Cart/>
        },
        // admine related
        {
            path: '/dashboard/all-users',
            element: <ALlUsers/>
        },
        {
            path:'/dashboard/add-items',
            element: <AdminRoute><AddItem/></AdminRoute>
        },
        {
            path: '/dashboard/manage-items',
            element: <AdminRoute><ManageItems/></AdminRoute>
        },
        {
            path: '/dashboard/update-items/:id',
            element: <AdminRoute><UpdateMenu/></AdminRoute>,
            loader: ({params})=> fetch(`http://localhost:8000/menu/${params.id}`)
        }
    ]
    }
])
 
export default Routes;