import { createBrowserRouter } from "react-router-dom";
import Layout from "./_shared/components/_layout/layout";
import Login from "./containers/Account/Login/Login";
import AdminDashboard from './containers/dashboard/AdminDashboard';

const router = createBrowserRouter([
    // common
    {
        path: "/",
        element: <Login />,
    },    
    {
      path: "/login",
      element: <Login />,
    },    
    // routes as per persona
    {
      path: "/dashboard",
      element: (<Layout><AdminDashboard /></Layout> ),
    },
    {
      path: "*",
      element: (<>Page Not Found</>),
    },
  ]);
  export default router;