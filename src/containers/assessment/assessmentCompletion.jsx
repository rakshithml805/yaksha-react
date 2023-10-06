import React from "react";
import { Box, Card, Container, Grid, Typography, LinearProgress, Button } from "@mui/material";
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement,
    LineElement, Title, Tooltip, Legend, ArcElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import logo from "../../assets/yaksha.png";
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import "./assessmentCompletion.scss";

ChartJS.register (
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
    scales: {
        x: {
            display: false
        },
        y: {
            ticks: {
                callback: function(label) {
                    switch(label) {
                        case 0: return 'Nil';
                        case 100: return 'Beginner';
                        case 200: return 'Intermediate';
                        case 300: return 'Advanced';
                    }
                }
            }
        }
    }
};

const labels = ['', '', '', '', '', ''];

export const data = {
    labels,
    datasets: [
      {
        data: [0, 100, 200, 100, 200, 300],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
};

function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
}

const AssessmentCompletion = () => {

    const testResultData = {
        testName: "Adaptive Assessment Test",
        userData: {
            firstName: "Shrinivasa",
            lastName: "Govinda",
            emailId: "shrinivasa.govinda@gmail.com",
        },
        testData: [
            {
                id: 1,
                timeUtilized: "15m 30s",
                avgTimePerQuestion: "02m 10s",
                totalQuestions: 15,
                totalCorrectAnswers: 9,
                totalIncorrectAnswers: 3,
                totalBeginnerQuestions: 6,
                beginnerQuestionsAnswered: 4,
                totalIntermediateQuestions: 5,
                interMediateQuestionsAnswered: 3,
                totalAdvancedQuestions: 4,
                advancedQuestionsAnswered: 2,
                passPercentage: "60%",
                skillName: ".NET",
                achievedProficiency: "Advanced",
                questionAttempted: 12,
                questionSkipped: 1,
                questionMarked: 2,
                remainingAttempts: 2,
                proficiencyBasedScore: {
                    beginner: 75,
                    intermediate: 67,
                    advanced: 60
                }
            }
        ]
    }

    return (
        <Box sx={{backgroundColor: "#f9f9f9", pb: 4}}>
            <Box className="assessment-header">
                <Container maxWidth="xl">
                    <Box className="d-flex justify-center align-center">
                        <Box sx={{height: "50px"}}>
                            <img src={logo} alt="Yaksha" />
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box className="text-center" sx={{mt: 4, mb: 0}}>
                            <Typography variant='h2' sx={{mb: 2}}>You have completed</Typography>
                            <Typography variant='h1'>{testResultData.testName}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Card className="common-card d-flex" sx={{py: 2, px: 3}}>
                            <Typography variant='body2'>
                                <span style={{opacity: 0.6, marginRight: '6px'}}>First Name:</span> {testResultData.userData.firstName}
                            </Typography>
                            <Typography variant='body2' sx={{ml: 3}}>
                                <span style={{opacity: 0.6, marginRight: '6px'}}>Last Name:</span> {testResultData.userData.lastName}
                            </Typography>
                            <Typography variant='body2' sx={{ml: 3}}>
                                <span style={{opacity: 0.6, marginRight: '6px'}}>Email ID:</span> {testResultData.userData.emailId}
                            </Typography>
                        </Card>


                        {
                            testResultData.testData.map((result) => (
                                <Box key={result.id}>
                                    <Card className="common-card d-flex" sx={{py: 3, px: 0, mt: 3}}>
                                        <Grid container spacing={3} sx={{m: 0}}>
                                            <Grid item xs={3} sx={{py: "0px !important"}}>
                                                <Box className="d-flex align-start">
                                                    <HourglassBottomOutlinedIcon className="icon-style"/>
                                                    <Box className="d-flex flex-column">
                                                        <Typography variant='caption' sx={{fontSize: '18px', lineHeight: '1.2'}} color="text.primary">{result.timeUtilized}</Typography>
                                                        <Typography sx={{fontSize:'14px'}} color="text.offwhite">Time Utilized</Typography>
                                                    </Box>
                                                </Box>

                                                <Box className="d-flex align-start" sx={{mt: 3}}>
                                                    <HourglassBottomOutlinedIcon className="icon-style"/>
                                                    <Box className="d-flex flex-column">
                                                        <Typography variant='caption' sx={{fontSize: '18px', lineHeight: '1.2'}} color="text.primary">{result.avgTimePerQuestion}</Typography>
                                                        <Typography sx={{fontSize:'14px'}} color="text.offwhite">Average Time per Question</Typography>
                                                    </Box>
                                                </Box>

                                                <Box className="d-flex align-start" sx={{mt: 3}}>
                                                    <QuestionMarkOutlinedIcon className="icon-style"/>
                                                    <Box className="d-flex flex-column">
                                                        <Typography variant='caption' sx={{fontSize: '18px', lineHeight: '1.2'}} color="text.primary">{result.totalCorrectAnswers} / {result.totalQuestions}</Typography>
                                                        <Typography sx={{fontSize:'14px'}} color="text.offwhite">Total Correct Answers</Typography>
                                                    </Box>
                                                </Box>

                                                <Box className="d-flex align-start" sx={{mt: 3}}>
                                                    <PriorityHighOutlinedIcon className="icon-style"/>
                                                    <Box className="d-flex flex-column">
                                                        <Typography variant='caption' sx={{fontSize: '18px', lineHeight: '1.2'}} color="text.primary">{result.totalIncorrectAnswers} / {result.totalQuestions}</Typography>
                                                        <Typography sx={{fontSize:'14px'}} color="text.offwhite">Total Incorrect Answers</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>

                                            <Grid item xs={6} sx={{py: "0px !important", borderLeft: "solid 1px #dddddd", borderRight: "solid 1px #dddddd"}}>
                                                <Box className="d-flex flex-column align-center">
                                                    <Typography variant='h1' sx={{fontSize: '30px !important'}} color="text.primary">{result.skillName}</Typography>
                                                    <Typography sx={{fontSize:'16px'}} color="text.offwhite">Skill Name</Typography>
                                                </Box>

                                                <Box className="d-flex flex-column align-center" sx={{mt: 4}}>
                                                    <Typography variant='h1' sx={{fontSize: '30px !important'}} color="text.primary">{result.achievedProficiency}</Typography>
                                                    <Typography sx={{fontSize:'16px'}} color="text.offwhite">Achieved Proficiency</Typography>
                                                </Box>
                                            </Grid>

                                            <Grid item xs={3} sx={{py: "0 !important"}}>
                                                <Box className="d-flex flex-column">
                                                    <Typography variant='caption' sx={{fontSize: '18px', lineHeight: '1.2'}} color="text.primary">{result.advancedQuestionsAnswered} / {result.totalAdvancedQuestions}</Typography>
                                                    <Typography sx={{fontSize:'14px'}} color="text.offwhite">Advanced Questions</Typography>
                                                </Box>

                                                <Box className="d-flex flex-column" sx={{mt: 3}}>
                                                    <Typography variant='caption' sx={{fontSize: '18px', lineHeight: '1.2'}} color="text.primary">{result.beginnerQuestionsAnswered} / {result.totalBeginnerQuestions}</Typography>
                                                    <Typography sx={{fontSize:'14px'}} color="text.offwhite">Beginner Questions</Typography>
                                                </Box>

                                                <Box className="d-flex flex-column" sx={{mt: 3}}>
                                                    <Typography variant='caption' sx={{fontSize: '18px', lineHeight: '1.2'}} color="text.primary">{result.interMediateQuestionsAnswered} / {result.totalIntermediateQuestions}</Typography>
                                                    <Typography sx={{fontSize:'14px'}} color="text.offwhite">Intermediate Questions</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Card>

                                    <Grid container spacing={3} sx={{my: 0}}>
                                        <Grid item xs={3}>
                                            <Card className="common-card d-flex flex-column" sx={{py: 2, px: 3}}>
                                                <Typography variant='h2' color="primary">{result.questionAttempted} / {result.totalQuestions}</Typography>
                                                <Typography variant='body1' color="text.secondary">Questions Attempted</Typography>
                                            </Card>
                                        </Grid>

                                        <Grid item xs={3}>
                                            <Card className="common-card d-flex flex-column" sx={{py: 2, px: 3}}>
                                                <Typography variant='h2' color="error">{result.questionSkipped}</Typography>
                                                <Typography variant='body1' color="text.secondary">Questions Skipped</Typography>
                                            </Card>
                                        </Grid>

                                        <Grid item xs={3}>
                                            <Card className="common-card d-flex flex-column" sx={{py: 2, px: 3}}>
                                                <Typography variant='h2' color="warning">{result.questionMarked}</Typography>
                                                <Typography variant='body1' color="text.secondary">Questions Marked for Review</Typography>
                                            </Card>
                                        </Grid>

                                        <Grid item xs={3}>
                                            <Card className="common-card d-flex flex-column" sx={{py: 2, px: 3}}>
                                                <Typography variant='h2' color="warning">{result.remainingAttempts}</Typography>
                                                <Typography variant='body1' color="text.secondary">Remaining Attempts</Typography>
                                            </Card>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={3} sx={{my: 0}}>
                                        <Grid item xs={6}>
                                            <Card className="common-card d-flex flex-column" sx={{py: 2, px: 3, height: "100%"}}>
                                                <Typography variant="h2" align="center" sx={{mb: 3}}>Proficiency Level Journey</Typography>
                                                <Line options={options} data={data} />
                                            </Card>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Card className="common-card d-flex flex-column" sx={{py: 2, px: 3, height: "100%"}}>
                                                <Typography variant="h2" align="center" sx={{mb: 3}}>Proficiency Based Score</Typography>
                                                <Box>
                                                    <Typography variant="body1">Beginner</Typography>
                                                    <LinearProgressWithLabel value={result.proficiencyBasedScore.beginner} sx={{height: "10px"}} />
                                                </Box>
                                                <Box sx={{mt: 3}}>
                                                    <Typography variant="body1">Intermediate</Typography>
                                                    <LinearProgressWithLabel value={result.proficiencyBasedScore.intermediate} sx={{height: "10px"}} />
                                                </Box>
                                                <Box sx={{mt: 3}}>
                                                    <Typography variant="body1">Advanced</Typography>
                                                    <LinearProgressWithLabel value={result.proficiencyBasedScore.advanced} sx={{height: "10px"}} />
                                                </Box>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))
                        }

                        <Box sx={{mt: 3}}>
                            <Card className="common-card d-flex justify-end" sx={{p: 3, mt: 3}}>
                                <Button variant="contained" color="primary">Download Report</Button>
                                <Button variant="contained" color="secondary" sx={{ml: 2}}>Feedback</Button>
                            </Card>
                        </Box>
                        
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AssessmentCompletion;