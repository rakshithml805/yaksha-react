import React from 'react';
import AdminDashboard from './AdminDashboard';
import { useSelector } from 'react-redux';
import { Role } from '../../_shared/helper';


const Dashboard = () => {
    const loggedInUserDetailsStore = useSelector((state) => state.loggedInUserDetails.data);
    const { userRole } = loggedInUserDetailsStore.userRolePermissions.result;


    const loadDashbord = () => {
        if (!userRole) {
            return;
        }
        switch (userRole) {
            case Role.superAdmin:
                return <AdminDashboard />;
            case Role.tenantAdmin:
                return <AdminDashboard /> ;           
            case Role.tenantUser:
                return <AdminDashboard />;        
            case Role.reviewer:
                return <AdminDashboard />;    
            case Role.evaluator:
                return <AdminDashboard />;
            case Role.candidate:
                return <AdminDashboard /> 
            case Role.author:
                return <AdminDashboard /> 
            default:
                return <>Role is not Present</>;            
        }
    }
  return (
    <>
        {loadDashbord()}       
    </>
  )
}
export default Dashboard;