import React from "react";
import { 
    Box, Button, Container, Typography, IconButton, List, ListItem, ListItemText, 
    Grid, Accordion, AccordionSummary, AccordionDetails, Dialog, DialogActions, DialogContent, 
    DialogContentText, DialogTitle, Slide
} from "@mui/material";
import { useTranslation } from "react-i18next";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import "./assessmentTestTracker.scss";
import McoAssessment from "./mcoAssessment";
import FibAssessment from "./fibAssessment";
import TofAssessment from "./tofAssessment";
import MtfAssessment from "./mtfAssessment";
import OtsAssessment from "./otsAssessment";
import CountDown from "./countDown";
import SubjectiveAssessment from "./subjectiveAssessment";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const AssessmentTestTracker = () => {

    const {t} = useTranslation();
    const tests = {
        current: "01",
        completed: "07",
        marked: "05",
        skipped: "00"
    }

    const [expanded, setExpanded] = React.useState('panel1');

    const testLevel = [
        {id: 1, section: "01", type: "completed"},
        {id: 2, section: "02", type: "completed"},
        {id: 3, section: "03", type: "completed"},
        {id: 4, section: "04", type: "marked"},
        {id: 5, section: "05", type: "marked"},
        {id: 6, section: "06", type: "marked"},
        {id: 7, section: "07", type: "marked"},
        {id: 8, section: "08", type: "skipped"},
        {id: 9, section: "09", type: "current"},
        {id: 10, section: "10", type: "notStarted"},
        {id: 11, section: "11", type: "notStarted"},
        {id: 12, section: "12", type: "notStarted"}
    ];

    const [helpModalOpen, setHelpModalOpen] = React.useState(false);
    const [hintsModalOpen, setHintsModalOpen] = React.useState(false);

    const helpModalHandleOpen = () => {
        setHelpModalOpen(true);
    };

    const helpModalHandleClose = () => {
        setHelpModalOpen(false);
    };

    const hintsModalHandleOpen = () => {
        setHintsModalOpen(true);
    }

    const hintsModalHandleClose = () => {
        setHintsModalOpen(false);
    }

    return (
        <Box>
            <Box className="assessment-header">
                <Container maxWidth="xl">
                    <Box className="d-flex justify-space-between align-center">
                        <Typography variant="h6" sx={{fontWeight: '300'}}>Proactive Monitoring Assessment For MCQ & SFA - Manual</Typography>
                        <Box className="d-flex justify-end align-center right-control-holder">
                            <IconButton aria-label="info" onClick={helpModalHandleOpen}>
                                <InfoOutlinedIcon />
                            </IconButton>
                            <Dialog
                                open={helpModalOpen}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={helpModalHandleClose}
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle>{"Help Modal Title"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button variant="contained" color="secondary" onClick={helpModalHandleClose}>Cancel</Button>
                                    <Button variant="contained" color="primary" onClick={helpModalHandleClose}>Ok</Button>
                                </DialogActions>
                            </Dialog>

                            <Box className="d-inline-flex align-center">
                                <Typography variant="body1">Time Remaining</Typography>
                                <CountDown />
                            </Box>
                            <Button variant="banner" color="primary">Submit</Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={4} className="assessment-left-bar">
                        <Box className="d-flex flex-column">
                            <List className="d-flex justify-space-between test-list">
                                <ListItem>
                                    <ListItemText className="primary" primary={tests.current} secondary={t('testTracker.current')} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText className="success" primary={tests.completed} secondary={t('testTracker.completed')} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText className="warn" primary={tests.marked} secondary={t('testTracker.marked')} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText className="danger" primary={tests.skipped} secondary={t('testTracker.skipped')} />
                                </ListItem>
                            </List>
                            
                            <Box className="section-accordion">
                                <Accordion expanded={expanded === 'panel1'}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className="section-name">
                                            Section Name
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul>
                                            {
                                                testLevel.map((level) => (
                                                    <li key={level.id}>
                                                        <Typography variant="body1" 
                                                            sx={{backgroundColor: 
                                                                    level.type === 'completed' ? '#4caf50' :
                                                                    level.type === 'current' ? '#153776' : 
                                                                    level.type === 'skipped' ? '#ad0521' : 
                                                                    level.type === 'marked' ? '#ff9d00' : '#e5e5e5'
                                                            }}
                                                            className={level.type === 'notStarted' ? 'not-started' : ''}
                                                        >
                                                            {level.section}
                                                        </Typography>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion expanded={expanded === 'panel2'}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography className="section-name">
                                            <LockOutlinedIcon />                                            
                                            Section Name
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion expanded={expanded === 'panel3'}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Typography className="section-name">
                                            <LockOutlinedIcon />                                            
                                            Section Name
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={8} className="assessment-right-section">
                        <Box className="d-flex flex-column">
                            <Box className="d-flex justify-space-between">
                                <Box className="left-action">
                                    <Button variant="contained" color="secondary">{t('testTracker.mark')}</Button>
                                    <Button variant="text" className="link-btn" onClick={hintsModalHandleOpen}>{t('common.hints')}</Button>
                                </Box>
                                <Box className="right-action">
                                    <Button variant="outlined" color="error">{t('testTracker.skip')}</Button>
                                    <Button variant="outlined" color="primary">{t('common.prev')}</Button>
                                    <Button variant="outlined" color="primary">{t('common.next')}</Button>
                                </Box>
                            </Box>

                            <Box className="d-flex flex-column test-holder">
                                <McoAssessment />
                                {/* <FibAssessment />
                                <TofAssessment /> 
                                <MtfAssessment /> 
                                <OtsAssessment />
                                <SubjectiveAssessment /> */}
                            </Box>

                            <Box className="d-flex justify-space-between">
                                <Box className="left-action">
                                    <Button variant="contained" color="secondary">{t('testTracker.mark')}</Button>
                                    <Button variant="text" className="link-btn" onClick={hintsModalHandleOpen}>{t('common.hints')}</Button>
                                </Box>
                                <Box className="right-action">
                                    <Button variant="outlined" color="error">{t('testTracker.skip')}</Button>
                                    <Button variant="outlined" color="primary">{t('common.prev')}</Button>
                                    <Button variant="outlined" color="primary">{t('common.next')}</Button>
                                </Box>
                            </Box>

                            <Dialog
                                open={hintsModalOpen}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={hintsModalHandleClose}
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle>{"Hints Modal Title"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button variant="contained" color="secondary" onClick={hintsModalHandleClose}>Cancel</Button>
                                    <Button variant="contained" color="primary" onClick={hintsModalHandleClose}>Ok</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AssessmentTestTracker;