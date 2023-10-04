import React from "react";
import { Box, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const TofAssessment = () => {
    const {t} = useTranslation();
    const tofTest = {
        question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        options: [
            {
                id: 1,
                option: "True",
                answer: false
            },
            {
                id: 2,
                option: "False",
                answer: true
            }
        ]
    }

    return (
        <Box>
            <Typography variant="body2" sx={{color: "#7c7c7c", fontWeight: "400", lineHeight: "2", fontSize: "14px"}}>
                {tofTest.question}
            </Typography>

            <Typography variant="h6" sx={{color: "#676767", fontSize: "18px !important", fontWeight: "500", mt: 3, mb: 1}}>
                {t('testTracker.trueOrFalse')}
            </Typography>

            <Box>
                <FormControl>
                    <RadioGroup sx={{flexDirection: "row"}}
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={tofTest.options[0].option}
                        name="radio-buttons-group"
                    >
                        {
                            tofTest.options.map((option) => (
                                <FormControlLabel value={option.option} key={option.id} control={<Radio />} label={option.option} sx={{color: "#676767", mr: 5}} />
                            ))
                        }
                    </RadioGroup>
                </FormControl>
            </Box>
        </Box>
    )
}

export default TofAssessment;