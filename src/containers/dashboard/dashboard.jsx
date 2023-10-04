import React from 'react';
import Admin from './Admin';
import TenantAdmin from './TenantAdmin';
import TenantUser from './TenantUser';
import Reviewer from './Reviewer';
import Evaluator from './Evaluator';
import Candidate from './Candidate';
import Author from './Author';
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
                return <Admin />;
            case Role.tenantAdmin:
                return <TenantAdmin /> ;           
            case Role.tenantUser:
                return <TenantUser />;        
            case Role.reviewer:
                return <Reviewer />;    
            case Role.evaluator:
                return <Evaluator />;
            case Role.candidate:
                return <Candidate /> 
            case Role.author:
                return <Author /> 
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