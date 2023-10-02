import React from "react";
import { 
    Box, Container, Breadcrumbs, Typography, Grid, Stack, Chip, Avatar
} from '@mui/material';
import { NavLink } from 'react-router-dom';
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
import Banner from "../../components/banner/banner";
import { useTranslation } from 'react-i18next';
import './questionDetail.scss';

const questionStats = {
    id:1, proficiency: 'Advanced', assessments: '345', userAttempted: '46743', 
    score: '15', duration: '03 Mins', avgTimeTaken: '02:15 Mins', 
    author: 'FirstName LastName', authorAvatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50', 
    createdOn: '21 Jan 2023', publishedDate: '20 May 2023', 
    reviewer: 'FirstName LastName', reviewerAvatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
}

ChartJS.register (
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
    {id: 1, option: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {id: 2, option: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {id: 3, option: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {id: 4, option: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {id: 5, option: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {id: 6, option: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
]

const questionTag = {
    title: 'Frontend Developer',
    tags: ['Javascript', 'Angular', 'React', 'SASS']
};

const hintList = [
    {id: 1, hint: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
    {id: 2, hint: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"}
]

const breadcrumbs = [
    {
        name: "Dashboard",
        url: "/dashboard"
    },
    {
        name: "Question Banks",
        url: "/question-banks"
    },
    {
        name: "Default Question Bank",
        url: "/question-bank-details"
    },
    {
        name: "Question Detail",
        url: ""
    }
]

const QuestionDetail = () => {
    const {t} = useTranslation();

    return (
        <>
            <Box>
                <Banner title={t('common.multipleChoiceOptions')} crumbs={breadcrumbs} />

                <Container maxWidth="xl">
                    <Grid container spacing={2} sx={{my:1}}>
                        <Grid item xs={4} sx={{borderRight: 'solid 1px #dadada', pr: 3}}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} sx={{mb:3}}>
                                        <Box className="d-flex align-start">
                                            <LaptopWindowsOutlinedIcon className="icon-style"/>
                                            <Box className="d-flex flex-column">
                                                <Typography variant='caption' sx={{fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a'}}>{questionStats.proficiency}</Typography>
                                                <Typography sx={{fontSize:'12px', color: '#849cb0'}}>{t('common.proficiency')}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6} sx={{mb:3}}>
                                        <Box className="d-flex align-start">
                                            <AnalyticsOutlinedIcon className="icon-style"/>
                                            <Box className="d-flex flex-column">
                                                <Typography variant='caption' sx={{fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a'}}>{questionStats.assessments}</Typography>
                                                <Typography sx={{fontSize:'12px', color: '#849cb0'}}>{t('common.assessments')}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6} sx={{mb:3}}>
                                        <Box className="d-flex align-start">
                                            <PeopleAltOutlinedIcon className="icon-style"/>
                                            <Box className="d-flex flex-column">
                                                <Typography variant='caption' sx={{fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a'}}>{questionStats.userAttempted}</Typography>
                                                <Typography sx={{fontSize:'12px', color: '#849cb0'}}>{t('common.userAttempted')}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6} sx={{mb:3}}>
                                        <Box className="d-flex align-start">
                                            <ScoreboardOutlinedIcon className="icon-style"/>
                                            <Box className="d-flex flex-column">
                                                <Typography variant='caption' sx={{fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a'}}>{questionStats.score}</Typography>
                                                <Typography sx={{fontSize:'12px', color: '#849cb0'}}>{t('common.score')}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6} sx={{mb:3}}>
                                        <Box className="d-flex align-start">
                                            <AccessTimeOutlinedIcon className="icon-style"/>
                                            <Box className="d-flex flex-column">
                                                <Typography variant='caption' sx={{fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a'}}>{questionStats.duration}</Typography>
                                                <Typography sx={{fontSize:'12px', color: '#849cb0'}}>{t('common.duration')}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6} sx={{mb:3}}>
                                        <Box className="d-flex align-start">
                                            <HourglassTopOutlinedIcon className="icon-style"/>
                                            <Box className="d-flex flex-column">
                                                <Typography variant='caption' sx={{fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a'}}>{questionStats.avgTimeTaken}</Typography>
                                                <Typography sx={{fontSize:'12px', color: '#849cb0'}}>{t('common.avgTimeTaken')}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6} sx={{mb:3}}>
                                        <Box className="d-flex align-start">
                                            <Avatar sx={{mr: 1}} alt={questionStats.author} src={questionStats.authorAvatar} />
                                            <Box className="d-flex flex-column">
                                                <Typography variant='caption' sx={{fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a'}}>{questionStats.author}</Typography>
                                                <Typography sx={{fontSize:'12px', color: '#849cb0'}}>{t('common.author')}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6} sx={{mb:3}}>
                                        <Box className="d-flex align-start justify-end">
                                            <CalendarMonthOutlinedIcon className="icon-style"/>
                                            <Box className="d-flex flex-column">
                                                <Typography variant='caption' sx={{fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a'}}>{questionStats.createdOn}</Typography>
                                                <Typography sx={{fontSize:'12px', color: '#849cb0'}}>{t('common.createdOn')}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6} sx={{mb:3}}>
                                        <Box className="d-flex align-start">
                                            <CalendarMonthOutlinedIcon className="icon-style"/>
                                            <Box className="d-flex flex-column">
                                                <Typography variant='caption' sx={{fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a'}}>{questionStats.publishedDate}</Typography>
                                                <Typography sx={{fontSize:'12px', color: '#849cb0'}}>{t('common.publishedDate')}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6} sx={{mb:3}}>
                                        <Box className="d-flex align-start">
                                            <Box className="d-flex flex-column align-end">
                                                <Typography variant='caption' sx={{fontSize: '16px', lineHeight: '1.2', color: '#7a7a7a', textAlign: 'right'}}>{questionStats.reviewer}</Typography>
                                                <Typography sx={{fontSize:'12px', color: '#849cb0'}}>{t('common.reviewer')}</Typography>
                                            </Box>
                                            <Avatar sx={{ml: 1}} alt={questionStats.reviewer} src={questionStats.reviewerAvatar} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box sx={{borderTop: 'solid 2px #e6e6e6', mt: 2, pt: 4}}>
                                <Typography variant="h6" sx={{color:'#676767'}}>{t('common.questionAge')}</Typography>
                                <Line options={chartOptions} data={questionAgeData} />
                            </Box>

                            <Box sx={{borderTop: 'solid 2px #e6e6e6', mt: 4, pt: 4}}>
                                <Typography variant="h6" sx={{color:'#676767'}}>{t('common.attemptSummary')}</Typography>
                                <Box sx={{position: 'relative'}}>
                                    <Doughnut options={doughnutOptions} data={attemptSummaryData} radius="10" />
                                    <Typography sx={{fontSize: '16px', color:'#676767', position: 'absolute', top: '196px', left: '98px', width: '100px', textAlign: 'center'}}>4534</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={8} sx={{paddingLeft: '20px !important'}}>
                            <Box>
                                <Typography variant="h6" sx={{color:'#676767'}}>{t('common.description')}</Typography>
                                <Typography variant="body2" sx={{mt: 1, lineHeight: '27px'}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Typography>
                                <Typography variant="body2" sx={{mt: 2, lineHeight: '27px'}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </Typography>
                                <Typography variant="subtitle1" sx={{mt: 2, mb: 1, color: '#7c96ab'}}>
                                    {questionTag.title}
                                </Typography>
                                <Stack direction="row" spacing={2}>
                                    {
                                        questionTag.tags.map((tag) => (
                                            <Chip label={tag} key={tag} />
                                        ))
                                    }
                                </Stack>
                            </Box>

                            <Box sx={{mt: 3, pt: 2, borderTop: 'solid 1px #d6d6d6'}}>
                                <Typography variant="h6" sx={{color:'#676767', mb: 2}}>{t('common.multipleChoiceOptions')}</Typography>
                                <Grid container spacing={3} className="mco-list">
                                    {
                                        mcoList.map((list) => (
                                            <Grid item xs={6} key={list.id}>
                                                <Typography variant="body2" sx={{lineHeight: '27px'}}>{list.option}</Typography>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Box>

                            <Box sx={{mt: 3, pt: 2, borderTop: 'solid 1px #d6d6d6'}}>
                                <Typography variant="h6" sx={{color:'#676767', mb: 2}}>{t('common.hints')}</Typography>
                                <Grid container spacing={3}>
                                    {
                                        hintList.map((hint) => (
                                            <Grid item xs={6} key={hint.id}>
                                                <Typography variant="body2" sx={{lineHeight: '27px'}}>{hint.hint}</Typography>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default QuestionDetail;