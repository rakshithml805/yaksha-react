 
import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import useAuthGuard from '../../useAuthGuard';
import { useParams, useLocation, useMatch } from 'react-router-dom';

const Layout = (props) => {
    const { tenancyName } = useParams();
    const location = useLocation();
    const match = useMatch(location.pathname);
    const localUserDetails = JSON.parse(localStorage.getItem("loggedInUserDetails"));
    const loggedInUserDetailsStore = useSelector((state) => state.loggedInUserDetails);
    const state = useAuthGuard();
    
    if (loggedInUserDetailsStore.loading && !localUserDetails && !loggedInUserDetailsStore.data) {
        return <Navigate to={`/${tenancyName}/login`} replace={true} />
    }
    if (loggedInUserDetailsStore.loading) {
        return <>Loading...</>
    }    
    // console.info(`====location========`, location.pathname)
    // console.info(`====match========`, match)
    return (
        <Box sx={{height:'100vh', display: 'flex', flexDirection:'column', justifyContent: 'space-between'}}>
            <Header />
            <div>
                {loggedInUserDetailsStore.loading ? <>Loading...</> : <>{props.children}</>}
            </div>
            <Footer />
        </Box>
    )
}

export default Layout;