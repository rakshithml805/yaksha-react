import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Button, Container, Tab, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Banner from '../../_shared/components/banner/banner';

const breadcrumbs = [
    {
        name: "Dashboard",
        url: ""
    }
]

const Author = () => {
  const [value, setValue] = React.useState('one');
  const {t} = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
        <Banner title={t('common.dashboard')} crumbs={breadcrumbs} />
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
                <TabPanel value="one" sx={{py: 1, px: 0}}>
                    <Box className="d-flex" sx={{mb: 4}}>
                        <Typography variant='h1' sx={{mr: 3}}>
                            H1 Tag
                        </Typography>
                        <Typography variant='h2' sx={{mr: 3}}>
                            H2 Tag
                        </Typography>
                        <Typography variant='h3' sx={{mr: 3}}>
                            H3 Tag
                        </Typography>
                        <Typography variant='subtitle1' sx={{mr: 3}}>
                            Subtitle1
                        </Typography>
                        <Typography variant='body1' sx={{mr: 3}}>
                            body1
                        </Typography>
                        <Typography variant='body2' sx={{mr: 3}}>
                            body2
                        </Typography>
                        <Typography variant='caption' sx={{mr: 3}}>
                            caption
                        </Typography>
                    </Box>
                    <Box className="d-flex" sx={{mb: 4}}>
                        <Button variant="contained" color='primary'>
                            Primary
                        </Button>
                        <Button variant="contained" color='secondary'>
                            seconday
                        </Button>
                        <Button variant="outlined" color='primary'>
                            outline
                        </Button>
                        <Button variant="banner">
                            banner
                        </Button>
                    </Box>
                </TabPanel>
                <TabPanel value="two" sx={{py: 1, px: 0}}>{t('common.category')}</TabPanel>
                <TabPanel value="three" sx={{py: 1, px: 0}}>{t('common.categories')}</TabPanel>
                <TabPanel value="four" sx={{py: 1, px: 0}}>Question Performance</TabPanel>
                <TabPanel value="five" sx={{py: 1, px: 0}}>Assessments and Tenants</TabPanel>
            </TabContext>
        </Container>
    </Box>
  )
}
export default Author;