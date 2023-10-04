import React from 'react'
import {
    Box, Container, Grid, TextField, Autocomplete, Button, ListItem, ListItemText, Typography, List, FormControl, InputLabel, OutlinedInput,
    Card, CardContent, InputAdornment, IconButton
} from '@mui/material'

import Banner from '../../_shared/components/banner/banner';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

export default function CreateAssessmentBank() {
    const breadcrumbs = [
        {
            name: "Dashboard",
            url: "/dashboard"
        },
        {
            name: "Create Assesment Bank",
            url: ""
        }
    ]
    const category = ['Web Development', 'Front End', 'Back End', 'AI']
    const skills = ['HTML', 'JAVASCRIPT', 'CSS', 'PYTHON'];
    const subskills1 = ['HTML', 'JAVASCRIPT', 'CSS', 'PYTHON'];
    const subskills2 = ['HTML', 'JAVASCRIPT', 'CSS', 'PYTHON'];
    const tenants = ['Yaksha', 'CA', 'NSEIT', 'Cognizant'];
    const assessmentType = [
        {
            id: 1,
            name: 'All Categories'
        },
        {
            id: 2,
            name: 'Standard Assessment'
        },
        {
            id: 3,
            name: 'Adaptive Assessment'
        },
        {
            id: 4,
            name: 'Hackathon Assessment'
        },
    ]
    const assessments = [
        {
            id: 101,
            category: 'Category Name',
            skills: 'Skill List,Skill List,Skill List',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type: 'Hackathon',
            sections: 3,
            duration: " 10 Mins"
        },
        {
            id: 201,
            category: 'Category Name',
            skills: 'Skill List,Skill List,Skill List',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type: 'MCQ',
            sections: 3,
            duration: " 10 Mins"
        },
        {
            id: 301,
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
            skills: 'Skill List,Skill List,Skill List',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type: 'Adaptive',
            sections: 3,
            duration: " 10 Mins"
        },
        {
            id: 501,
            category: 'Category Name',
            skills: 'Skill List,Skill List,Skill List',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type: 'Hackathon',
            sections: 3,
            duration: " 10 Mins"
        },
        {
            id: 601,
            category: 'Category Name',
            skills: 'Skill List,Skill List,Skill List',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type: 'Adaptive',
            sections: 3,
            duration: " 10 Mins"
        },
    ]
    const selectedAssessments = [
        {
            id: 101,
            category: 'Category Name',
            skills: 'Skill List,Skill List,Skill List',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type: 'Hackathon',
            sections: 3,
            duration: " 10 Mins"
        },
        {
            id: 201,
            category: 'Category Name',
            skills: 'Skill List,Skill List,Skill List',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type: 'MCQ',
            sections: 3,
            duration: " 10 Mins"
        },
        {
            id: 301,
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
            skills: 'Skill List,Skill List,Skill List',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type: 'Adaptive',
            sections: 3,
            duration: " 10 Mins"
        },
        {
            id: 501,
            category: 'Category Name',
            skills: 'Skill List,Skill List,Skill List',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type: 'Hackathon',
            sections: 3,
            duration: " 10 Mins"
        },
        {
            id: 601,
            category: 'Category Name',
            skills: 'Skill List,Skill List,Skill List',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type: 'Adaptive',
            sections: 3,
            duration: " 10 Mins"
        },
    ]
    const assessmentBankStatistics = [
        { id: 1, primary: '1234', secondary: 'Selected Assessments' },
    ];
    const { t } = useTranslation();
    let navigate = useNavigate();
    const navigateToBanks = () => {
        let path = '/assessment-banks';
        navigate(path);
    }
    const [viewSelected, setViewSelected] = React.useState(false);
    const showSelected = () => {
        setViewSelected(!viewSelected);
    }

    return (
        <Box>
            <Banner title={t('createAssessmentBank.createAssessmentBank')} crumbs={breadcrumbs} />
            <Container maxWidth="xl">
                <Box sx={{ my: 4, border: 'dashed', borderColor: '#cbd2dc', padding: '20px', backgroundColor: "#f4f4f4", borderRadius: '7px' }}>
                    <Grid container columnGap={5}>
                        <Grid item xs={4} >
                            <TextField label={t('createAssessmentBank.assessmentBankName')} variant="outlined" required fullWidth className='form-control' />
                        </Grid>
                        <Grid item xs={3}>
                            <Autocomplete
                                disablePortal
                                required
                                options={tenants}
                                renderInput={(params) => <TextField {...params} label="Assign to Tenant" className='form-control' />
                                }
                            />
                        </Grid>
                        <Grid item xs={3} className='d-flex justify-space-between align-center'>
                            <Button variant='contained' onClick={navigateToBanks}>{t('common.create')}</Button>
                            <Button variant="outlined" sx={{ backgroundColor: "white" }} onClick={showSelected} >{!viewSelected ? "VIEW SELECTED" : "ADD MORE"}</Button>
                            <Button variant='contained' color='secondary' onClick={navigateToBanks}>{t('common.cancel')}</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box className="d-flex justify-space-between" sx={{ mb: 4 }}>
                    <Typography variant='h6' color="grey">
                        {!viewSelected ? t('createAssessmentBank.addAssesments') : t('createAssessmentBank.selectedAssessments')}
                    </Typography>
                    <List className="d-flex list" sx={{ p: 0 }}>
                        {
                            assessmentBankStatistics.map((stats) => (
                                <ListItem key={stats.id} sx={{ p: 0, ml: 3 }}>
                                    <ListItemText primary={stats.primary} secondary={stats.secondary} sx={{ m: 0 }} />
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
                {!viewSelected &&
                    (
                        <Box>
                            <Box sx={{ my: 4 }}>
                                <Grid container spacing={3} >
                                    <Grid item xs={3}>
                                        <Autocomplete
                                            disablePortal
                                            options={category}
                                            fullWidth
                                            renderInput={(params) => <TextField {...params} label={t('commonForm.selectCategory')} />}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Autocomplete
                                            disablePortal
                                            options={skills}
                                            fullWidth
                                            renderInput={(params) => <TextField {...params} label={t('commonForm.selectCategory')} />}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Autocomplete
                                            disablePortal
                                            options={subskills1}
                                            fullWidth
                                            renderInput={(params) => <TextField {...params} label={t('commonForm.selectSkill')} />}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Autocomplete
                                            disablePortal
                                            options={subskills2}
                                            fullWidth
                                            renderInput={(params) => <TextField {...params} label={t('commonForm.selectSkill')} />}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Autocomplete
                                            disablePortal
                                            options={assessmentType}
                                            getOptionLabel={(option) => option.name}
                                            fullWidth
                                            renderInput={(params) => <TextField {...params} label={t('commonForm.selectType')} />}
                                        />
                                    </Grid>
                                    <Grid item xs={9}>
                                        <FormControl variant="outlined" fullWidth>
                                            <InputLabel>Search</InputLabel>
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
                                    assessments.map((assessment) =>
                                    (
                                        <Grid item xs={12} sm={6} md={4} key={assessment.id}>
                                            <Card sx={{ border: '1px solid #c4c4c4' }}>
                                                <CardContent sx={{ position: 'relative' }}>
                                                    <Box>
                                                        <Box sx={{ width: '70%' }}>
                                                            <Typography variant='body2' color="text.secondary" sx={{ maxHeight: '44px', overflow: 'hidden' }}>{assessment.category}</Typography>
                                                            <Typography variant='caption' color="text.disabled" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{assessment.skills}</Typography>
                                                        </Box>
                                                        <Box sx={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>
                                                            <Button variant="text" color='error'><AddOutlinedIcon sx={{ cursor: 'pointer' }} />
                                                                <Typography variant='subtitle2'>{t('common.add')}</Typography></Button>
                                                        </Box>
                                                    </Box>
                                                    <Typography variant='subtitle1' sx={{ maxHeight: '56px', overflow: 'hidden', my: 1 }}>{assessment.name}</Typography>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                                                        <Box className='d-flex flex-start'>
                                                            <AnalyticsOutlinedIcon sx={{ fontSize: '18px' }} color='error' />
                                                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                                <Typography variant='body1'>{assessment.type}</Typography>
                                                                <Typography variant='caption' color="text.disabled">{t('common.type')}</Typography>
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
                                <Typography variant='caption' sx={{ mr: 1 }} color='primary'>Load More</Typography>
                                <LoopOutlinedIcon color='error' fontSize='small' />
                            </Box>
                        </Box>
                    )
                }
                {viewSelected &&
                    (
                        <Box>
                            <Grid container spacing={3}>
                                {
                                    selectedAssessments.map((assessment) =>
                                    (
                                        <Grid item xs={12} sm={6} md={4} key={assessment.id}>
                                            <Card sx={{ border: '1px solid #c4c4c4' }}>
                                                <CardContent sx={{ position: 'relative' }}>
                                                    <Box>
                                                        <Box sx={{ width: '70%' }}>
                                                            <Typography variant='body2' color="text.secondary" sx={{ maxHeight: '44px', overflow: 'hidden' }}>{assessment.category}</Typography>
                                                            <Typography variant='caption' color="text.disabled" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{assessment.skills}</Typography>
                                                        </Box>
                                                        <Box sx={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>
                                                            <Button variant="text" color='error'><RemoveOutlinedIcon sx={{ cursor: 'pointer' }} />
                                                                <Typography variant='subtitle2' >{t('common.remove')}</Typography></Button>
                                                        </Box>
                                                    </Box>
                                                    <Typography variant='subtitle1' sx={{ maxHeight: '56px', overflow: 'hidden', my: 1 }}>{assessment.name}</Typography>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                                                        <Box className='d-flex flex-start'>
                                                            <AnalyticsOutlinedIcon sx={{ fontSize: '18px' }} color='error' />
                                                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                                <Typography variant='body1'>{assessment.type}</Typography>
                                                                <Typography variant='caption' color="text.disabled">{t('common.type')}</Typography>
                                                            </Box>

                                                        </Box>
                                                        <Box className='d-flex flex-start'>
                                                            <LayersOutlinedIcon sx={{ fontSize: '18px' }} color='error' />
                                                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                                <Typography variant='body1' >{assessment.sections}</Typography>
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
                            <Box className="d-flex justify-center align-center" sx={{ my: 4 }}>
                                <Typography variant='subtitle1' sx={{ mr: 1 }} color='primary'>{t('common.loadMore')}</Typography>
                                <LoopOutlinedIcon color='error' />
                            </Box>
                        </Box>
                    )
                }
            </Container>
        </Box>
    )
}
