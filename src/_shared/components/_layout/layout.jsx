 
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
    
    const isRouteHasAccess = () => {
        const allMenus = [...menuObj.assesmentMenu, ...menuObj.questionsMenu, ...menuObj.tenantsMenu, ...menuObj.resoursesMenu, ...menuObj.profileMenu];
        const foundMenu = allMenus.find(ele => ele.to === match.pathname);
        if(match.pathname === `/${tenancyName}/dashboard`) {
            return true;
        }
        if (foundMenu && foundMenu.roles &&foundMenu.roles.some(ele => ele === userRolePermission.userRole)) {
            return true;
        }
        return false
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