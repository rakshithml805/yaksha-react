import React, { useState } from 'react';
import { Container, Box, Typography, Tab, IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment, Grid, Card, CardContent, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import { TabContext, TabList, TabPanel } from '@mui/lab/';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../_shared/components/banner/banner';
import cardImg from '../../../assets/card-image.jpeg';
import DeleteDialog from '../../../_shared/components/deleteDialog/DeleteDialog';

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
const button = ['Create Tags', "/tags/create-tag"];
const tagImg = {
    width: "112px",
    height: "77px",
    borderRadius: "5px"
}

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
const TagLists = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();

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
            <Banner title={t('manageTags.manageTags')} crumbs={breadcrumbs} bannerButton={button} />
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
                            <Tab value="categories" label={t('common.categories')} />
                            <Tab value="skills" label={t('common.skills')} />
                        </TabList>
                    </Box>
                    <TabPanel value="categories" sx={{py: 1, px: 0}}>
                        <Grid container spacing={3} sx={{mb:3, pt:2}}>
                            <Grid item xs={12} md={6} lg={4}>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel htmlFor="outlined-search">{t('commonForm.search')}</InputLabel>
                                    <OutlinedInput placeholder={t('commonForm.search')}
                                        id="outlined-search"
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
                                                        <Typography variant='caption' color="text.disabled">{t('common.skills')}</Typography>
                                                    </Box>
                                                    <Box sx={{mr: 6}}>
                                                        <Typography variant='body1'>{each.assessments}</Typography>
                                                        <Typography variant='caption' color="text.disabled">{t('common.assessments')}</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography variant='body1'>{each.questions}</Typography>
                                                        <Typography variant='caption' color="text.disabled">{t('common.questions')}</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box className="p-absolute d-flex" sx={{top: 5, right: 5, zIndex: 1000}}>
                                                <EditOutlinedIcon color='warning' sx={{cursor:'pointer'}} onClick={() => navigate('/create-tags')}/>
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
                            <Typography variant='caption' sx={{mr:1}} color='primary'>{t('common.loadMore')}</Typography>
                            <LoopOutlinedIcon color='error'  fontSize='small'/>
                        </Box>
                    </TabPanel>
                    <TabPanel value="skills" sx={{py: 1, px: 0}}>
                        <Grid container spacing={3} sx={{mb:3, pt:2}}>
                            <Grid item xs={12} md={6} lg={4}>
                                <FormControl fullWidth>
                                    <InputLabel id="selectCategory">{t('commonForm.selectCategory')}</InputLabel>
                                    <Select
                                        labelId="categories"
                                        id="selectCaetgory"
                                        value={selectCategory}
                                        label={t('commonForm.selectCategory')}
                                        onChange={cateSelect}
                                    >
                                        <MenuItem value={0}>{t('commonForm.selectCategory')}</MenuItem>
                                        <MenuItem value={1}>Web Development</MenuItem>
                                        <MenuItem value={2}>Stack</MenuItem>
                                        <MenuItem value={3}>Application Development Programing</MenuItem>
                                        <MenuItem value={4}>Software Development</MenuItem>
                                        <MenuItem value={5}>Programing Language</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel htmlFor="outlined-search">{t('commonForm.search')}</InputLabel>
                                    <OutlinedInput placeholder={t('commonForm.search')}
                                        id="outlined-search"
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
                                                        <Typography variant='caption' color="text.disabled">{t('common.categories')}</Typography>
                                                    </Box>
                                                    <Box sx={{mr: 6}}>
                                                        <Typography variant='body1'>{each.assessments}</Typography>
                                                        <Typography variant='caption' color="text.disabled">{t('common.assessments')}</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography variant='body1'>{each.questions}</Typography>
                                                        <Typography variant='caption' color="text.disabled">{t('common.questions')}</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box className="p-absolute d-flex" sx={{top: 5, right: 5, zIndex: 1000}}>
                                                <EditOutlinedIcon color='warning' sx={{cursor:'pointer'}} onClick={() => navigate('/create-tags')}/>
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
                            <Typography variant='caption' sx={{mr:1}} color='primary'>{t('common.loadMore')}</Typography>
                            <LoopOutlinedIcon color='error' fontSize='small'/>
                        </Box>
                    </TabPanel>
                </TabContext>
            </Container>
            <DeleteDialog
                open={dialog}
                item={deleteItem}
                deleteStatus={tagDelete}
                handleClose={dialogClose}
                handleDelete={deleteTag}
            />
        </Box>
    )
}
export default TagLists;