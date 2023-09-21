import React, { useState } from 'react';
import {
    Container, 
    Box, 
    Typography, 
    Tab, 
    Button, 
    IconButton, 
    FormControl, 
    InputLabel, 
    OutlinedInput, 
    InputAdornment, 
    Grid, 
    Card, 
    CardContent, 
    Select,
    Dialog,
    DialogActions,
    DialogContent,
    Slide,
    Divider,
    } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { TabContext, TabList, TabPanel } from '@mui/lab/';

// Temp Data Start
import cardImg from '../../../assets/card-image.jpeg'
import Banner from '../../../components/banner/banner';
const categoriesList = [
    {
        name:'Web Development',
        skills:0,
        assessments:0,
        questions:0
    },
    {
        name:'Stack',
        skills:10,
        assessments:20,
        questions:30
    },
    {
        name:'Application Development Programming',
        skills:45,
        assessments:23,
        questions:54
    },
    {
        name:'Web Development',
        skills:340,
        assessments:56,
        questions:46
    },
    {
        name:'SoftwareDevelopment',
        skills:230,
        assessments:230,
        questions:320
    },
    {
        name:'Artififcial Intelligence and Application Development Programming',
        skills:0,
        assessments:230,
        questions:45
    },
]
const skillsList = [
    {
        name:'HTML 5.0',
        categories:0,
        assessments:0,
        questions:0
    },
    {
        name:'CSS 3.0',
        categories:10,
        assessments:20,
        questions:30
    },
    {
        name:'JavaScript',
        categories:45,
        assessments:23,
        questions:54
    },
    {
        name:'Angular',
        categories:340,
        assessments:56,
        questions:46
    },
    {
        name:'React',
        categories:230,
        assessments:230,
        questions:320
    },
    {
        name:'Node',
        categories:0,
        assessments:230,
        questions:45
    },
]
// Temp Data End

const breadcrumbs = [
    {
        name: "Dashboard",
        url: "/dashboard"
    },
    {
        name: "Manage Tags",
        url: ""
    }
]
const button = ['Create Tags', "/create-tags"];

const tagImg = {
    width: "112px",
    height: "77px",
    borderRadius: "5px"
}
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const TagLists = () => {

    const [value, setValue] = useState('categories');
    const tabChange = (event, newValue) => {
        setValue(newValue);
    }

    const [selectCategory, setSelectCategory] = useState(0);
    const cateSelect = (event) => {
        setSelectCategory(event.target.value);
    }

    const [deleteItem, setDeleteItem] = React.useState('');
    const [dialog, setDialog] = React.useState(false);
    const [tagDelete, setTagDelete] = React.useState(false);
    const dialogOpen = (item) => {
        setDeleteItem(item)
        setDialog(true);
    };
    const dialogClose = () => {
        setDeleteItem('')
        setDialog(false);
        setTagDelete(false);
    };
    const deleteTag = () => {
        setTagDelete(true);
    }

    return (
        <Box>
            <Banner title="Manage Tags" crumbs={breadcrumbs} bannerButton={button} />
            <Container maxWidth="xl">
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={tabChange} 
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
                            <Tab value="categories" label="Categories" />
                            <Tab value="skills" label="Skills" />
                        </TabList>
                    </Box>
                    <TabPanel value="categories" sx={{py: 1, px: 0}}>
                        <Box sx={{my: 3}}>
                            <FormControl variant="outlined" sx={{width: 400}}>
                                <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
                                <OutlinedInput placeholder="Search"
                                    id="outlined-adornment-password"
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
                        </Box>
                        <Grid container spacing={3}>
                            {categoriesList.map((each, index) => (
                                <Grid item key={index} xs={12} md={6} lg={4}>
                                    <Card sx={{border: "1px solid", borderColor: 'divider'}}>
                                        <CardContent className="d-flex p-relative" sx={{minHeight: '130px', maxHeight: '130px'}}>
                                            <Box sx={{mr: 3}}>
                                                <img src={cardImg} style={tagImg}/>
                                            </Box>
                                            <Box className="d-flex flex-column">
                                                <Typography variant='subtitle1'>{each.name}</Typography>
                                                <Box className="d-flex" sx={{mt:2}}>
                                                    <Box sx={{mr: 6}}>
                                                        <Typography variant='body1'>{each.skills}</Typography>
                                                        <Typography variant='caption' color="text.disabled">Skills</Typography>
                                                    </Box>
                                                    <Box sx={{mr: 6}}>
                                                        <Typography variant='body1'>{each.assessments}</Typography>
                                                        <Typography variant='caption' color="text.disabled">Assessments</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography variant='body1'>{each.questions}</Typography>
                                                        <Typography variant='caption' color="text.disabled">Questions</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box className="p-absolute d-flex" sx={{top: 5, right: 5, zIndex: 1000}}>
                                                <EditOutlinedIcon color='warning' sx={{cursor:'pointer'}}/>
                                                {(each.skills===0 && each.questions===0 && each.assessments===0 ) && (
                                                    <DeleteForeverOutlinedIcon color='error' onClick={() => dialogOpen(each.name)} sx={{cursor:'pointer', ml:2}}/>
                                                )}
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        <Box className="d-flex align-center justify-center" sx={{width: "100%", my: 3}}>
                            <Typography variant='caption' sx={{mr:1}} color='primary'>Load More</Typography>
                            <LoopOutlinedIcon color='error'  fontSize='small'/>
                        </Box>
                    </TabPanel>
                    <TabPanel value="skills" sx={{py: 1, px: 0}}>
                        <Box sx={{my: 3}}>
                            <FormControl sx={{width: 400, mr: 3}}>
                                <InputLabel id="categories">Select Categories</InputLabel>
                                <Select
                                    labelId="categories"
                                    id="demo-simple-select"
                                    value={selectCategory}
                                    label="Select Categories"
                                    onChange={cateSelect}
                                >
                                    <MenuItem value={0}>Select Category</MenuItem>
                                    <MenuItem value={1}>Web Development</MenuItem>
                                    <MenuItem value={2}>Stack</MenuItem>
                                    <MenuItem value={3}>Application Development Programing</MenuItem>
                                    <MenuItem value={4}>Software Development</MenuItem>
                                    <MenuItem value={5}>Programing Language</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" sx={{width: 400}}>
                                <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
                                <OutlinedInput placeholder="Search"
                                    id="outlined-adornment-password"
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
                        </Box>
                        <Grid container spacing={3}>
                            {skillsList.map((each, index) => (
                                <Grid item key={index} xs={12} md={6} lg={4}>
                                    <Card sx={{border: "1px solid", borderColor: 'divider'}}>
                                        <CardContent className="d-flex p-relative" sx={{minHeight: '130px', maxHeight: '130px'}}>
                                            <Box sx={{mr: 3}}>
                                                <img src={cardImg} style={tagImg}/>
                                            </Box>
                                            <Box className="d-flex flex-column">
                                                <Typography variant='subtitle1'>{each.name}</Typography>
                                                <Box className="d-flex" sx={{mt:2}}>
                                                    <Box sx={{mr: 6}}>
                                                        <Typography variant='body1'>{each.categories}</Typography>
                                                        <Typography variant='caption' color="text.disabled">Categories</Typography>
                                                    </Box>
                                                    <Box sx={{mr: 6}}>
                                                        <Typography variant='body1'>{each.assessments}</Typography>
                                                        <Typography variant='caption' color="text.disabled">Assessments</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography variant='body1'>{each.questions}</Typography>
                                                        <Typography variant='caption' color="text.disabled">Questions</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box className="p-absolute d-flex" sx={{top: 5, right: 5, zIndex: 1000}}>
                                                <EditOutlinedIcon color='warning' sx={{cursor:'pointer'}}/>
                                                {(each.categories===0 && each.questions===0 && each.assessments===0 ) && (
                                                    <DeleteForeverOutlinedIcon color='error' onClick={() => dialogOpen(each.name)} sx={{cursor:'pointer', ml:2}}/>
                                                )}
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        <Box className="d-flex align-center justify-center" sx={{width: "100%", my: 3}}>
                            <Typography variant='caption' sx={{mr:1}} color='primary'>Load More</Typography>
                            <LoopOutlinedIcon color='error' fontSize='small'/>
                        </Box>
                    </TabPanel>
                </TabContext>
            </Container>
            <Dialog
                open={dialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={dialogClose}
                aria-describedby="delete-tag-dialog"
            >
                <DialogContent className='d-flex justify-center align-center flex-column' sx={{minWidth: 500}}>
                    {!tagDelete && (
                    <>
                        <ErrorOutlineIcon color="warning" sx={{fontSize: "4rem"}} />
                        <Typography variant='body1' color='primary'>Are you Sure?</Typography>
                        <Typography variant='body1' color="text.disabled">You want to delete</Typography>
                        <Typography variant='body1' color="text.disabled" fontWeight={700}>{`"${deleteItem}"`}</Typography>
                    </>
                    )}
                    {tagDelete && (
                    <>
                        <CheckCircleOutlineIcon color="success" sx={{fontSize: "4rem"}} />
                        <Typography variant='body1' color='primary'>Tag Deleted Successfully!</Typography>
                    </>
                    )}
                </DialogContent>
                <Divider />
                <DialogActions>
                    {!tagDelete && (
                    <>
                        <Button variant='contained' color="secondary" onClick={dialogClose}>Cancel</Button>
                        <Button variant='contained' color="primary" onClick={deleteTag}>Delete</Button>
                    </>
                    )}
                    {tagDelete && (
                        <Button variant='contained' color="primary" onClick={dialogClose}>OK</Button>
                    )}
                </DialogActions>
            </Dialog>
        </Box>
    )
}
export default TagLists;