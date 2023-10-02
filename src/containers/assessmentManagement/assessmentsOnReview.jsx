import React from "react";
import { Box, Container, Grid, Autocomplete, TextField, FormControl,InputLabel, OutlinedInput, InputAdornment, IconButton, Card, CardContent,
        Typography, Select, MenuItem  } from "@mui/material";

import Banner from '../../../_shared/components/banner/banner';
import { useTranslation } from 'react-i18next';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';


export default function AssessmentsOnReview(){
    const breadcrumbs = [
        {
            name: "Dashboard",
            url: "/dashboard"
        },
        {
            name: "Assessments on Review",
            url: ""
        }
    ];
    const {t} = useTranslation();
    const assessmentsBanks=[
        {
            id:1,
            name:'All Assessment Banks'
        },
        {
            id:2,
            name:'Assessment Bank 2'
        },
        {
            id:3,
            name:'Assessment Bank 3'
        },
    ]
    const status=[
        {
            id:1,
            name:'All Status'         
        },
        {
            id:2,
            name:'Expired'
        },
        {
            id:3,
            name:'Pending'
        }
    ];
    const assessmentsBanksList = [
        {
            id:1,
            category:"Category Name 1",
            status:'Expired',
            skills:'Skill Name 1, Skill Name 2, Skill Name 3',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for Lorem Ipsom are sample text for Lorem Ipsom are sample text for',
            created:'25th June 2023',
            expiry:'30th june 2023',
            approved:23,
            rejected:14,
            suggested:34,
            pending:20
        },
        {
            id:2,
            category:"Category Name 2",
            status:'Pending Review',
            skills:'Skill Name 1, Skill Name 2, Skill Name 3,Skill Name 1, Skill Name 2, Skill Name 3',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            created:'25th June 2023',
            expiry:'30th june 2023',
            approved:23,
            rejected:14,
            suggested:34,
            pending:20
        },
        {
            id:3,
            category:"Category Name 3",
            status:'Pending Review',
            skills:'Skill Name 1, Skill Name 2, Skill Name 3',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            created:'25th June 2023',
            expiry:'30th june 2023',
            approved:23,
            rejected:14,
            suggested:34,
            pending:20
        },
        {
            id:4,
            category:"Category Name 4",
            status:'Expired',
            skills:'Skill Name 1, Skill Name 2, Skill Name 3',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            created:'25th June 2023',
            expiry:'30th june 2023',
            approved:23,
            rejected:14,
            suggested:34,
            pending:20
        },
        {
            id:5,
            category:"Category Name 5",
            status:'Pending Review',
            skills:'Skill Name 1, Skill Name 2, Skill Name 3',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            created:'25th June 2023',
            expiry:'30th june 2023',
            approved:23,
            rejected:14,
            suggested:34,
            pending:20
        }
    ]
    const [selectedstatus,setSelectedStatus] = React.useState('All Status')
    const [selectedBank, setSelectedBank] = React.useState('All Assessment Banks');
    const handleStatusChange = (e) => {
        setSelectedStatus(e.target.value);
    }
    const handleAssessmentChange = (e) => {
        setSelectedBank(e.target.value);
    }
    
    return(
        <Box>
            <Banner title={t('assessmentsOnReview.assessmentsOnReview')} crumbs={breadcrumbs} />
            <Container maxWidth="xl">
                <Box sx={{my:4}}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel>{t('assessmentsOnReview.selectAssessmentBank')}</InputLabel>
                                <Select
                                    value={selectedBank}
                                    label="Select Assessment Bank"
                                    onChange={handleAssessmentChange}>
                                    {assessmentsBanks.map((item) => (<MenuItem value={item.name} key={item.id}>{item.name}</MenuItem>)
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
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
                        <Grid item xs={6}>
                            <FormControl  variant="outlined" fullWidth>
                                <InputLabel>{t('commonForm.search')}</InputLabel>
                                <OutlinedInput  placeholder={t('commonForm.search')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <SearchOutlinedIcon color='primary'/>
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
                    { assessmentsBanksList.map((assessment) => 
                        (
                            <Grid item xs={12} sm={6} md={4} key={assessment.id}>
                                <Card sx={{border: '1px solid #c4c4c4'}}>
                                    <CardContent sx={{position: 'relative'}}>
                                        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                                            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                                <Box sx={{width:'60%'}}>
                                                    <Typography variant='body2' color='text.disabled' sx={{maxHeight:'44px',overflow:'hidden'}}>{assessment.category}</Typography>
                                                    <Typography variant='caption' color='text.disabled' maxHeight={17} sx={{display:'block',overflow:'hidden'}}>{assessment.skills}</Typography>
                                                </Box>
                                                <Box sx={{position: 'absolute', top: 10, right: 10, zIndex: 10,display:'flex',alignItems:'center'}}>
                                                    <Box>
                                                        { assessment.status === "Pending Review" ? (
                                                            <Typography variant='caption' sx={{fontWeight:'500',padding:'0px 5px',backgroundColor:'#ffe8c3',color:'#ff9e02',borderRadius:'4px'}}>{assessment.status}</Typography>
                                                        ):(
                                                            <Typography variant='caption' sx={{fontWeight:'500',padding:'0px 5px',backgroundColor:'#ffe0e5',color:'#ac0521',borderRadius:'4px'}}>{assessment.status}</Typography>
                                                        )}
                                                    </Box>
                                                </Box> 
                                            </Box>
                                            <Typography variant='subtitle2' sx={{fontWeight:'500',maxHeight:'44px',overflow:'hidden',my:1}}>{assessment.name}</Typography>
                                            <Box>
                                                <Grid container columnGap={4} rowGap={2}>
                                                    <Grid item >
                                                        <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                                            <EventOutlinedIcon sx={{fontSize:'16px',mr:0.5}} color='error'/>
                                                            <Box sx={{display:'flex',flexDirection:'column'}}>
                                                                <Typography variant='body1' lineHeight={1}>{assessment.created}</Typography>
                                                                <Typography variant='caption' color='text.disabled'>{t('common.createdOn')}</Typography>
                                                            </Box>
                                                        </Box> 
                                                    </Grid>
                                                    <Grid item>
                                                        <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                                            <EventOutlinedIcon sx={{fontSize:'16px',mr:0.5}} color='error'/>
                                                            <Box sx={{display:'flex',flexDirection:'column'}}>
                                                                <Typography variant='body1' lineHeight={1}>{assessment.expiry}</Typography>
                                                                <Typography variant='caption' color='text.disabled'>{t('common.expiryDate')}</Typography>
                                                            </Box>
                                                        </Box> 
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Grid container columnSpacing={4} >
                                                            <Grid item>
                                                                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                                                    <QuestionMarkOutlinedIcon sx={{fontSize:'16px',mr:0.5}} color='error'/>
                                                                    <Box sx={{display:'flex',flexDirection:'column'}}>
                                                                        <Typography  variant='body1' lineHeight={1}>{assessment.approved}</Typography>
                                                                        <Typography variant='caption' color='text.disabled'>{t('common.approved')}</Typography>
                                                                    </Box>
                                                                </Box>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography  variant='body1' lineHeight={1}>{assessment.approved}</Typography>
                                                                <Typography variant='caption' color='text.disabled'>{t('common.rejected')}</Typography>

                                                            </Grid>
                                                            <Grid item>                                                              
                                                                <Typography  variant='body1' lineHeight={1}>{assessment.approved}</Typography>
                                                                <Typography variant='caption' color='text.disabled'>{t('common.suggested')}</Typography>
                                                            </Grid>
                                                            <Grid item>                                                                
                                                                <Typography variant='body1' lineHeight={1}>{assessment.approved}</Typography>
                                                                <Typography variant='caption' color='text.disabled'>{t('common.pending')}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Box> 
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid> 
                <Box sx={{display:'flex',justifyContent:'center',mt:4}}>
                <Typography variant='subtitle1' sx={{mr:1}} color='primary'> {t('common.loadMore')}</Typography>
                <LoopOutlinedIcon color='error'/>
            </Box> 
            </Container>
        </Box>
    )
}