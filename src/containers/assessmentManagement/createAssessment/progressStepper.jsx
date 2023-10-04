import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Typography, Button, Divider } from '@mui/material';
import AssessmentInformation from './assessmentInformation';
import AddSectionAndQuestions from './addSectionAndQuestions';

const CommonButton = ({ children, color, disabled, size, sx, variant, onClick }) => {
    return (
        <Button
            color={color}
            disabled={disabled}
            size={size}
            sx={sx}
            variant={variant}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

const ProgressStepper = () => {
    const steps = ['Assessment Information', 'Add Sections and Questions'];
    const stepDescription = ['Description 1', 'Description 2', 'Description 3'];
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});

    const totalSteps = steps.length;
    const completedSteps = Object.keys(completed).length;
    const allStepsCompleted = completedSteps === totalSteps;

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleNext = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper sx={{ mt: 4, mb: 4, ml: 8, mr: 8 }}
                activeStep={activeStep}
            >
                {steps.map((step, index) => (
                    <Step
                        key={step}
                        completed={completed[index]}
                    >
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Divider></Divider>
            <div>
                {allStepsCompleted ?
                    (
                        <>
                            <Typography
                                sx={{ mt: 2, mb: 1 }}
                            >
                                All Steps Completed
                            </Typography>
                            <Box
                                sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
                            >
                                <Box sx={{ flex: '1 1 auto' }} />
                                <CommonButton
                                    variant="contained"
                                    onClick={handleReset}
                                >
                                    Reset
                                </CommonButton>
                            </Box>
                        </>
                    ) : (
                        <>

                            {
                                activeStep ? (
                                    <AddSectionAndQuestions />

                                ) : (
                                    <AssessmentInformation />
                                )
                            }

                            <Box
                                sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
                            >
                                <CommonButton
                                    onClick={handleBack}
                                    variant="contained"
                                    disabled={activeStep === 0}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </CommonButton>
                                <Box sx={{ żflex: '1 1 auto' }} />
                                <CommonButton
                                    onClick={handleNext}
                                    variant="contained"
                                >
                                    {completedSteps === totalSteps - 1 ? 'Finish' : 'Next'}
                                </CommonButton>
                            </Box>
                        </>
                    )}
            </div>
        </Box>
    );
};

export default ProgressStepper;