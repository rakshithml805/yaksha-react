import React from 'react'
import { Box, Container,  Typography, Autocomplete, Grid, TextField, List,ListItem,ListItemText, Button, Card, CardContent } from '@mui/material'
import {useNavigate, useParams } from 'react-router-dom';
import cardImg from '../../assets/card-image.jpeg';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import ScoreboardOutlinedIcon from '@mui/icons-material/ScoreboardOutlined';
import './createQuestionBank.scss';

import Banner from '../../_shared/components/banner/banner';
import { useTranslation } from 'react-i18next';

export default function CreateQuestionBank() {
    const { tenancyName } = useParams();
    const breadcrumbs = [
        {
            name: "Dashboard",
            url: `/${tenancyName}/dashboard`
        },
        {
            name: "Create Question Banks",
            url: ""
        }
    ];
    const {t} = useTranslation();
    const tenants=['Yaksha','CA','NSEIT','Cognizant'];
    const category = ['Web Development','Front End','Back End','AI']
    const skills=['HTML','JAVASCRIPT','CSS','PYTHON'];
    const subskills1=['HTML','JAVASCRIPT','CSS','PYTHON'];
    const subskills2=['HTML','JAVASCRIPT','CSS','PYTHON'];
    const categories = [
        {   
            id:51,
            name:'Web Development',
            skills:0,
            assessments:0,
            questions:0
        },
        {
            id:52,
            name:'Stack',
            skills:10,
            assessments:20,
            questions:30
        },
        {
            id:53,
            name:'Application Development Programming',
            skills:45,
            assessments:23,
            questions:54
        },
        {
            id:54,
            name:'Mobile Development',
            skills:340,
            assessments:56,
            questions:46
        },
        {
            id:55,
            name:'SoftwareDevelopment',
            skills:230,
            assessments:230,
            questions:320
        },
        {
            id:56,
            name:'Artificial Intelligence and Machine Learning',
            skills:0,
            assessments:230,
            questions:45
        },
    ]
    const selectedCategoriesList = [
        {   
            id:11,
            name:'Web Development',
            skills:0,
            assessments:0,
            questions:0
        },
        {
            id:12,
            name:'Stack',
            skills:10,
            assessments:20,
            questions:30
        },
        {
            id:13,
            name:'Application Development Programming',
            skills:45,
            assessments:23,
            questions:54
        },
        {
            id:14,
            name:'Mobile Development',
            skills:340,
            assessments:56,
            questions:46
        },
        {
            id:15,
            name:'SoftwareDevelopment',
            skills:230,
            assessments:230,
            questions:320
        },
        {
            id:16,
            name:'Artificial Intelligence and Machine Learning',
            skills:0,
            assessments:230,
            questions:45
        },
    ];
    const skillList = [
        {
            id:10,
            name:'HTML',
            categories:0,
            assessments:0,
            questions:0
        },
        {
            id:21,
            name:'React',
            categories:20,
            assessments:30,
            questions:0
        },{
            id:31,
            name:'Angular',
            categories:0,
            assessments:0,
            questions:30
        }
        ,{
            id:41,
            name:'Python',
            categories:0,
            assessments:20,
            questions:30
        }
        ,{
            id:51,
            name:'CSS',
            categories:60,
            assessments:70,
            questions:80
        }
        ,{
            id:61,
            name:'Javascript',
            categories:10,
            assessments:40,
            questions:50
        }

    ];
    const selectedSkillList = [
        {
            id:120,
            name:'HTML',
            categories:0,
            assessments:0,
            questions:0
        },
        {
            id:121,
            name:'React',
            categories:20,
            assessments:30,
            questions:0
        },{
            id:131,
            name:'Angular',
            categories:0,
            assessments:0,
            questions:30
        }
        ,{
            id:141,
            name:'Python',
            categories:0,
            assessments:20,
            questions:30
        }
        ,{
            id:151,
            name:'CSS',
            categories:60,
            assessments:70,
            questions:80
        }
        ,{
            id:161,
            name:'Javascript',
            categories:10,
            assessments:40,
            questions:50
        }

    ];
    const questions = [
        {   
            id:101,
            category:'Category Name',
            skills:'Skill List,Skill List,Skill List',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            proficency:'Advanced',
            score:10
        },
        {   
            id:201,
            category:'Category Name',
            skills:'Skill List,Skill List,Skill List',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            proficency:'Advanced',
            score:10
        },
        {   
            id:301,
            category:'Category Name',
            skills:'Skill List,Skill List,Skill List',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            proficency:'Advanced',
            score:10
        },
        {   
            id:401,
            category:'Category Name',
            skills:'Skill List,Skill List,Skill List',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            proficency:'Advanced',
            score:10
        },
        {   
            id:501,
            category:'Category Name',
            skills:'Skill List,Skill List,Skill List',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            proficency:'Advanced',
            score:10
        },
        {   
            id:601,
            category:'Category Name',
            skills:'Skill List,Skill List,Skill List',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            proficency:'Advanced',
            score:10
        },
    ];
    const selectedQuestionList = [
        {   
            id:501,
            category:'Category Name',
            skills:'Skill List,Skill List,Skill List',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            proficency:'Advanced',
            score:10
        },
        {   
            id:601,
            category:'Category Name',
            skills:'Skill List,Skill List,Skill List',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            proficency:'Advanced',
            score:10
        },
        {   
            id:701,
            category:'Category Name',
            skills:'Skill List,Skill List,Skill List',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            proficency:'Advanced',
            score:10
        },
        {   
            id:801,
            category:'Category Name',
            skills:'Skill List,Skill List,Skill List',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            proficency:'Advanced',
            score:10
        },
        {   
            id:901,
            category:'Category Name',
            skills:'Skill List,Skill List,Skill List',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            proficency:'Advanced',
            score:10
        },
        {   
            id:401,
            category:'Category Name',
            skills:'Skill List,Skill List,Skill List',
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            proficency:'Advanced',
            score:10
        },
    ];
    const questionBankStatistics = [
        {id:1, primary: '234', secondary: 'Categories'},
        {id:2, primary: '45', secondary: 'Skills'},
        {id:3, primary: '3234', secondary: 'Questions'}
    ];
    const [showSkills,setShowSkills] = React.useState(false);
    const viewSkills = () =>{
        setShowSkills(true);
        setShowQuestions(false);
    };
    const [showQuestions,setShowQuestions] = React.useState(false);
    const viewQuestions = () =>{
        setShowSkills(false);
        setShowQuestions(true);
    };
    const [viewSelected,setViewSelected] = React.useState(false);
    const showSelected =()=>{
        setViewSelected(!viewSelected);
        setShowSkills(false);
        setShowQuestions(false);
    };
    let navigate = useNavigate();
    const navigateToBanks =() => {
        let path = `/${tenancyName}/question-banks`; 
        navigate(path);
    };

  return (
    <Box>
        <Banner title={t('createQuestion.createQuestion')} crumbs={breadcrumbs} />
        <Container maxWidth="xl">
            <Box sx={{my:4,border:'dashed',borderColor:'#cbd2dc',padding:'20px',backgroundColor:"#f4f4f4",borderRadius:'7px'}}>
                <Grid container columnGap={5}>
                    <Grid item xs={4} >
                        <TextField  label="Question Bank Name" variant="outlined" required fullWidth className='form-control'/>
                    </Grid>
                    <Grid item xs={3}>
                        <Autocomplete
                        disablePortal
                        required
                        options={tenants}
                        renderInput={(params) => <TextField {...params} label={t('commonForm.assignToTenant')} className='form-control'/>
                        }
                        />
                    </Grid>
                    <Grid item xs={3} sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <Button variant='contained' onClick={navigateToBanks}>{t('common.create')}</Button>
                        <Button variant="outlined" sx={{backgroundColor:"white"}} onClick={showSelected} >{  !viewSelected ? "VIEW SELECTED":"ADD MORE"}</Button>
                        <Button variant='contained' color='secondary' onClick={navigateToBanks}>{t('common.cancel')}</Button>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{display:'flex',justifyContent:'space-between',mb:4}}>
                <Typography variant="subtitle1" color="grey">
                    {!viewSelected ? "Add Questions" :"Selected Categories, Skills and Questions"}
                </Typography>
                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant="subtitle1" sx={{mr:2,fontWeight:'500'}}>
                    {t('common.totalSelected')}
                    </Typography>
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
            </Box>
            {!viewSelected && 
                (
                    <Box>
                        <Box sx={{my:4}}>
                            <Grid container columnGap={3}>
                                <Grid item xs>
                                    <Autocomplete
                                        disablePortal
                                        options={category}
                                        fullWidth
                                        renderInput={(params) => <TextField {...params} label={t('commonForm.selectCategory')} />}
                                    />
                                </Grid>
                                <Grid item xs>
                                    <Autocomplete
                                        disablePortal
                                        options={skills}
                                        fullWidth
                                        renderInput={(params) => <TextField {...params} label={t('commonForm.selectSkill')} />}
                                    />
                                </Grid>
                                <Grid item xs>
                                    <Autocomplete
                                        disablePortal
                                        options={subskills1}
                                        fullWidth
                                        renderInput={(params) => <TextField {...params} label={t('commonForm.selectSubSkill')} />}
                                    />
                                </Grid>
                                <Grid item xs>
                                    <Autocomplete
                                        disablePortal
                                        options={subskills2}
                                        fullWidth
                                        renderInput={(params) => <TextField {...params} label={t('commonForm.selectSubSkill')}  />}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid container spacing={3}>
                            { !showSkills && !showQuestions && categories.map((category) => 
                                (
                                    <Grid item xs={12} sm={6} md={4} key={category.id}>
                                        <Card sx={{border: '1px solid #c4c4c4', minHeight: 117}}>
                                            <CardContent sx={{position: 'relative'}}>
                                                <Box sx={{display:'flex'}}>
                                                    <Box sx={{border:'1px solid grey',borderRadius:'5px', mr:2,width:'30%',overflow:'hidden',height:'100px'}}>
                                                        <img src={cardImg} style={{width:"100%",borderRadius:'5px',height:'100%'}}/>
                                                    </Box>
                                                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'70%'}}>
                                                        <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                                            <Typography onClick={viewSkills} variant='subtitle2' sx={{fontWeight:'500',maxHeight:'44px',overflow:'hidden',width:'78%',cursor:'pointer'}}>{category.name}</Typography>
                                                            <Box sx={{position: 'absolute', top: 10, right: 10, zIndex: 10}}>
                                                                <Button variant="text" color='error'><AddOutlinedIcon sx={{ cursor:'pointer'}}/>
                                                                <Typography variant='subtitle2' >{t('common.add')}</Typography></Button>      
                                                            </Box> 
                                                        </Box>
                                                        <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                                            <Box>
                                                                <Typography variant='caption' sx={{fontWeight:'500'}}>{category.skills}</Typography>
                                                                <Typography color='#aaaaaa' sx={{fontSize:'10px',}}>{t('common.skills')}</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Typography variant='caption' sx={{fontWeight:'500'}}>{category.assessments}</Typography>
                                                                <Typography color='#aaaaaa' sx={{fontSize:'10px'}}>{t('common.assessments')}</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Typography variant='caption' sx={{fontWeight:'500'}}>{category.questions}</Typography>
                                                                <Typography color='#aaaaaa' sx={{fontSize:'10px'}}>{t('common.questions')}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))
                            }
                            {  showSkills && !showQuestions && skillList.map((skill) => 
                                (
                                    <Grid item xs={12} sm={6} md={4} key={skill.id}>
                                        <Card sx={{border: '1px solid #c4c4c4', minHeight: 117}}>
                                            <CardContent sx={{position: 'relative'}}>
                                                <Box sx={{display:'flex'}}>
                                                    <Box sx={{border:'1px solid grey',borderRadius:'5px', mr:2,width:'30%',overflow:'hidden',height:'100px'}}>
                                                        <img src={cardImg} style={{width:"100%",borderRadius:'5px',height:'100%'}}/>
                                                    </Box>
                                                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'70%'}}>
                                                        <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                                            <Typography variant='subtitle2' onClick={viewQuestions} sx={{fontWeight:'500',maxHeight:'44px',overflow:'hidden',width:'78%',cursor:'pointer'}}>{skill.name}</Typography>
                                                            <Box sx={{position: 'absolute', top: 10, right: 10, zIndex: 10}}>
                                                                <Button variant="text" color='error'><RemoveOutlinedIcon sx={{ cursor:'pointer'}}/>
                                                                <Typography variant='subtitle2' >{t('common.remove')}</Typography></Button>      
                                                            </Box> 
                                                        </Box>
                                                        <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                                            <Box>
                                                                <Typography variant='caption' sx={{fontWeight:'500'}}>{skill.categories}</Typography>
                                                                <Typography color='#aaaaaa' sx={{fontSize:'10px'}}>{t('common.categories')}</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Typography variant='caption' sx={{fontWeight:'500'}}>{skill.assessments}</Typography>
                                                                <Typography  color='#aaaaaa' sx={{fontSize:'10px'}}>{t('common.assessments')}</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Typography variant='caption' sx={{fontWeight:'500'}}>{skill.questions}</Typography>
                                                                <Typography  color='#aaaaaa' sx={{fontSize:'10px'}}>{t('common.questions')}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))
                            }
                            {!showSkills && showQuestions && questions.map((question) => 
                                (
                                    <Grid item xs={12} sm={6} md={4} key={question.id}>
                                        <Card sx={{border: '1px solid #c4c4c4'}}>
                                            <CardContent sx={{position: 'relative'}}>
                                                <Box>
                                                    <Box sx={{width:'70%'}}>
                                                        <Typography sx={{fontWeight:'500',maxHeight:'44px',overflow:'hidden',color:'#7a7a7a;'}}>{question.category}</Typography>
                                                        <Typography sx={{fontSize:'12px',overflow:'hidden',color:'#aaaaaa',textOverflow:'ellipsis'}}>{question.skills}</Typography>
                                                    </Box>
                                                    <Box sx={{position:'absolute', top: 10, right: 10, zIndex: 10}}>
                                                        <Button variant="text" color='error'><RemoveOutlinedIcon sx={{ cursor:'pointer'}}/>
                                                        <Typography variant='subtitle2' >{t('common.remove')}</Typography></Button>      
                                                    </Box> 
                                                </Box>
                                                <Typography variant='subtitle2' sx={{fontWeight:'500',maxHeight:'44px',overflow:'hidden',my:1}}>{question.name}</Typography>
                                                <Box sx={{display:'flex',justifyContent:'space-between',width:'80%'}}>
                                                    <Box sx={{display:'flex',alignItems:'flex-start'}}>
                                                        <QuestionMarkOutlinedIcon fontSize='12px' color='error'/>
                                                        <Box sx={{display:'flex',flexDirection:'column'}}>
                                                            <Typography variant='caption' sx={{fontWeight:'500'}}>{question.type}</Typography>
                                                            <Typography color='#aaaaaa' sx={{fontSize:'10px'}}>{t('common.type')}</Typography>
                                                        </Box>
                                                        
                                                    </Box>
                                                    <Box sx={{display:'flex',alignItems:'flex-start'}}>
                                                        <TimerOutlinedIcon fontSize='12px' color='error'/>
                                                        <Box sx={{display:'flex',flexDirection:'column'}}>
                                                            <Typography variant='caption' sx={{fontWeight:'500'}}>{question.proficency}</Typography>
                                                            <Typography color='#aaaaaa' sx={{fontSize:'10px'}}>{t('common.proficency')}</Typography>
                                                        </Box>                                                            
                                                    </Box>
                                                    <Box sx={{display:'flex',alignItems:'flex-start'}}>
                                                        <ScoreboardOutlinedIcon fontSize='12px' color='error'/>
                                                        <Box sx={{display:'flex',flexDirection:'column'}}>
                                                            <Typography variant='caption' sx={{fontWeight:'500'}}>{question.score}</Typography>
                                                            <Typography  color='#aaaaaa' sx={{fontSize:'10px'}}>{t('common.score')}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))
                            }
                        </Grid>
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',mt:4}}>
                            <Typography variant='subtitle1' sx={{mr:1}} color='primary'> {t('common.loadMore')}</Typography>
                            <LoopOutlinedIcon color='error'/>
                        </Box> 
                    </Box>
                )
            }

            {/* View Selected Categories,Skills and questions */}

            {viewSelected && (
                    <Box>
                        <Box>
                            <Box sx={{display:'flex',alignItems:'baseline'}}>
                                <Typography variant='h6' sx={{mr:1,mb:1}}>{t('common.categories')}</Typography>
                                <Typography variant='subtitle2' color="grey">- (12)</Typography>
                            </Box> 
                            <Grid container spacing={3}>
                                { selectedCategoriesList.map((category) => 
                                    (
                                        <Grid item xs={12} sm={6} md={4} key={category.id}>
                                            <Card sx={{border: '1px solid #c4c4c4', minHeight: 117}}>
                                                <CardContent sx={{position: 'relative'}}>
                                                    <Box sx={{display:'flex'}}>
                                                        <Box sx={{border:'1px solid grey',borderRadius:'5px', mr:2,width:'30%',overflow:'hidden',height:'100px'}}>
                                                            <img src={cardImg} style={{width:"100%",borderRadius:'5px',height:'100%'}}/>
                                                        </Box>
                                                        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'70%'}}>
                                                            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                                                <Typography variant='subtitle2' sx={{fontWeight:'500',maxHeight:'44px',overflow:'hidden',width:'78%',cursor:'pointer'}}>{category.name}</Typography>
                                                                <Box sx={{position: 'absolute', top: 10, right: 10, zIndex: 10}}>
                                                                    <Button variant="text" color='error'><RemoveOutlinedIcon sx={{ cursor:'pointer'}}/>
                                                                    <Typography variant='subtitle2' >{t('common.remove')}</Typography></Button>      
                                                                </Box> 
                                                            </Box>
                                                            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                                                <Box>
                                                                    <Typography variant='caption' sx={{fontWeight:'500'}}>{category.skills}</Typography>
                                                                    <Typography color='#aaaaaa' sx={{fontSize:'10px'}}>{t('common.skills')}</Typography>
                                                                </Box>
                                                                <Box>
                                                                    <Typography variant='caption' sx={{fontWeight:'500'}}>{category.assessments}</Typography>
                                                                    <Typography color='#aaaaaa' sx={{fontSize:'10px'}}>{t('common.assessments')}</Typography>
                                                                </Box>
                                                                <Box>
                                                                    <Typography variant='caption' sx={{fontWeight:'500'}}>{category.questions}</Typography>
                                                                    <Typography color='#aaaaaa' sx={{fontSize:'10px'}}>{t('common.questions')}</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))
                                }
                            </Grid> 
                        </Box>
                        <Box sx={{my:5}}>
                            <Box sx={{display:'flex',alignItems:'baseline'}}>
                                <Typography variant='h6' sx={{mr:1,mb:1}}>{t('common.skills')}</Typography>
                                <Typography variant='subtitle2' color="grey">- (12)</Typography>
                            </Box> 
                            <Grid container spacing={3}>
                                { selectedSkillList.map((skill) => 
                                    (
                                        <Grid item xs={12} sm={6} md={4} key={skill.id}>
                                            <Card sx={{border: '1px solid #c4c4c4', minHeight: 117}}>
                                                <CardContent sx={{position: 'relative'}}>
                                                    <Box sx={{display:'flex'}}>
                                                        <Box sx={{border:'1px solid grey',borderRadius:'5px', mr:2,width:'30%',overflow:'hidden',height:'100px'}}>
                                                            <img src={cardImg} style={{width:"100%",borderRadius:'5px',height:'100%'}}/>
                                                        </Box>
                                                        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'70%'}}>
                                                            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                                                <Typography variant='subtitle2' sx={{fontWeight:'500',maxHeight:'44px',overflow:'hidden',width:'78%',cursor:'pointer'}}>{skill.name}</Typography>
                                                                <Box sx={{position: 'absolute', top: 10, right: 10, zIndex: 10}}>
                                                                    <Button variant="text" color='error'><RemoveOutlinedIcon sx={{ cursor:'pointer'}}/>
                                                                    <Typography variant='subtitle2'>{t('common.remove')}</Typography></Button>      
                                                                </Box> 
                                                            </Box>
                                                            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                                                <Box>
                                                                    <Typography variant='caption' sx={{fontWeight:'500'}}>{skill.categories}</Typography>
                                                                    <Typography color='#aaaaaa' sx={{fontSize:'10px'}}>{t('common.categories')}</Typography>
                                                                </Box>
                                                                <Box>
                                                                    <Typography variant='caption' sx={{fontWeight:'500'}}>{skill.assessments}</Typography>
                                                                    <Typography color='#aaaaaa' sx={{fontSize:'10px'}}>{t('common.assessments')}</Typography>
                                                                </Box>
                                                                <Box>
                                                                    <Typography variant='caption' sx={{fontWeight:'500'}}>{skill.questions}</Typography>
                                                                    <Typography color='#aaaaaa' sx={{fontSize:'10px'}}>{t('common.questions')}</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))
                                }
                            </Grid> 
                        </Box> 
                        <Box sx={{my:5}}>
                            <Box sx={{display:'flex',alignItems:'baseline'}}>
                                <Typography variant='h6' sx={{mr:1,mb:1}}>{t('common.questions')}</Typography>
                                <Typography variant='subtitle2' color="grey">- (12)</Typography>
                            </Box> 
                            <Grid container spacing={3}>
                                { selectedQuestionList.map((question) => 
                                    (
                                        <Grid item xs={12} sm={6} md={4} key={question.id}>
                                            <Card sx={{border: '1px solid #c4c4c4'}}>
                                                <CardContent sx={{position: 'relative'}}>
                                                    <Box>
                                                        <Box sx={{width:'70%'}}>
                                                            <Typography variant='subtitle2' sx={{fontWeight:'500',maxHeight:'44px',overflow:'hidden',color:'grey'}}>{question.category}</Typography>
                                                            <Typography sx={{fontSize:'12px',overflow:'hidden',color:'#aaaaaa',textOverflow:'ellipsis'}}>{question.skills}</Typography>
                                                        </Box>
                                                        <Box sx={{position: 'absolute', top: 10, right: 10, zIndex: 10}}>
                                                            <Button variant="text" color='error'><RemoveOutlinedIcon sx={{ cursor:'pointer'}}/>
                                                            <Typography variant='subtitle2' >{t('common.remove')}</Typography></Button>      
                                                        </Box> 
                                                    </Box>
                                                    <Typography variant='subtitle2' sx={{fontWeight:'500',maxHeight:'44px',overflow:'hidden',my:1}}>{question.name}</Typography>

                                                    <Box sx={{display:'flex',justifyContent:'space-between',width:'80%'}}>
                                                        <Box sx={{display:'flex',alignItems:'flex-start'}}>
                                                            <QuestionMarkOutlinedIcon fontSize='12px' color='error'/>
                                                            <Box sx={{display:'flex',flexDirection:'column'}}>
                                                                <Typography variant='caption' sx={{fontWeight:'500'}}>{question.type}</Typography>
                                                                <Typography color='#aaaaaa' sx={{fontSize:'10px'}}>{t('common.type')}</Typography>
                                                            </Box>
                                                            
                                                        </Box>
                                                        <Box sx={{display:'flex',alignItems:'flex-start'}}>
                                                            <TimerOutlinedIcon fontSize='12px' color='error'/>
                                                            <Box sx={{display:'flex',flexDirection:'column'}}>
                                                                <Typography variant='caption' sx={{fontWeight:'500'}}>{question.proficency}</Typography>
                                                                <Typography color='#aaaaaa' sx={{fontSize:'10px'}}>{t('common.proficency')}</Typography>
                                                            </Box>                                                            
                                                        </Box>
                                                        <Box sx={{display:'flex',alignItems:'flex-start'}}>
                                                            <ScoreboardOutlinedIcon fontSize='12px' color='error'/>
                                                            <Box sx={{display:'flex',flexDirection:'column'}}>
                                                                <Typography variant='caption' sx={{fontWeight:'500'}}>{question.score}</Typography>
                                                                <Typography color='#aaaaaa' sx={{fontSize:'10px'}}>{t('common.score')}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))
                                }
                            </Grid> 
                        </Box> 
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',mt:4}}>
                            <Typography variant='subtitle1' sx={{mr:1}} color='primary'> {t('common.loadMore')}</Typography>
                            <LoopOutlinedIcon color='error'/>
                        </Box>          
                    </Box>
                )
            }
        </Container>
    </Box>
  )
}