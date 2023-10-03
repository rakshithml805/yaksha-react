 
import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import useAuthGuard from '../../useAuthGuard';

const Layout = (props) => {
    const loggedInUserDetailsStore = useSelector((state) => state.loggedInUserDetails);
    const state = useAuthGuard();
    
    if (loggedInUserDetailsStore.loading) {
        return <>Loading...</>
    }
    if (!loggedInUserDetailsStore.data) {
        return <Navigate to="/default/login" replace={true} />
    }
    

    return (
        <Box sx={{height:'100vh', display: 'flex', flexDirection:'column', justifyContent: 'space-between'}}>
            <Header />
            <div>
                {props.children}
            </div>
            <Footer />
        </Box>
    )
}

export default Layout;