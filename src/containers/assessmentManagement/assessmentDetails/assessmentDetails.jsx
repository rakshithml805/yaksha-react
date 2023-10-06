import React, { useState } from "react";
import {
    Box, Container, Typography, Grid, Stack, Chip, Avatar, Button, Tab, TableHead, TableRow, Paper, IconButton, TableSortLabel
} from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement,
    LineElement, Title, Tooltip, Legend, ArcElement
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LaptopWindowsOutlinedIcon from '@mui/icons-material/LaptopWindowsOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ScoreboardOutlinedIcon from '@mui/icons-material/ScoreboardOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import HourglassTopOutlinedIcon from '@mui/icons-material/HourglassTopOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import Banner from '../../../_shared/components/banner/banner';
import { useTranslation } from 'react-i18next';
import { TabContext, TabList, TabPanel } from '@mui/lab/';
import AssessmentBasicInfo from "./assessmentBasicInfo";
import AssessmentQuestions from "./assessmentQuestions";
import AssessmentSchedules from "./assessmentSchedules";

const assessmentStats = {
    id: 1, type: 'Standard', sections: '03', userAttempted: '46743',
    questions: '55', duration: '65 Mins', avgTimeTaken: '58 Mins',
    author: 'FirstName LastName', authorAvatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    createdOn: '21 Jan 2023', publishedDate: '20 May 2023',
    reviewer: 'FirstName LastName', reviewerAvatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            align: 'end'
        },
        title: {
            display: false,
        },
    },
};

const doughnutOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
            align: 'center'
        },
        title: {
            display: false,
        },
    },
};

const questionAgeData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Attempts',
            data: [390, 300, 400, 210, 450, 380, 250],
            borderColor: '#1976d2',
            backgroundColor: '#1976d2',
        },
        {
            label: 'Correct Answers',
            data: [290, 200, 310, 140, 325, 290, 140],
            borderColor: '#9ade18',
            backgroundColor: '#9ade18',
        },
    ],
};

const attemptSummaryData = {
    labels: ['Attempted', 'Correct', 'Wrong', 'Skipped'],
    datasets: [
        {
            label: '# of Votes',
            data: [25, 25, 25, 25],
            backgroundColor: [
                '#59adff', '#c1ef67', '#fd9191', '#ffbe7f',
            ],
            borderColor: [
                '#59adff', '#c1ef67', '#fd9191', '#ffbe7f',
            ],
            borderWidth: 1,
        },
    ],
};

const mcoList = [
    { id: 1, option: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: 2, option: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: 3, option: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: 4, option: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: 5, option: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: 6, option: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
]

const questionTag = {
    title: 'Frontend Developer',
    tags: ['Javascript', 'Angular', 'React', 'SASS']
};

const AssessmentDetails = () => {
    const { t } = useTranslation();
    const { tenancyName } = useParams();
    const [value, setValue] = React.useState('one');
    let location = useLocation();

    const breadcrumbs = [
        {
            name: "Dashboard",
            url: `/${tenancyName}/dashboard`
        },
        {
            name: "Assesment Banks",
            url: `/${tenancyName}/assessment-banks`
        },
        {
            name: "Assesments",
            url: `/${tenancyName}/assessment-banks/assessment-bank-detail`
        },
        {
            name: "Assesment Details",
            url: ""
        }
    ]
   
    const upcomingSchedulesList = [
        {
            id: 1,
            type: 'Public Link',
            startDate: '12 Aug 2023 - 10:30 AM',
            endDate: '12 Aug 2023 - 10:30 AM'
        },
        {
            id: 2,
            type: 'Invited',
            startDate: '12 Aug 2023 - 10:30 AM',
            endDate: '12 Aug 2023 - 10:30 AM'
        }
    ];
  
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box>
                <Banner title={location.state} crumbs={breadcrumbs} />

                <Container maxWidth="xl">
                    <Grid container spacing={2} sx={{ my: 1 }}>
                        <Grid item xs={4} sx={{ borderRight: 'solid 1px #dadada', pr: 3 }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} sx={{ mb: 3 }}>
                                        <Box className="d-flex align-start">
                                            <LaptopWindowsOutlinedIcon className="icon-style" />
                                            <Box className="d-flex flex-column">
                                                <Typography variant='caption' sx={{ fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a' }}>{assessmentStats.type}</Typography>
                                                <Typography sx={{ fontSize: '12px', color: '#849cb0' }}>{t('common.type')}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6} sx={{ mb: 3 }}>
                                        <Box className="d-flex align-start">
                                            <AnalyticsOutlinedIcon className="icon-style" />
                                            <Box className="d-flex flex-column">
                                                <Typography variant='caption' sx={{ fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a' }}>{assessmentStats.sections}</Typography>
                                                <Typography sx={{ fontSize: '12px', color: '#849cb0' }}>{t('common.sections')}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6} sx={{ mb: 3 }}>
                                        <Box className="d-flex align-start">
                                            <PeopleAltOutlinedIcon className="icon-style" />
                                            <Box className="d-flex flex-column">
                                                <Typography variant='caption' sx={{ fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a' }}>{assessmentStats.userAttempted}</Typography>
                                                <Typography sx={{ fontSize: '12px', color: '#849cb0' }}>{t('common.userAttempted')}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6} sx={{ mb: 3 }}>
                                        <Box className="d-flex align-start">
                                            <ScoreboardOutlinedIcon className="icon-style" />
                                            <Box className="d-flex flex-column">
                                                <Typography variant='caption' sx={{ fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a' }}>{assessmentStats.questions}</Typography>
                                                <Typography sx={{ fontSize: '12px', color: '#849cb0' }}>{t('common.question')}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6} sx={{ mb: 3 }}>
                                        <Box className="d-flex align-start">
                                            <AccessTimeOutlinedIcon className="icon-style" />
                                            <Box className="d-flex flex-column">
                                                <Typography variant='caption' sx={{ fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a' }}>{assessmentStats.duration}</Typography>
                                                <Typography sx={{ fontSize: '12px', color: '#849cb0' }}>{t('common.duration')}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6} sx={{ mb: 3 }}>
                                        <Box className="d-flex align-start">
                                            <HourglassTopOutlinedIcon className="icon-style" />
                                            <Box className="d-flex flex-column">
                                                <Typography variant='caption' sx={{ fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a' }}>{assessmentStats.avgTimeTaken}</Typography>
                                                <Typography sx={{ fontSize: '12px', color: '#849cb0' }}>{t('common.avgTimeTaken')}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6} sx={{ mb: 3 }}>
                                        <Box className="d-flex align-start">
                                            <Avatar sx={{ mr: 1 }} alt={assessmentStats.author} src={assessmentStats.authorAvatar} />
                                            <Box className="d-flex flex-column">
                                                <Typography variant='caption' sx={{ fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a' }}>{assessmentStats.author}</Typography>
                                                <Typography sx={{ fontSize: '12px', color: '#849cb0' }}>{t('common.author')}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6} sx={{ mb: 3 }}>
                                        <Box className="d-flex align-start justify-end">
                                            <CalendarMonthOutlinedIcon className="icon-style" />
                                            <Box className="d-flex flex-column">
                                                <Typography variant='caption' sx={{ fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a' }}>{assessmentStats.createdOn}</Typography>
                                                <Typography sx={{ fontSize: '12px', color: '#849cb0' }}>{t('common.createdOn')}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6} sx={{ mb: 3 }}>
                                        <Box className="d-flex align-start">
                                            <CalendarMonthOutlinedIcon className="icon-style" />
                                            <Box className="d-flex flex-column">
                                                <Typography variant='caption' sx={{ fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a' }}>{assessmentStats.publishedDate}</Typography>
                                                <Typography sx={{ fontSize: '12px', color: '#849cb0' }}>{t('common.publishedDate')}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6} sx={{ mb: 3 }}>
                                        <Box className="d-flex align-start">
                                            <Box className="d-flex flex-column align-end">
                                                <Typography variant='caption' sx={{ fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a', textAlign: 'right' }}>{assessmentStats.reviewer}</Typography>
                                                <Typography sx={{ fontSize: '12px', color: '#849cb0' }}>{t('common.reviewer')}</Typography>
                                            </Box>
                                            <Avatar sx={{ ml: 1 }} alt={assessmentStats.reviewer} src={assessmentStats.reviewerAvatar} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box>
                                <Box className="d-flex align-start" sx={{ borderTop: 'solid 2px #e6e6e6', mt: 2, pt: 4 }}>
                                    <Typography variant="h6" sx={{ color: '#676767' }}>{t('common.upcomingSchedules')}</Typography>
                                    <Button sx={{ marginLeft: "auto" }} variant="outlined" color='primary'>
                                        Schedule
                                    </Button>
                                </Box>
                                <Grid container rowSpacing={2}>
                                    {upcomingSchedulesList.map((item) =>
                                    (
                                        <Grid item key={item.id} xs={12}>
                                            <Box sx={{ borderLeft: '5px solid', pl: 2, borderColor: 'text.disabled' }}>
                                                <Typography variant='caption' color='text.secondary'>
                                                    {item.type}
                                                </Typography>
                                                <Box className="d-flex align-center" sx={{ my: 0.5 }}>
                                                    <InsertInvitationOutlinedIcon color='error' />
                                                    <Typography variant='caption' color='text.secondary'>
                                                        {item.startDate}
                                                    </Typography>
                                                    <Typography variant='caption' color='text.secondary' sx={{ mx: 1 }}>
                                                        -
                                                    </Typography>
                                                    <Typography variant='caption' color='text.secondary'>
                                                        {item.endDate}
                                                    </Typography>
                                                </Box>
                                                <Typography variant='caption' color='primary'>
                                                    {t('common.viewDetails')}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>

                            <Box sx={{ borderTop: 'solid 2px #e6e6e6', mt: 2, pt: 4 }}>
                                <Typography variant="h6" sx={{ color: '#676767' }}>{t('common.assessmentAge')}</Typography>
                                <Line options={chartOptions} data={questionAgeData} />
                            </Box>

                            <Box sx={{ borderTop: 'solid 2px #e6e6e6', mt: 4, pt: 4 }}>
                                <Typography variant="h6" sx={{ color: '#676767' }}>{t('common.attemptSummary')}</Typography>
                                <Box sx={{ position: 'relative' }}>
                                    <Doughnut options={doughnutOptions} data={attemptSummaryData} radius="10" />
                                    <Typography sx={{ fontSize: '16px', color: '#676767', position: 'absolute', top: '196px', left: '98px', width: '100px', textAlign: 'center' }}>4534</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={8} sx={{ paddingLeft: '20px !important' }}>
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
                                        <Tab value="one" label="Basic Info" />
                                        <Tab value="two" label="Questions" />
                                        <Tab value="three" label="Schedules" />
                                    </TabList>
                                </Box>
                                <TabPanel value="one" sx={{ py: 1, px: 0 }}>
                                <AssessmentBasicInfo />
                                </TabPanel>
                                <TabPanel value="two" sx={{ py: 1, px: 0 }}>
                                 <AssessmentQuestions />
                                </TabPanel>
                                <TabPanel value="three" sx={{ py: 1, px: 0 }}>
                                 <AssessmentSchedules />
                                </TabPanel>
                            </TabContext>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </>
    )
}

export default AssessmentDetails;