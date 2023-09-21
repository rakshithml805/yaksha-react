import React from 'react'
import { Box,Container,Breadcrumbs,Typography,Menu,MenuItem, Grid ,Autocomplete,TextField,FormControl,InputLabel,OutlinedInput,InputAdornment,IconButton,Card,CardContent,Button} from '@mui/material'
import { NavLink } from 'react-router-dom'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import ScoreboardOutlinedIcon from '@mui/icons-material/ScoreboardOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';

export default function QuestionReview() {
    const banks=['Question Bank 1','Question Bank 2','Question Bank 3','Question Bank 4'];
    const status = ['All Status','Acitve','Expired'];
    const questions = [
        {
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            status:'Pending Review'
        },
        {
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            status:'Pending Review',
            type:'OTS'
        },
        {
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'Subjective',
            status:'Pending Review'
        },
        {
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            status:'Expired'
        },
        {
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            status:'Expired'
        },
        {
            name:'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type:'MCQ',
            status:'Expired'
        },
    ]
    const options = [
        'Approve',
        'Reject',
        'Extend Validity',
        'Delete',
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
        <Box className="banner">
            <Container maxWidth="xl">
                <Box  sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Box>
                        <Breadcrumbs sx={{mb:1}}>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }} fontSize="small" color="secondary">
                                <NavLink color="inherit" to="/dashboard" >
                                    Dashboard
                                </NavLink>
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }} fontSize="small" color="secondary">
                                <NavLink color="secondary" to="/bulk-upload-history">
                                    Questions On Review
                                </NavLink>
                            </Typography>
                        </Breadcrumbs>
                        <Typography variant='h5'>Questions On Review</Typography>
                    </Box>          
                </Box>            
            </Container>
        </Box>
        <Container maxWidth="xl">
            <Box sx={{my:4}}>
                <Grid container columnGap={2}>
                    <Grid item xs={3}>
                        <Autocomplete
                            disablePortal
                            options={banks}
                            fullWidth
                            renderInput={(params) => <TextField {...params} label="Select Question Bank" />}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Autocomplete
                            disablePortal
                            options={status}
                            fullWidth
                            renderInput={(params) => <TextField {...params} label="Select Status" />}
                        />
                    </Grid>
                    <Grid item xs>
                        <FormControl  variant="outlined" fullWidth>
                            <InputLabel>Search</InputLabel>
                            <OutlinedInput  placeholder="Search"
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <SearchOutlinedIcon color='primary'/>
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Search"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
            <Grid container spacing={3}>
                { questions.map((question) => 
                    (
                        <Grid item xs={12} sm={6} md={4} key={question.name}>
                            <Card sx={{border: '1px solid #c4c4c4'}}>
                                <CardContent sx={{position: 'relative'}}>
                                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                                        <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                            <Box sx={{width:'60%'}}>
                                                <Typography variant='subtitle2' sx={{fontWeight:'500',maxHeight:'44px',overflow:'hidden',color:'grey'}}>Category Name</Typography>
                                                <Typography variant='subtitle2' sx={{fontSize:'10px',fontWeight:'500',overflow:'hidden',color:'grey',textOverflow:'ellipsis'}}>SkillName,SkillName,SkillName,SkillName,SkillName,SkillName,SkillName,SkillName,SkillName</Typography>
                                            </Box>
                                            <Box sx={{position: 'absolute', top: 10, right: 10, zIndex: 10,display:'flex',alignItems:'center'}}>
                                                <Box>
                                                    { question.status === "Pending Review" ? (
                                                        <Typography variant='caption' sx={{fontWeight:'500',padding:'0px 5px',backgroundColor:'#ffe8c3',color:'#ff9e02',borderRadius:'4px'}}>{question.status}</Typography>
                                                    ):(
                                                        <Typography variant='caption' sx={{fontWeight:'500',padding:'0px 5px',backgroundColor:'#ffe0e5',color:'#ac0521',borderRadius:'4px'}}>{question.status}</Typography>
                                                    )}
                                                </Box>
                                                <Box>
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
                                        </Box>
                                        <Typography variant='subtitle2' sx={{fontWeight:'500',maxHeight:'44px',overflow:'hidden',my:1}}>{question.name}</Typography>
                                        <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                            <Box sx={{display:'flex',alignItems:'flex-start'}}>
                                                <QuestionMarkOutlinedIcon fontSize='12px' color='error'/>
                                                <Box sx={{display:'flex',flexDirection:'column'}}>
                                                    <Typography variant='caption' sx={{fontWeight:'500'}}>{question.type}</Typography>
                                                    <Typography variant='subtitle2' color='grey' sx={{fontSize:'10px',fontWeight:'500'}}>Type</Typography>
                                                </Box> 
                                            </Box>
                                            <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                                                <Box sx={{display:'flex',justifyContent:'space-between',mb:1}}>
                                                    <TimerOutlinedIcon fontSize='12px' color='error'/>
                                                    <Box sx={{display:'flex',flexDirection:'column'}}>
                                                        <Typography variant='caption' sx={{fontWeight:'500'}}>Advanced</Typography>
                                                        <Typography variant='subtitle2' color='grey' sx={{fontSize:'10px',fontWeight:'500'}}>Proficency</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                                    <EventOutlinedIcon fontSize='12px' color='error'/>
                                                    <Box sx={{display:'flex',flexDirection:'column'}}>
                                                        <Typography variant='caption' sx={{fontWeight:'500'}}>30 August 2022</Typography>
                                                        <Typography variant='subtitle2' color='grey' sx={{fontSize:'10px',fontWeight:'500'}}>Created On</Typography>
                                                    </Box>
                                                </Box>                                                          
                                            </Box>
                                            <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                                                <Box sx={{display:'flex',justifyContent:'space-between',mb:1}}>
                                                    <ScoreboardOutlinedIcon fontSize='12px' color='error'/>
                                                    <Box sx={{display:'flex',flexDirection:'column'}}>
                                                        <Typography variant='caption' sx={{fontWeight:'500'}}>10</Typography>
                                                        <Typography variant='subtitle2' color='grey' sx={{fontSize:'10px',fontWeight:'500'}}>Score</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                                    <EventOutlinedIcon fontSize='12px' color='error'/>
                                                    <Box sx={{display:'flex',flexDirection:'column'}}>
                                                        <Typography variant='caption' sx={{fontWeight:'500'}}>25 July 2023</Typography>
                                                        <Typography variant='subtitle2' color='grey' sx={{fontSize:'10px',fontWeight:'500'}}>Expiry Date</Typography>
                                                    </Box>
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
            <Box sx={{display:'flex',justifyContent:'center',mt:4}}>
                <Typography variant='subtitle1' sx={{mr:1}} color='primary'> Load More</Typography>
                <LoopOutlinedIcon color='error'/>
            </Box> 
        </Container>
    </Box>
  )
}
