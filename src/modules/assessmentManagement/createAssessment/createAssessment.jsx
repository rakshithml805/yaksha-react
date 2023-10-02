import React, {useState} from 'react';
import Banner from '../../../components/banner/banner';
import { Box, Stepper, Step, StepLabel,Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Assessment } from '@mui/icons-material';
import ProgressStepper from  './progressStepper';


const breadcrumbs = [
    {
        name: "Dashboard",
        url: "/dashboard"
    },
    {
        name: "Create Assessment",
        url: ""
    }
];


const CreateAssessment = () => {
    const { t } = useTranslation();
    return (
        <Box >
        <Banner title={"Create Assessment"} crumbs={breadcrumbs} />
        <ProgressStepper />
        </Box>
    )


}

export default CreateAssessment;