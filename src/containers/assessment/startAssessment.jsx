import React from "react";
import { Box, Grid, Typography, Stack, Chip, List, ListItem, ListItemText, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import logo from "../../assets/yaksha.png";
import './startAssessment.scss';

const StartAssessment = () => {

    const {t} = useTranslation();
    let navigate = useNavigate();
    
    const assessmentData = {
        title: "Proactive Monitoring Assessment For MCQ & SFA - Manual",
        duration: "45 Mins",
        attempts: "03",
        sections: "02",
        questions: "34",
        passPercentage: "65%",
        role: "Frontend Developer",
        keyword: ["JavaScript", "Angular", "ReactJs", "NextJs"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        instruction: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
    const systemRequirement = [
        {id: 1, requirement: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {id: 2, requirement: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {id: 3, requirement: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {id: 4, requirement: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
    ];

    const startAssessment = () => {
        let path = "/assessment-test-tracker";
        navigate(path);
    }

    return(
        <Box>
            <Grid container spacing={3} className="custom-grid">
                <Grid item xs={7}>
                    <Box className="background-graphic">
                        <Box className="background-transparent">
                            <Typography variant="caption" sx={{opacity: "0.6"}}>{t('testTracker.standardAssessment')}</Typography>
                            <Typography variant="h6">{assessmentData.title}</Typography>

                            <List className="d-flex list" sx={{p: 0, my: 3}}>
                                <ListItem>
                                    <Box>
                                        <AccessTimeOutlinedIcon />
                                        <ListItemText primary={assessmentData.duration} sx={{m: 0}} />
                                    </Box>
                                    <Typography variant="body2" sx={{opacity: "0.6"}}>{t('common.duration')}</Typography>
                                </ListItem>
                                <ListItem>
                                    <Box>
                                        <RepeatOutlinedIcon />
                                        <ListItemText primary={assessmentData.attempts} sx={{m: 0}} />
                                    </Box>
                                    <Typography variant="body2" sx={{opacity: "0.6"}}>{t('testTracker.attempts')}</Typography>
                                </ListItem>
                                <ListItem>
                                    <Box>
                                        <DynamicFeedOutlinedIcon />
                                        <ListItemText primary={assessmentData.sections} sx={{m: 0}} />
                                    </Box>
                                    <Typography variant="body2" sx={{opacity: "0.6"}}>{t('testTracker.sections')}</Typography>
                                </ListItem>
                                <ListItem>
                                    <Box>
                                        <QuestionMarkOutlinedIcon />
                                        <ListItemText primary={assessmentData.questions} sx={{m: 0}} />
                                    </Box>
                                    <Typography variant="body2" sx={{opacity: "0.6"}}>{t('common.questions')}</Typography>
                                </ListItem>
                                <ListItem>
                                    <Box>
                                        <SchoolOutlinedIcon />
                                        <ListItemText primary={assessmentData.passPercentage} sx={{m: 0}} />
                                    </Box>
                                    <Typography variant="body2" sx={{opacity: "0.6"}}>{t('testTracker.passPercentage')}</Typography>
                                </ListItem>
                            </List>

                            <Typography variant="subtitle1" sx={{mt: 2, mb: 1,}}>
                                {assessmentData.role}
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                {
                                    assessmentData.keyword.map((tag) => (
                                        <Chip label={tag} key={tag} />
                                    ))
                                }
                            </Stack>

                            <Typography variant="subtitle1" sx={{mt: 3}}>
                                {t('common.description')}
                            </Typography>
                            <Typography variant="body1" sx={{lineHeight: "2"}}>
                                {assessmentData.description}
                            </Typography>

                            <Typography variant="subtitle1" sx={{mt: 3}}>
                                {t('testTracker.instruction')}
                            </Typography>
                            <Typography variant="body1" sx={{lineHeight: "2"}}>
                                {assessmentData.instruction}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box className="d-flex flex-column justify-center" sx={{paddingLeft: "25px", backgroundColor: "#f5f5f5", height: "100%", textAlign: "center"}}>
                        <Box>
                            <img src={logo} alt="Yaksha" />
                        </Box>
                        <Box className="d-flex flex-column align-center" component="form" autoComplete="off" sx={{my: 4}}>
                            <TextField label="Username" variant="outlined" sx={{width: "400px", mb: 3}} />
                            <Button color='primary' onClick={startAssessment} variant="contained" sx={{width:'400px'}}>{t('testTracker.startAssessment')}</Button>
                        </Box>
                        <Box>
                            <Typography variant="h6">{t('testTracker.systemRequirement')}</Typography>
                            <ul className="normal-list">
                                {
                                    systemRequirement.map((requirement) => (
                                        <li key={requirement.id}>
                                            <span>{requirement.requirement}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Box>

                        <Box component="footer" sx={{paddingRight: "25px", mt: 10}}>
                            <Typography variant="body1" sx={{fontSize: "12px", color: "#939393"}}>{t('common.footerNote')}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default StartAssessment;