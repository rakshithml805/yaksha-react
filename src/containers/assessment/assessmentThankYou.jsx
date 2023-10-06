import React from "react";
import { Box, Card, Container, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import logo from "../../assets/yaksha.png";

const AssessmentThankYou = () => {

    const data = {
        testName: "Adaptive Assessment Test",
        userData: {
            firstName: "Shrinivasa",
            lastName: "Govinda",
            emailId: "shrinivasa.govinda@gmail.com",
        },
        timeUtilization: "02m 06s",
        questionsAttempted: 17,
        questionsSkipped: 1,
        questionsMarkedForReview: 0,
        remainingAttempts: 0
    }

    return(
        <Box sx={{backgroundColor: "#f9f9f9", pb: 4, height: "100%", overflowY: "auto"}}>
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
                            <Typography variant='h2' sx={{mb: 2}}>
                                Thank you <strong>{data.userData.firstName} {data.userData.lastName}</strong> for taking 
                                <strong> {data.testName}</strong> on our assessment platform.
                            </Typography>
                            <Typography variant='h1'>Please check your assessment summary below</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Card className="common-card d-flex justify-center" sx={{py: 2, px: 3}}>
                            <Typography variant='body2'>
                                <span style={{opacity: 0.6, marginRight: '6px'}}>First Name:</span> {data.userData.firstName}
                            </Typography>
                            <Typography variant='body2' sx={{ml: 3}}>
                                <span style={{opacity: 0.6, marginRight: '6px'}}>Last Name:</span> {data.userData.lastName}
                            </Typography>
                            <Typography variant='body2' sx={{ml: 3}}>
                                <span style={{opacity: 0.6, marginRight: '6px'}}>Email ID:</span> {data.userData.emailId}
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card className="common-card d-flex flex-column" sx={{py: 2, px: 3}}>
                            <TableContainer className="d-flex justify-center">
                                <Table sx={{width: 330}} area-label="simple table">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={{px: 0, py: 1, border: "none"}}>Time Utilization</TableCell>
                                            <TableCell sx={{px: 0, py: 1, border: "none"}}>{data.timeUtilization}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{px: 0, py: 1, border: "none"}}>Questions Attempted</TableCell>
                                            <TableCell sx={{px: 0, py: 1, border: "none"}}>{data.questionsAttempted}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{px: 0, py: 1, border: "none"}}>Questions Skipped</TableCell>
                                            <TableCell sx={{px: 0, py: 1, border: "none"}}>{data.questionsSkipped}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{px: 0, py: 1, border: "none"}}>Questions Marked for Review</TableCell>
                                            <TableCell sx={{px: 0, py: 1, border: "none"}}>{data.questionsMarkedForReview}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{px: 0, py: 1, border: "none"}}>Remaining Attempts</TableCell>
                                            <TableCell sx={{px: 0, py: 1, border: "none"}}>{data.remainingAttempts}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <Box sx={{mt: 3}}>
                                <Typography variant="body2" className="text-center">Reports will be shard with you by the administrator</Typography>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AssessmentThankYou;