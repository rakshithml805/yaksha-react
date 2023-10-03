
import { Box } from '@mui/material';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Layout = (props) => {
    const navigate = useNavigate();
    const loggedInUserDetailsStore = useSelector((state) => state.loggedInUserDetails.data);
    if (!loggedInUserDetailsStore) {
        navigate('/default/login')
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