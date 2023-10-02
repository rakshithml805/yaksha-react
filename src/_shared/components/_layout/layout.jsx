
import { Box } from '@mui/material';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
const Layout = (props) => {
    return (<>
    <Box sx={{height:'100vh', display: 'flex', flexDirection:'column', justifyContent: 'space-between'}}>
        <Header />
        <div>
            {props.children}
        </div>
        <Footer />
      </Box>
    
    </>)
}

export default Layout;