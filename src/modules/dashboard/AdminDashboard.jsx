import React from 'react'
import { Container, Box, Typography, Tab } from '@mui/material';
import {TabContext, TabList, TabPanel} from '@mui/lab/';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';


const AdminDashboard = () => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{minHeight: '200vh'}}>
        <Box className="banner">
            <Container maxWidth="xl">
                <Breadcrumbs sx={{mb:1}}>
                    <Typography sx={{ display: 'flex', alignItems: 'center' }} fontSize="small" color="secondary">
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Dashboard
                    </Typography>
                </Breadcrumbs>
                <Typography variant='h5'>Dashboard</Typography>
            </Container>
        </Box>
        <Container maxWidth="xl">
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} 
                    textColor='inherit' 
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "#AC0521",
                        }
                    }}
                    sx={{
                        ".Mui-selected": {
                            color: "#AC0521"
                        },
                    }}>
                    <Tab value="one" label="Dashboard" />
                    <Tab value="two" label="Question Bank" />
                    <Tab value="three" label="Question Bank Report" />
                    <Tab value="four" label="Question Performance" />
                    <Tab value="five" label="Assessments and Tenants" />
                </TabList>
                </Box>
                <TabPanel value="one" sx={{py: 1, px: 0}}>Dashboard</TabPanel>
                <TabPanel value="two" sx={{py: 1, px: 0}}>Question Bank</TabPanel>
                <TabPanel value="three" sx={{py: 1, px: 0}}>Question Bank Report</TabPanel>
                <TabPanel value="four" sx={{py: 1, px: 0}}>Question Performance</TabPanel>
                <TabPanel value="five" sx={{py: 1, px: 0}}>Assessments and Tenants</TabPanel>
            </TabContext>
        </Container>
    </Box>
  )
}
export default AdminDashboard;