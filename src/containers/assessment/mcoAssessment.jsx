import React from "react";
import { Box, Typography, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { useTranslation } from "react-i18next";

const McoAssessment = () => {
    const {t} = useTranslation();
    const mcoTest = {
        question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        options: [
            {
                id: 1,
                option: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                answer: true
            },
            {
                id: 2,
                option: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                answer: false
            },
            {
                id: 3,
                option: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                answer: false
            },
            {
                id: 4,
                option: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                answer: true
            }
        ]
    };

    return (
        <Box>
            <Typography variant="body2" sx={{color: "#7c7c7c", fontWeight: "400", lineHeight: "2", fontSize: "14px"}}>
                {mcoTest.question}
            </Typography>

            <Typography variant="h6" sx={{color: "#676767", fontSize: "18px !important", fontWeight: "500", mt: 3, mb: 1}}>
                {t('common.multipleChoiceOptions')}
            </Typography>

            <Box>
                <FormGroup className="d-flex justify-space-between" sx={{flexWrap: "wrap", flexDirection: "row"}}>
                    {
                        mcoTest.options.map((option) => (
                            <Box className="checkbox-wrapper" key={option.id} sx={{width: "calc(50% - 15px)", border: "solid 1px #cbd2dc", padding: "10px", borderRadius: "6px", marginBottom: "20px"}}>
                                <FormControlLabel control={<Checkbox />} label={option.option}
                                sx={{color: "#676767"}} />
                            </Box>
                        ))
                    }
                </FormGroup>
            </Box>

        </Box>
    )
}

export default McoAssessment;