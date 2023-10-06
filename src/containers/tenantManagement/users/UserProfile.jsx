import React from 'react';
import { Box, Container, Divider, Grid, Avatar, Typography, Stack, IconButton, Button, Tab, FormControl, Select, MenuItem } from '@mui/material';
import Banner from '../../../_shared/components/banner/banner';
import { useTranslation } from 'react-i18next';
import profileImage from '../../../assets/2.jpg';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import HourglassTopOutlinedIcon from '@mui/icons-material/HourglassTopOutlined';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { useParams } from 'react-router-dom';


export default function UserProfile() {
    const { tenancyName } = useParams();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { t } = useTranslation();
    const breadcrumbs = [
        {
            name: "Dashboard",
            url: `/${tenancyName}/dashboard`
        },
        {
            name: "Users",
            url: `/${tenancyName}/users`
        },
        {
            name: "User Profile",
            url: ""
        }
    ];

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const upcommingSchedulesList = [
        {
            id: 1,
            assessmentType: 'Adaptive',
            type: 'Public Link',
            duration: '65 mins',
            name: 'MFA Assessment Intermediate Java',
            startDate: '12 Aug 2023 ',
            startTime:"10:30 AM",
            endDate: '12 Aug 2023 ',
            endTime:"11:30 AM"
        },
        {
            id: 2,
            assessmentType: 'Standard',
            type: 'Invited',
            duration: '65 mins',
            name: 'MFA Assessment Intermediate Java',
            startDate: '15 Aug 2023',
            startTime:"10:30 AM",
            endDate: '15 Aug 2023',
            endTime:"11:30 AM"
        }
    ];
    const [selectedMonth, setSelectedMonth] = React.useState('January');
    const [daysInMonth, setDaysInMonth] = React.useState([]);
    // Function to generate days for the selected month
    const generateDays = (month) => {
        const days = [];
        const year = new Date().getFullYear(); // You can set the desired year here

        // Create a Date object for the selected month and year
        const startDate = new Date(`${month} 1, ${year}`);
        const endDate = new Date(year, startDate.getMonth() + 1, 0);

        for (let day = 1; day <= endDate.getDate(); day++) {
            days.push(day);
        }

        return days;
    };

    // Handle month selection change
    const handleMonthChange = (event) => {
        const selectedMonth = event.target.value;
        const days = generateDays(selectedMonth);
        setSelectedMonth(selectedMonth);
        setDaysInMonth(days);
    };
    React.useEffect(() => {
        const initialDays = generateDays(selectedMonth);
        setDaysInMonth(initialDays);
    }, [selectedMonth]);



    return (
        <Box>
            <Banner title={t('userProfile.userProfile')} crumbs={breadcrumbs} />
            <Container maxWidth="xl">
                <Grid container sx={{ my: 2 }}>
                    <Grid item xs={3}>
                        <Box className="d-flex justify-start align-center">
                            <Avatar
                                alt="Remy Sharp"
                                src={profileImage}
                                sx={{ width: 130, height: 130 }}
                            />
                            <Box sx={{ ml: 1 }} className="d-flex flex-column align-start justify-center">
                                <Typography variant='subtitle1'>Canon Jenings</Typography>
                                <Typography variant='body1' color='text.offwhite' sx={{ my: 0.5 }}>Adminstrator</Typography>
                                <Typography variant='body1' color='text.offwhite'>Yaksha</Typography>
                                <Stack direction="row" spacing={1}>
                                    <IconButton color="primary">
                                        <FacebookOutlinedIcon />
                                    </IconButton>
                                    <IconButton color="primary">
                                        <TwitterIcon />
                                    </IconButton>
                                    <IconButton color="primary">
                                        <LinkedInIcon />
                                    </IconButton>
                                </Stack>
                            </Box>
                        </Box>
                        <Typography variant='caption' sx={{ mt: 1 }} color="text.offwhite">{t('common.email')}</Typography>
                        <Typography variant='body2'>abc@gmai.com</Typography>
                        <Typography variant='caption' sx={{ mt: 1 }} color="text.offwhite">{t('common.phone')}</Typography>
                        <Typography variant='body2'>+91 710689636</Typography>
                        <Grid container columnSpacing={2} sx={{ my: 2 }}>
                            <Grid item xs={6}>
                                <Box className="d-flex align-center">
                                    <EditOutlinedIcon sx={{ fontSize: '30px' }} color='error' />
                                    <Box sx={{ ml: 1 }}>
                                        <Typography variant='subtitle1' color="primary">76%</Typography>
                                        <Typography variant='caption' color="text.offwhite">{t('common.averageScore')}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box className="d-flex align-center">
                                    <HourglassTopOutlinedIcon sx={{ fontSize: '30px' }} color='error' />
                                    <Box sx={{ ml: 1 }}>
                                        <Typography variant='subtitle1' color="primary">76%</Typography>
                                        <Typography variant='caption' color="text.offwhite">{t('common.averageTimeTaken')}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={2}>
                            <Grid item xs={4}>
                                <Box className="d-flex justify-center flex-column dashed-border" sx={{ p: 1 }}>
                                    <Typography variant='body2' textAlign='center'>12</Typography>
                                    <Typography variant='caption' textAlign='center' color="text.offwhite">{t('userProfile.completedAssesment')}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className="d-flex justify-center flex-column dashed-border" sx={{ p: 1 }}>
                                    <Box className='d-flex align-center justify-center'>
                                        <Typography variant='body2'>12</Typography>
                                        <NorthOutlinedIcon color='success' />
                                    </Box>
                                    <Typography variant='caption' textAlign='center' color="text.offwhite">{t('userProfile.clearedAssessment')}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className="d-flex justify-center flex-column dashed-border" sx={{ p: 1 }}>
                                    <Box className='d-flex align-center justify-center'>
                                        <Typography variant='body2'>12</Typography>
                                        <SouthOutlinedIcon color='error' />
                                    </Box>
                                    <Typography variant='caption' textAlign='center' color="text.offwhite">{t('userProfile.failedAssessment')}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Divider sx={{ my: 3 }} />
                        <Box>
                            <Typography variant='h3' sx={{ mb: 1 }}>{t('userProfile.education')}</Typography>
                            <Box className='d-flex justify-center align-center flex-column dashed-border' sx={{ minHeight: '150px' }}>
                                <Typography variant='caption' color="text.offwhite">{t('userProfile.eduactionInformationNotAvailable')}</Typography>
                                <Button variant="outlined">{t('userProfile.addEducation')}</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Divider orientation="vertical" flexItem sx={{ mx: 2 }}></Divider>
                    <Grid item xs>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} className='tab-menu-container'>
                                    <Tab label={t('userProfile.overview')} value="1" />
                                    <Tab label={t('testTracker.standardAssessment')} value="2" />
                                    <Tab label={t('userProfile.codingAssessment')} value="3" />
                                    <Tab label={t('userProfile.projectAssessment')} value="4" />
                                    <Tab label={t('common.report')} value="5" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Box className='d-flex justify-space-between align-center'>
                                    <Typography variant="h3">{t('userProfile.upcommingSchedules')}</Typography>
                                    <FormControl sx={{ width: '150px' }} size="small">
                                        <Select
                                            value={selectedMonth}
                                            onChange={handleMonthChange}
                                        >
                                            {
                                                months.map((month, index) =>
                                                (
                                                    <MenuItem value={month} key={index}>{month}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box className='d-flex flex-wrap' sx={{my:3}}>
                                    {daysInMonth.map((day) => (
                                        <Box key={day} className='date-container d-flex justify-center align-center' sx={{mr:2,mb:2}}>
                                            <Typography variant='body1'>{day}</Typography>
                                        </Box>

                                    ))}
                                </Box>
                                <Grid container columnSpacing={2}>
                                    {upcommingSchedulesList.map((item) =>
                                    (
                                        <Grid item key={item.id} xs={6}>
                                            <Box sx={{ borderLeft: '5px solid', pl: 2, borderColor: 'text.disabled' }}>
                                                <Grid container columnSpacing={2}>
                                                    <Grid item xs={3}>
                                                        <Typography variant='caption' color='text.secondary'>
                                                            {item.assessmentType}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3} className='d-flex align-center'>
                                                        <AccessTimeOutlinedIcon fontSize="small" sx={{ mr: 1 }} color='error' />
                                                        <Typography variant='caption' color='text.secondary'>
                                                            {item.duration}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant='caption' color='text.secondary'>
                                                            {item.type}
                                                        </Typography>
                                                    </Grid>
                                                </Grid >
                                                <Typography variant='body2' sx={{ my: 1 }} color="primary">{item.name}</Typography>
                                                <Box className="d-flex align-center justify-space-between" sx={{ my: 0.5 }}>
                                                    <Box className="d-flex align-center justify-space-between">
                                                        <InsertInvitationOutlinedIcon color='error' fontSize="small" sx={{ mr: 1 }} />
                                                        <Typography variant='caption' color='text.secondary'>
                                                            {item.startDate} -
                                                        </Typography>
                                                        <Typography variant='caption' color='text.secondary'>
                                                            {item.startTime}
                                                        </Typography>
                                                        <Typography variant='caption' color='text.secondary' sx={{ mx: 1 }}>
                                                            -
                                                        </Typography>
                                                        <Typography variant='caption' color='text.secondary'>
                                                            {item.endDate} `-
                                                        </Typography>
                                                        <Typography variant='caption' color='text.secondary'>
                                                            {item.endTime}
                                                        </Typography>
                                                    </Box>
                                                    <Typography variant='caption' color='primary'>
                                                        {t('common.viewDetails')}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </TabPanel>
                            <TabPanel value="2">Item Two</TabPanel>
                            <TabPanel value="3">Item Three</TabPanel>
                            <TabPanel value="4">Item four</TabPanel>
                            <TabPanel value="5">Item Five</TabPanel>
                        </TabContext>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}
