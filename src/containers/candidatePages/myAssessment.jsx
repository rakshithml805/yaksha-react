import React from 'react';
import { Container, Box, Typography, Tab, Button, Grid, Card, CardContent } from '@mui/material';
import Banner from '../../components/banner/banner';
import { TabContext, TabList, TabPanel } from '@mui/lab/';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { useTranslation } from 'react-i18next';

const breadcrumbs = [
    {
        name: "Dashboard",
        url: "/dashboard"
    },
    {
        name: "My Assessments",
        url: ""
    },
]


const myAssessmentLink = [
    {
        id: 101,
        status: 'Scheduled',
        schedulevalue: 2,
        category: 'Category Name',
        skills: 'Skill name,Skill name,Skill name',
        name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
        type: 'Hackathon',
        attempts: " 03",
        duration: " 10 Mins",
        expiryOn: '31 Oct, 2023',
        result: "START"
    },
    {
        id: 201,
        status: 'Scheduled',
        schedulevalue: 2,
        category: 'Category Name',
        skills: 'Skill name,Skill name,Skill name',
        name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
        type: 'MCQ',
        attempts: " 03",
        duration: " 10 Mins",
        expiryOn: '31 Oct, 2023',
        result: "START"
    },
    {
        id: 301,
        status: 'Published',
        category: 'Category Name',
        skills: 'Skill name,Skill name,Skill name',
        name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
        type: 'Hackathon',
        attempts: " 03",
        duration: " 10 Mins",
        expiryOn: '31 Oct, 2023',
        result: "START"
    },
    {
        id: 401,
        category: 'Category Name',
        status: 'Published',
        skills: 'Skill name,Skill name,Skill name',
        name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
        type: 'Adaptive',
        attempts: " 03",
        duration: " 10 Mins",
        expiryOn: '31 Oct, 2023',
        result: "Completed"
    },
    {
        id: 501,
        category: 'Category Name',
        status: 'Drafts',
        skills: 'Skill name,Skill name,Skill name',
        name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
        type: 'Hackathon',
        attempts: " 03",
        duration: " 10 Mins",
        expiryOn: '31 Aug, 2023',
        result: "Expired"
    },
    {
        id: 601,
        category: 'Category Name',
        status: 'Drafts',
        skills: 'Skill name,Skill name,Skill name',
        name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
        type: 'Adaptive',
        attempts: " 03",
        duration: " 10 Mins",
        expiryOn: '31 Aug, 2023',
        result: "Expired"
    },
]


export const AssessmentList = () => {
    const { t } = useTranslation();
    return (
        <Box>
            <Grid container spacing={3}>
                {
                    myAssessmentLink.map((assessment) =>
                    (
                        <Grid item xs={12} sm={6} md={4} key={assessment.id}>
                            <Card sx={{ border: '1px solid #c4c4c4' }}>
                                <CardContent sx={{ position: 'relative' }}>
                                    <Box sx={{ width: '70%', mt: 1 }}>
                                        <Typography variant='body2' color="text.secondary" sx={{ maxHeight: '44px', overflow: 'hidden' }}>{assessment.category}</Typography>
                                        <Typography variant='caption' color="text.disabled" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{assessment.skills}</Typography>
                                    </Box>
                                    <Box sx={{ mt: 1, mb: 1 }}>
                                        <Typography variant='body2'>{assessment.name}</Typography>
                                    </Box>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={4}>
                                                <Box className='d-flex align-start'>
                                                    <AccessTimeOutlinedIcon sx={{ fontSize: '18px' }} color='error' />
                                                    <Box className="d-flex flex-column">
                                                        <Typography variant='body1'>{assessment.duration}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Box className='d-flex align-start'>
                                                    <LoopOutlinedIcon sx={{ fontSize: '18px' }} color='error' />
                                                    <Typography variant='caption' color="text.disabled">{t('testTracker.attempts')}</Typography>
                                                    <Box className="d-flex flex-column">
                                                        <Typography sx={{ ml: 1 }} variant='body1'>{assessment.attempts}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={4}>

                                            </Grid>
                                            <Grid item xs={4}>
                                                <Box className='d-flex align-start'>
                                                    <AnalyticsOutlinedIcon sx={{ fontSize: '18px' }} color='error' />
                                                    <Box className="d-flex flex-column">
                                                        <Typography variant='caption'>{assessment.type}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Box className="d-flex align-start">
                                                    <CalendarMonthOutlinedIcon className="icon-style" />
                                                    <Typography variant='caption' >{t('common.expiryOn')}</Typography>
                                                    {/* <Box className="d-flex flex-column"> */}
                                                    <Typography variant='caption' sx={{ fontSize: '14px', color: '#7a7a7a' }}>{assessment.expiryOn}</Typography>
                                                    {/* </Box> */}
                                                </Box>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Box className="d-flex align-right">
                                                    {assessment.result == "START" ? <Button sx={{ ml: 6 }} variant="contained" color='primary'>
                                                        {assessment.result}
                                                    </Button> :
                                                        <Typography variant='caption' sx={{ fontSize: '14px', color: '#7a7a7a', ml: 6 }}>{assessment.result}</Typography>

                                                    }
                                                </Box>
                                            </Grid>

                                        </Grid>

                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
            <Box className="d-flex justify-center align-center" sx={{ mt: 4 }}>
                <Typography variant='subtitle1' sx={{ mr: 1 }} color='primary'>{t('common.loadMore')}</Typography>
                <LoopOutlinedIcon color='error' />
            </Box>
        </Box>
    )
}

const MyAssessment = () => {
    const { t } = useTranslation();
    const [value, setValue] = React.useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Banner title={t('common.enrolledAssessment')} crumbs={breadcrumbs} />
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
                            <Tab value="one" label="Self Enrolled" />
                            <Tab value="two" label="Invited" />
                        </TabList>
                    </Box>
                    <TabPanel value="one" sx={{ py: 1, px: 0 }}>
                        <AssessmentList />
                    </TabPanel>
                    <TabPanel value="two" sx={{ py: 1, px: 0 }}>
                        <AssessmentList />
                    </TabPanel>
                </TabContext>
            </Container>
        </Box>
    )
}

export default MyAssessment;