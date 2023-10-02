import { createBrowserRouter } from "react-router-dom";
import Layout from "./_shared/components/_layout/layout";
import Login from "./containers/Account/Login/Login";
import AdminDashboard from './containers/dashboard/AdminDashboard';
import TagsLists from './containers/manageResources/manageTags/tagsList';

const router = createBrowserRouter([
    // common
    {
        path: "/",
        element: <Login />,
    },    
    {
      path: ":tenancyName/login",
      element: <Login />,
    },    
    // routes as per persona
    {
      path: "/dashboard",
      element: (<Layout><AdminDashboard /></Layout> ),
    },
    // ::TODO:: 
    // 
    {
      path: "/tags",
      element: (<Layout><TagsLists /></Layout> ),
    },
    {
      path: "*",
      element: (<>Page Not Found</>),
    },
  ]);
  export default router;