import React from 'react';
import {Box,Typography, Stack, Chip} from '@mui/material';
import { useTranslation } from 'react-i18next';

const questionTag = {
    title: 'Frontend Developer',
    tags: ['Javascript', 'Angular', 'React', 'SASS']
};


const AssessmentBasicInfo = () => {
    const { t } = useTranslation();
    return (
        <Box>
            <Box>
                <Typography variant="h6" sx={{ color: '#676767' }}>{t('common.description')}</Typography>
                <Typography variant="body1" sx={{ mt: 1, lineHeight: '27px' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, lineHeight: '27px' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 2, mb: 1, color: '#7c96ab' }}>
                    {questionTag.title}
                </Typography>
                <Stack direction="row" spacing={2}>
                    {
                        questionTag.tags.map((tag) => (
                            <Chip label={tag} key={tag} />
                        ))
                    }
                </Stack>
            </Box>

            <Box sx={{ mt: 3, pt: 2, borderTop: 'solid 1px #d6d6d6' }}>
                <Typography variant="h6" sx={{ color: '#676767', mb: 2 }}>{t('createAssessment.instruction')}</Typography>
                <Typography variant="body1" sx={{ mt: 1, lineHeight: '27px' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
            </Box>
        </Box>
    )

}

export default AssessmentBasicInfo;