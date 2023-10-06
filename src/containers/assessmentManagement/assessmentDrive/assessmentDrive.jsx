import React from 'react'
import {
    Box, Container, Grid, FormControl, InputLabel, Select, MenuItem, OutlinedInput, InputAdornment, IconButton,
    Card, CardContent, Typography, Menu
} from '@mui/material'
import Banner from '../../../_shared/components/banner/banner';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useTranslation } from 'react-i18next';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { NavLink,useParams } from 'react-router-dom';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';


export default function AssessmentDrive() {
    const { tenancyName } = useParams();
    const { t } = useTranslation();
    const breadcrumbs = [
        {
            name: "Dashboard",
            url: `/${tenancyName}/dashboard`
        },
        {
            name: "Assessment Drive",
            url: ""
        }
    ]
    const button = ['Create Assessment Drive', `/${tenancyName}/create-assessment-drives`];
    const status = [
        {
            id: 1,
            name: 'All Status'
        },
        {
            id: 2,
            name: 'Drafts'
        },
        {
            id: 3,
            name: 'Published'
        },
        {
            id: 4,
            name: 'Schedules'
        }
    ];
    const assessmentsBankList = [
        {
            id: 101,
            status: 'Scheduled',
            schedulevalue: 2,
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            level: 2
        },
        {
            id: 201,
            status: 'Scheduled',
            schedulevalue: 2,
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            level: 3,

        },
        {
            id: 301,
            status: 'Published',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            level: 2

        },
        {
            id: 401,
            status: 'Published',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            level: 3,
        },
        {
            id: 501,
            status: 'Drafts',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            level: 2

        },
        {
            id: 601,
            status: 'Drafts',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            level: 3,
        },
    ]
    const options = [
        'Publish',
        'Assign To Tenant',
        'Edit',
        'Delete'
    ];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [selectedstatus, setSelectedStatus] = React.useState('All Status')
    const handleStatusChange = (e) => {
        setSelectedStatus(e.target.value);
    }

    return (
        <Box>
            <Banner title={t('assessmentDrive.assessmentDrive')} crumbs={breadcrumbs} bannerButton={button} />
            <Container maxWidth="xl">
                <Box sx={{ my: 4 }}>
                    <Grid container columnSpacing={3}>
                        <Grid item xs={3}>
                            <FormControl fullWidth>
                                <InputLabel>{t('commonForm.selectStatus')}</InputLabel>
                                <Select
                                    fullWidth
                                    value={selectedstatus}
                                    label={t('commonForm.selectStatus')}
                                    onChange={handleStatusChange}>
                                    {status.map((item) => (<MenuItem value={item.name} key={item.id}>{item.name}</MenuItem>)
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={9}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel>{t('commonForm.search')}</InputLabel>
                                <OutlinedInput placeholder={t('commonForm.search')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton edge="end">
                                                <SearchOutlinedIcon color='primary' />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label={t('commonForm.search')}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container spacing={3}>
                    {
                        assessmentsBankList.map((assessment) =>
                        (
                            <Grid item xs={12} sm={6} md={4} key={assessment.id}>
                                <Card sx={{ border: '1px solid #c4c4c4' }}>
                                    <CardContent sx={{ position: 'relative' }}>
                                        <Box>
                                            <Box>
                                                {
                                                    assessment.status === "Scheduled" ? (
                                                        <Box sx={{ padding: '0px 5px', backgroundColor: '#f0fadd', borderRadius: '4px', display: 'flex', width: 'fit-content' }}>
                                                            <Typography variant='caption' sx={{ color: '#6a941b' }}>{assessment.status}</Typography>
                                                            <Typography variant='caption' sx={{ color: '#153776', ml: 1 }}>{assessment.schedulevalue}</Typography>
                                                        </Box>
                                                    ) : (null)
                                                }
                                                {
                                                    assessment.status === "Published" ? (
                                                        <Typography variant='caption' sx={{ padding: '0px 5px', backgroundColor: '#e8f2fb', color: '#2768a8', borderRadius: '4px' }}>{assessment.status}</Typography>
                                                    ) : (null)
                                                }
                                                {
                                                    assessment.status === "Drafts" ? (
                                                        <Typography variant='caption' sx={{ padding: '0px 5px', backgroundColor: '#ffe8c3', color: '#ff9e02', borderRadius: '4px' }}>{assessment.status}</Typography>
                                                    ) : (null)
                                                }
                                            </Box>
                                            <Box sx={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>
                                                <IconButton
                                                    aria-controls={open ? 'long-menu' : undefined}
                                                    aria-expanded={open ? 'true' : undefined}
                                                    aria-haspopup="true"
                                                    onClick={handleClick}
                                                >
                                                    <MoreVertIcon />
                                                </IconButton>
                                                <Menu
                                                    anchorEl={anchorEl}
                                                    open={open}
                                                    onClose={handleClose}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'right',
                                                    }}
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}>
                                                    {options.map((option) => (
                                                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </Menu>
                                            </Box>
                                        </Box>
                                        <NavLink to="assessment-drive-detail">
                                            <Typography variant='subtitle1' sx={{ maxHeight: '56px', overflow: 'hidden', my: 1 }}>{assessment.name}</Typography>
                                        </NavLink>
                                        <Box >
                                            <Box className='d-flex flex-start'>
                                                <AnalyticsOutlinedIcon sx={{ fontSize: '18px' }} color='error' />
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Typography variant='body1'>{assessment.level}</Typography>
                                                    <Typography variant='caption' color="text.disabled" >{t('common.levels')}</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
                <Box className="d-flex align-center justify-center" sx={{ width: "100%", my: 3 }}>
                    <Typography variant='caption' sx={{ mr: 1 }} color='primary'>{t('common.levels')}</Typography>
                    <LoopOutlinedIcon color='error' fontSize='small' />
                </Box>
            </Container>
        </Box>
    )
}
