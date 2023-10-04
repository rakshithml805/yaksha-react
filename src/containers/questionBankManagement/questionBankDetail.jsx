import React from "react";
import { 
    Box, Container, Typography, TextField, Grid,
    Autocomplete, FormControl, InputLabel, OutlinedInput,
    InputAdornment, Card, CardContent, List, ListItem, ListItemText, IconButton
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import ScoreboardOutlinedIcon from '@mui/icons-material/ScoreboardOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import Banner from '../../_shared/components/banner/banner';
import { useTranslation } from 'react-i18next';
import './questionBankDetail.scss';

const QuestionBankDetail = () => {
    const {t} = useTranslation();
    
    const questionTypeList = [
        {id: 0, type: 'All Types'},
        {id: 1, type: 'Objective Questions'},
        {id: 2, type: 'Subjective Questions'},
        {id: 3, type: 'Coding Questions'},
        {id: 4, type: 'Stack Questions'}
    ];

    const proficiencyList = [
        {id: 0, name: 'All Proficiency'},
        {id: 1, name: 'Beginner'},
        {id: 2, name: 'Intermediate'},
        {id: 3, name: 'Advanced'}
    ];

    const categoryList = [
        {id: 0, name: 'All Categories'},
        {id: 1, name: 'Artificial Intelligence'},
        {id: 2, name: 'Machine Learning'},
        {id: 3, name: 'Cloud Computing'},
        {id: 4, name: 'Automation'},
        {id: 5, name: 'Software Development'},
        {id: 6, name: 'Data Science'}
    ]

    const skillList = [
        {id: 0, name: 'All Skills'},
        {id: 1, name: 'HTML / CSS'},
        {id: 2, name: 'JavaScript'},
        {id: 3, name: 'Angular'},
        {id: 4, name: 'React JS'},
        {id: 5, name: 'Python'},
        {id: 6, name: 'Next JS'}
    ]

    const questionsList = [
        {   
            id:501,
            category:'Category Name',
            skills:'SkillName, SkillName, SkillName',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            proficiency:'Advanced',
            score:10,
            createdOn: '31 Jan, 2023',
            modifiedOn: '20 May, 2023'
        },
        {   
            id:601,
            category:'Category Name',
            skills:'SkillName, SkillName, SkillName',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            proficiency:'Advanced',
            score:10,
            createdOn: '31 Jan, 2023',
            modifiedOn: '20 May, 2023'
        },
        {   
            id:701,
            category:'Category Name',
            skills:'SkillName, SkillName, SkillName',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            proficiency:'Advanced',
            score:10,
            createdOn: '31 Jan, 2023',
            modifiedOn: '20 May, 2023'
        },
        {   
            id:801,
            category:'Category Name',
            skills:'SkillName, SkillName, SkillName',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            proficiency:'Advanced',
            score:10,
            createdOn: '31 Jan, 2023',
            modifiedOn: '20 May, 2023'
        },
        {   
            id:901,
            category:'Category Name',
            skills:'SkillName, SkillName, SkillName',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            proficiency:'Advanced',
            score:10,
            createdOn: '31 Jan, 2023',
            modifiedOn: '20 May, 2023'
        },
        {   
            id:401,
            category:'Category Name',
            skills:'SkillName, SkillName, SkillName',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            proficiency:'Advanced',
            score:10,
            createdOn: '31 Jan, 2023',
            modifiedOn: '20 May, 2023'
        }
    ]

    const questionBankStatistics = [
        {id:1, primary: '234', secondary: 'Categories'},
        {id:2, primary: '45', secondary: 'Skills'},
        {id:3, primary: '3234', secondary: 'Questions'}
    ];

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
            url: ""
        }
    ]

    return (
        <Box>
            <Banner title="Default Question Bank" crumbs={breadcrumbs} />
            <Container maxWidth="xl">
                <Box sx={{my:4}} className="form-holder">
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <Autocomplete
                                disablePortal
                                options={questionTypeList}
                                getOptionLabel={(option) => option.type}
                                fullWidth
                                defaultValue={questionTypeList[0]}
                                renderInput={(params) => <TextField {...params} label={t('commonForm.selectType')} />}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Autocomplete
                                disablePortal
                                options={proficiencyList}
                                getOptionLabel={(option) => option.name}
                                fullWidth
                                defaultValue={proficiencyList[0]}
                                renderInput={(params) => <TextField {...params} label={t('commonForm.selectProficiency')} />}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Autocomplete
                                disablePortal
                                options={categoryList}
                                getOptionLabel={(option) => option.name}
                                fullWidth
                                defaultValue={categoryList[0]}
                                renderInput={(params) => <TextField {...params} label={t('commonForm.selectCategory')} />}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Autocomplete
                                disablePortal
                                options={skillList}
                                getOptionLabel={(option) => option.name}
                                fullWidth
                                defaultValue={skillList[0]}
                                renderInput={(params) => <TextField {...params} label={t('commonForm.selectSkill')} />}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Autocomplete
                                disablePortal
                                options={skillList}
                                getOptionLabel={(option) => option.name}
                                fullWidth
                                defaultValue={skillList[0]}
                                renderInput={(params) => <TextField {...params} label={t('commonForm.selectSubSkill')} />}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Autocomplete
                                disablePortal
                                options={skillList}
                                getOptionLabel={(option) => option.name}
                                fullWidth
                                defaultValue={skillList[0]}
                                renderInput={(params) => <TextField {...params} label={t('commonForm.selectSubSkill')} />}
                            />
                        </Grid>
                        <Grid item xs={6}>
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

                <Box className="d-flex justify-end align-center" sx={{my:2}}>
                    <Typography variant="subtitle1">{t('common.total')}</Typography>
                    <List className="d-flex list" sx={{p: 0}}>
                        {
                            questionBankStatistics.map((stats) => (
                                <ListItem key={stats.id} sx={{p: 0, ml: 3}}>
                                    <ListItemText primary={stats.primary} secondary={stats.secondary} sx={{m: 0}} />
                                </ListItem>
                            ))
                        }
                    </List>        
                </Box>

                <Grid container spacing={3} className="questions-holder">
                    { questionsList.map((question) => 
                        (
                            <Grid item xs={12} sm={6} md={4} key={question.id}>
                                <Card className="card">
                                    <CardContent sx={{position: 'relative'}}>
                                        <Box>
                                            <Box sx={{width:'70%'}}>
                                                <Typography variant='subtitle2' sx={{fontWeight:'500',maxHeight:'44px',overflow:'hidden',color:'grey'}}>{question.category}</Typography>
                                                <Typography sx={{fontSize:'12px',overflow:'hidden',color:'#aaaaaa',textOverflow:'ellipsis'}}>{question.skills}</Typography>
                                            </Box>
                                            <Box className="card-action">
                                                <IconButton aria-label="edit" sx={{color: '#ff9e04'}}>
                                                    <ModeEditOutlineOutlinedIcon />
                                                </IconButton>
                                                <IconButton aria-label="delete" sx={{color: '#b72840'}}>
                                                    <DeleteOutlineOutlinedIcon />
                                                </IconButton>
                                            </Box> 
                                        </Box>
                                        <NavLink className='question-link' to="/question-detail">{question.name}</NavLink>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={4}>
                                                    <Box className="d-flex align-start">
                                                        <QuestionMarkOutlinedIcon className="icon-style"/>
                                                        <Box className="d-flex flex-column">
                                                            <Typography variant='caption' sx={{fontSize: '14px', color: '#7a7a7a'}}>{question.type}</Typography>
                                                            <Typography sx={{fontSize:'12px', color: '#849cb0'}}>{t('common.type')}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Box className="d-flex align-start">
                                                        <TimerOutlinedIcon className="icon-style"/>
                                                        <Box className="d-flex flex-column">
                                                            <Typography variant='caption' sx={{fontSize: '14px', color: '#7a7a7a'}}>{question.proficiency}</Typography>
                                                            <Typography sx={{fontSize:'12px', color: '#849cb0'}}>{t('common.proficiency')}</Typography>
                                                        </Box>                                                            
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Box className="d-flex align-start">
                                                        <ScoreboardOutlinedIcon className="icon-style"/>
                                                        <Box className="d-flex flex-column">
                                                            <Typography variant='caption' sx={{fontSize: '14px', color: '#7a7a7a'}}>{question.score}</Typography>
                                                            <Typography sx={{fontSize:'12px', color: '#849cb0'}}>{t('common.score')}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Box className="d-flex align-start">
                                                        <CalendarMonthOutlinedIcon className="icon-style"/>
                                                        <Box className="d-flex flex-column">
                                                            <Typography variant='caption' sx={{fontSize: '14px', color: '#7a7a7a'}}>{question.createdOn}</Typography>
                                                            <Typography sx={{fontSize:'12px', color: '#849cb0'}}>{t('common.createdOn')}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Box className="d-flex align-start">
                                                        <CalendarMonthOutlinedIcon className="icon-style"/>
                                                        <Box className="d-flex flex-column">
                                                            <Typography variant='caption' sx={{fontSize: '14px', color: '#7a7a7a'}}>{question.modifiedOn}</Typography>
                                                            <Typography sx={{fontSize:'12px', color: '#849cb0'}}>{t('common.modifiedOn')}</Typography>
                                                        </Box>                                                            
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
                <Box className="d-flex justify-center align-center" sx={{mt:4}}>
                    <Typography variant='subtitle1' sx={{mr:1}} color='primary'>{t('common.loadMore')}</Typography>
                    <LoopOutlinedIcon color='error'/>
                </Box> 
            </Container>
        </Box>
    )
}

export default QuestionBankDetail;