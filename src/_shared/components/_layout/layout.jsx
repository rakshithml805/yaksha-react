 
import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useMatch, useParams } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import useAuthGuard from '../../useAuthGuard';
import useUserRolePermissions from '../../userRolePermissions';

const Layout = (props) => {
    const state = useAuthGuard();
    const menuObj = useUserRolePermissions();
    const { tenancyName } = useParams();
    const location = useLocation();
    const match = useMatch(location.pathname);
    const localUserDetails = JSON.parse(localStorage.getItem("loggedInUserDetails"));
    const loggedInUserDetailsStore = useSelector((state) => state.loggedInUserDetails);

    if (loggedInUserDetailsStore.loading && !localUserDetails && !loggedInUserDetailsStore.data) {
        return <Navigate to={`/${tenancyName}/login`} replace={true} />
    }
    if (loggedInUserDetailsStore.loading) {
        return <>Loading...</>
    }    
    const { userRolePermissions } = loggedInUserDetailsStore.data;
    const { result: userRolePermission } = userRolePermissions;
    const assessmentMenu =  menuObj.getMenu.get(userRolePermission.userRole).find(ele => ele.menu === "assessments");
    const questionsMenu =  menuObj.getMenu.get(userRolePermission.userRole).find(ele => ele.menu === "questions");
    const tenantsMenu =  menuObj.getMenu.get(userRolePermission.userRole).find(ele => ele.menu === "tenants");
    const resoursesMenu =  menuObj.getMenu.get(userRolePermission.userRole).find(ele => ele.menu === "resourses");
    const profileMenu =  menuObj.getMenu.get(userRolePermission.userRole).find(ele => ele.menu === "profile");
    const reportsMenu =  menuObj.getMenu.get(userRolePermission.userRole).find(ele => ele.menu === "reports");

    
    
    const isRouteHasAccess = () => {
        let hasAccess = false;
        const allMenus = [...menuObj.assesmentMenu, ...menuObj.questionsMenu, ...menuObj.tenantsMenu, ...menuObj.resoursesMenu, ...menuObj.profileMenu];
        const foundMenu = allMenus.find(ele => ele.to === match.pathname);
        if (foundMenu && foundMenu.roles &&foundMenu.roles.some(ele => ele === userRolePermission.userRole)) {
            hasAccess = true;
        }
        return hasAccess
    }
    
    return (
        <Box sx={{height:'100vh', display: 'flex', flexDirection:'column', justifyContent: 'space-between'}}>
            <Header />
            <Box>
                <div>
                    {loggedInUserDetailsStore.loading ? <>Loading...</> : <>
                        {isRouteHasAccess() ? props.children : "NO ACCESS"}
                    </>}
                </div>                
            </Box>
            
            <Footer />
        </Box>
    )
}

export default Layout;