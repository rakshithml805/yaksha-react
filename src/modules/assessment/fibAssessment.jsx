import React from "react";
import { Box, FormGroup, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const FibAssessment = () => {
    const {t} = useTranslation();

    return(
        <Box>
            <Typography variant="h6" sx={{color: "#676767", fontSize: "18px !important", fontWeight: "500", mb: 1}}>
                {t('testTracker.fillInTheBlanks')}
            </Typography>

            <FormGroup>
                <Box sx={{color: "#676767", fontWeight: "300", lineHeight: "70px"}}>
                    Lorem Ipsum is simply dummy text of the printing and 
                    <TextField label="Answer" variant="outlined" sx={{mx: 2, my: 1}} />
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                    <TextField label="Answer" variant="outlined" sx={{mx: 2, my: 1}} />
                    scrambled it to make a type specimen book. It has survived not only five 
                    <TextField label="Answer" variant="outlined" sx={{mx: 2, my: 1}} />
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
                    <TextField label="Answer" variant="outlined" sx={{mx: 2, my: 1}} />
                    Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Box>
            </FormGroup>
        </Box>
    )
}

export default FibAssessment;