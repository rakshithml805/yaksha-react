import Logo from "../../assets/yaksha.png";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, TextField, Button, List, ListItem, Chip, Container } from "@mui/material";
import './startAssessment.scss';
import { useNavigate } from "react-router-dom";

export default function StartAssessment() {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const startAssessment = () => {
        let path = "/assessment-test-tracker";
        navigate(path);
    }
    return (
        <Box>
            <Container maxWidth="xl">
                <Grid container spacing={2} sx={{height: "97vh"}}>
                    <Grid item xs={12} md={6} lg={7} className="assessment-detail d-flex flex-column align-center justify-center">
                        <Box sx={{p:3, m:3}} className="assessment-box">
                            <Typography variant="caption" color="white">Standard Assessment</Typography>
                            <Typography variant="h1" color="white">Assessment Name</Typography>
                            <Grid container spacing={2} sx={{mt:2, mb:2}}>
                                <Grid item xs={4} md={3} lg={2}>
                                    <Typography variant="body2" color="white">45</Typography>
                                    <Typography variant="caption" color="white">Duration</Typography>
                                </Grid>
                                <Grid item xs={4} md={3} lg={2}>
                                    <Typography variant="body2" color="white">45</Typography>
                                    <Typography variant="caption" color="white">Attempts</Typography>
                                </Grid>
                                <Grid item xs={4} md={3} lg={2}>
                                    <Typography variant="body2" color="white">45</Typography>
                                    <Typography variant="caption" color="white">Sections</Typography>
                                </Grid>
                                <Grid item xs={4} md={3} lg={2}>
                                    <Typography variant="body2" color="white">45</Typography>
                                    <Typography variant="caption" color="white">Questions</Typography>
                                </Grid>
                                <Grid item xs={4} md={3} lg={3}>
                                    <Typography variant="body2" color="white">45</Typography>
                                    <Typography variant="caption" color="white">Pass Percentage</Typography>
                                </Grid>
                            </Grid>
                            <Chip label="Skill Name" variant="skill" sx={{mr:1, mb:1}} />
                            <Chip label="Skill Name" variant="skill" sx={{mr:1, mb:1}} />
                            <Chip label="Skill Name" variant="skill" sx={{mr:1, mb:1}} />
                            <Chip label="Skill Name" variant="skill" sx={{mr:1, mb:1}} />
                            <Chip label="Skill Name" variant="skill" sx={{mr:1, mb:1}} />
                            <Chip label="Skill Name" variant="skill" sx={{mr:1, mb:1}} />
                            <Chip label="Skill Name" variant="skill" sx={{mr:1, mb:1}} />
                            <Box sx={{my:2}}>
                                <Typography variant="h2" color="white">Description</Typography>
                                <Typography variant="body1" color="white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam accusantium voluptates nulla ad fugiat consequatur facere ullam suscipit distinctio? Suscipit nihil laboriosam quo facilis tempore minus quia sint voluptatum iure.</Typography>
                            </Box>
                            <Box sx={{my:2}}>
                                <Typography variant="h2" color="white">Instruction</Typography>
                                <Typography variant="body1" color="white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam accusantium voluptates nulla ad fugiat consequatur facere ullam suscipit distinctio? Suscipit nihil laboriosam quo facilis tempore minus quia sint voluptatum iure.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={5} className="d-flex flex-column align-center justify-center">
                        <Box className="d-flex flex-column align-center justify-center">
                            <img src={Logo} alt="Yaksha" />
                            <Grid container spacing={2} sx={{mt:1, mb:3}}>
                                <Grid item xs={12} md={12} lg={6}>
                                    <TextField label="FirtName" variant="outlined" required fullWidth />
                                </Grid>
                                <Grid item xs={12} md={12} lg={6}>
                                    <TextField label="Lastname" variant="outlined" required fullWidth />
                                </Grid>
                                <Grid item xs={12} md={12} lg={6}>
                                    <TextField label="Email" variant="outlined" required fullWidth />
                                </Grid>
                                <Grid item xs={12} md={12} lg={6}>
                                    <TextField label="Phone" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" onClick={startAssessment} fullWidth>{t('testTracker.startAssessment')}</Button>
                                </Grid>
                            </Grid>
                            <Box sx={{width: '100%'}}>
                                <Typography variant="subtitle1" sx={{textAlign: 'center'}}>{t('testTracker.systemRequirement')}</Typography>
                                <List>
                                    <ListItem sx={{px:0}}>
                                        <Typography variant="body1" color="text.secondary">alskdjfslf asldfkjas asdlf asdl;fj asldfkj asdfasd fsd</Typography>
                                    </ListItem>
                                    <ListItem sx={{px:0}}>
                                        <Typography variant="body1" color="text.secondary">alskdjfslf asldfkjas asdlf asdl;fj asldfkj asdfasd fsd</Typography>
                                    </ListItem>
                                    <ListItem sx={{px:0}}>
                                        <Typography variant="body1" color="text.secondary">alskdjfslf asldfkjas asdlf asdl;fj asldfkj asdfasd fsd</Typography>
                                    </ListItem>
                                    <ListItem sx={{px:0}}>
                                        <Typography variant="body1" color="text.secondary">alskdjfslf asldfkjas asdlf asdl;fj asldfkj asdfasd fsd</Typography>
                                    </ListItem>
                                    <ListItem sx={{px:0}}>
                                        <Typography variant="body1" color="text.secondary">alskdjfslf asldfkjas asdlf asdl;fj asldfkj asdfasd fsd</Typography>
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}