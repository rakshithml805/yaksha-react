import React from 'react'
import { Container, Box, Typography, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab/';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';


const TagsLists = () => {
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
                        Manage Tags
                    </Typography>
                </Breadcrumbs>
                <Typography variant='h5'>Manage Tags</Typography>
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
                    <Tab value="one" label="Categories" />
                    <Tab value="two" label="Skills" />
                </TabList>
                </Box>
                <TabPanel value="one" sx={{py: 1, px: 0}}>Categories</TabPanel>
                <TabPanel value="two" sx={{py: 1, px: 0}}>Skills</TabPanel>
            </TabContext>
        </Container>
    </Box>
  )
}
export default TagsLists;