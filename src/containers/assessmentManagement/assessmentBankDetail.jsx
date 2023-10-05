import React from 'react';
import {
    Box, Container, Grid, Autocomplete, TextField, FormControl, InputAdornment, InputLabel, OutlinedInput,
    Card, CardContent, Typography, IconButton, Menu, MenuItem
} from '@mui/material';
import Banner from '../../_shared/components/banner/banner';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useTranslation } from 'react-i18next';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { NavLink, useParams } from 'react-router-dom';

export default function AssessmentBankDetail() {
    const { tenancyName } = useParams();
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
            url: ""
        }
    ]
    const { t } = useTranslation();
    const categoryList = [
        { id: 0, type: 'All Categories' },
        { id: 1, type: 'Artificial Intelligence' },
        { id: 2, type: 'Machine Learning' },
        { id: 3, type: 'Web Development' },
        { id: 4, type: 'Full Stack' }
    ];
    const primarySkillList = [
        { id: 0, type: 'All Skills' },
        { id: 1, type: 'CSS' },
        { id: 2, type: 'Javascript' },
        { id: 3, type: 'Python' },
        { id: 4, type: 'Java' }
    ];
    const secondarySkillList = [
        { id: 0, type: 'All Skills' },
        { id: 1, type: 'CSS' },
        { id: 2, type: 'Javascript' },
        { id: 3, type: 'Python' },
        { id: 4, type: 'Java' }
    ];
    const subSkillList = [
        { id: 0, type: 'All Skills' },
        { id: 1, type: 'CSS' },
        { id: 2, type: 'Javascript' },
        { id: 3, type: 'Python' },
        { id: 4, type: 'Java' }
    ];
    const typeList = [
        { id: 0, type: 'All Types' },
        { id: 1, type: 'Artificial Intelligence' },
        { id: 2, type: 'Machine Learning' },
        { id: 3, type: 'Web Development' },
        { id: 4, type: 'Full Stack' }
    ];
    const assessmentsBankList = [
        {
            id: 101,
            status: 'Scheduled',
            schedulevalue: 2,
            category: 'Category Name',
            skills: 'Skill List,Skill List,Skill List',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type: 'Hackathon',
            sections: 3,
            duration: " 10 Mins"
        },
        {
            id: 201,
            status: 'Scheduled',
            schedulevalue: 2,
            category: 'Category Name',
            skills: 'Skill List,Skill List,Skill List',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type: 'MCQ',
            sections: 3,
            duration: " 10 Mins"
        },
        {
            id: 301,
            status: 'Published',
            category: 'Category Name',
            skills: 'Skill List,Skill List,Skill List',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type: 'Hackathon',
            sections: 3,
            duration: " 10 Mins"
        },
        {
            id: 401,
            category: 'Category Name',
            status: 'Published',
            skills: 'Skill List,Skill List,Skill List',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type: 'Adaptive',
            sections: 3,
            duration: " 10 Mins"
        },
        {
            id: 501,
            category: 'Category Name',
            status: 'Drafts',
            skills: 'Skill List,Skill List,Skill List',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type: 'Hackathon',
            sections: 3,
            duration: " 10 Mins"
        },
        {
            id: 601,
            category: 'Category Name',
            status: 'Drafts',
            skills: 'Skill List,Skill List,Skill List',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type: 'Adaptive',
            sections: 3,
            duration: " 10 Mins"
        },
    ]
    const options = [
        'New Schedule',
        'Assign To Tenant',
        'Assign to Assessment Bank',
        'Move to Draft Request',
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
    return (
        <Box>
            <Banner title={t('assesmentBankDetail.assesmentBankDetail')} crumbs={breadcrumbs} />
            <Container maxWidth="xl">
                <Box sx={{ my: 4 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <Autocomplete
                                disablePortal
                                options={categoryList}
                                getOptionLabel={(option) => option.type}
                                fullWidth
                                defaultValue={categoryList[0]}
                                renderInput={(params) => <TextField {...params} label={t('commonForm.selectCategory')} />}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Autocomplete
                                disablePortal
                                options={primarySkillList}
                                getOptionLabel={(option) => option.type}
                                fullWidth
                                defaultValue={primarySkillList[0]}
                                renderInput={(params) => <TextField {...params} label={t('commonForm.selectPrimarySkill')} />}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Autocomplete
                                disablePortal
                                options={secondarySkillList}
                                getOptionLabel={(option) => option.type}
                                fullWidth
                                defaultValue={secondarySkillList[0]}
                                renderInput={(params) => <TextField {...params} label={t('commonForm.selectSecondarySkill')} />}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Autocomplete
                                disablePortal
                                options={subSkillList}
                                getOptionLabel={(option) => option.type}
                                fullWidth
                                defaultValue={subSkillList[0]}
                                renderInput={(params) => <TextField {...params} label={t('commonForm.selectSubSkill')} />}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Autocomplete
                                disablePortal
                                options={typeList}
                                getOptionLabel={(option) => option.type}
                                fullWidth
                                defaultValue={typeList[0]}
                                renderInput={(params) => <TextField {...params} label={t('commonForm.selectType')} />}
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="search">{t('commonForm.search')}</InputLabel>
                                <OutlinedInput
                                    id="search"
                                    type={'text'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <SearchOutlinedIcon />
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
                                        <Box sx={{ width: '70%', mt: 1 }}>
                                            <Typography variant='body2' color="text.secondary" sx={{ maxHeight: '44px', overflow: 'hidden' }}>{assessment.category}</Typography>
                                            <Typography variant='caption' color="text.disabled" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{assessment.skills}</Typography>
                                        </Box>
                                        <NavLink to="assessment-details">
                                            <Typography variant='subtitle1' sx={{ maxHeight: '56px', overflow: 'hidden', my: 1 }}>{assessment.name}</Typography>
                                        </NavLink>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                                            <Box className='d-flex flex-start'>
                                                <AnalyticsOutlinedIcon sx={{ fontSize: '18px' }} color='error' />
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Typography variant='body1'>{assessment.type}</Typography>
                                                    <Typography variant='caption' color="text.disabled" >{t('common.type')}</Typography>
                                                </Box>

                                            </Box>
                                            <Box className='d-flex flex-start'>
                                                <LayersOutlinedIcon sx={{ fontSize: '18px' }} color='error' />
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Typography variant='body1'>{assessment.sections}</Typography>
                                                    <Typography variant='caption' color="text.disabled">{t('common.sections')}</Typography>
                                                </Box>
                                            </Box>
                                            <Box className='d-flex flex-start'>
                                                <AccessTimeOutlinedIcon sx={{ fontSize: '18px' }} color='error' />
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Typography variant='body1'>{assessment.duration}</Typography>
                                                    <Typography variant='caption' color="text.disabled">{t('common.duration')}</Typography>
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
                    <Typography variant='caption' sx={{ mr: 1 }} color='primary'>{t('common.loadMore')}</Typography>
                    <LoopOutlinedIcon color='error' fontSize='small' />
                </Box>
            </Container>
        </Box>
    )
}
