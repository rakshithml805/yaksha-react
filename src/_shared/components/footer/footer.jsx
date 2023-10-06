import React from "react";
import { Box, Container, Toolbar, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useLocation } from 'react-router-dom';

function Footer(){
    const location = useLocation();
    const hideFooterForPaths = ['/','/forgotPassword', '/resetPassword'];
    if(hideFooterForPaths.includes(location.pathname)) {
      return <></>;
    }
    return(
        <Box sx={{borderTop: '1px solid #CECECE', opacity: '0.6', mt:3}}>
            <Toolbar>
                <Container maxWidth="xl">
                    <Box sx={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <Box sx={{display: 'flex', gap:'2em'}}>
                            <Button variant="text" size="small" sx={{fontSize:'0.8em'}} startIcon={<PhoneIcon />}>080 4680 8098</Button>
                            <Button variant="text" size="small" sx={{fontSize:'0.8em'}} startIcon={<MailOutlineIcon />}>techademy@iiht.com</Button>
                            <Button variant="text" size="small" sx={{fontSize:'0.8em'}}>Privacy Policy</Button>
                        </Box>
                        <Box sx={{fontSize:'0.8em'}}>
                            All Rights Reserved by Techademy Learning Solutions Private Limited
                        </Box>
                    </Box>
                </Container>
            </Toolbar>
        </Box>
    );
}
export default Footer;