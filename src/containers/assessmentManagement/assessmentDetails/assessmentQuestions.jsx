import React from 'react';
import {
    Box, Typography, Accordion, AccordionSummary, AccordionDetails, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Paper
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const questionList = [
    {
        id: 1, skills: '3', objective: '15', subjective: '15', coding: '01',
        stack: 'NA', duration: '65 Mins'
    },
    {
        id: 2, skills: '5', objective: '15', subjective: '5', coding: '01',
        stack: 'NA', duration: '45 Mins'
    },
    {
        id: 3, skills: '3', objective: '12', subjective: '12', coding: '01',
        stack: 'NA', duration: '55 Mins'
    },
    {
        id: 4, skills: '8', objective: '10', subjective: '3', coding: '04',
        stack: 'NA', duration: '60 Mins'
    },
]

function createData(name, objective, subjective, coding, stack, duration) {
    return { name, objective, subjective, coding, stack, duration };
}

const rows = [
    createData('Skill Name 1', 159, 6, 24, 4, '60 Mins'),
    createData('Skill Name 2', 237, 9, 37, 4, '50 Mins'),
    createData('Skill Name 3', 262, 16, 24, 6, '45 Mins'),
    createData('Skill Name 4', 305, 3, 67, 4, '60 Mins'),
    createData('Skill Name 5', 356, 16, 49, 3, '60 Mins'),
    createData('Skill Name 6', 256, 16, 49, 3, '40 Mins'),
];

const AssessmentQuestions = () => {
    const { t } = useTranslation();
    const [expanded, setExpanded] = React.useState(false);
    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box>
            <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Box className="d-flex justify-space-between" sx={{ width: "90%" }}>
                        <Typography variant="subtitle1">
                            Section name
                        </Typography>
                        <Box className="d-flex">
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[0].skills}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('common.skills')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[0].objective}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('questionBanks.objective')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[0].skills}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('common.skills')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[0].subjective}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('questionBanks.subjective')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[0].coding}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('questionBanks.coding')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[0].stack}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('questionBanks.stack')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[0].duration}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('common.duration')}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Skill Name</TableCell>
                                    <TableCell align="right">Objective</TableCell>
                                    <TableCell align="right">Subjective</TableCell>
                                    <TableCell align="right">Coding</TableCell>
                                    <TableCell align="right">stack</TableCell>
                                    <TableCell align="right">Duration</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.objective}</TableCell>
                                        <TableCell align="right">{row.subjective}</TableCell>
                                        <TableCell align="right">{row.coding}</TableCell>
                                        <TableCell align="right">{row.stack}</TableCell>
                                        <TableCell align="right">{row.duration}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Box className="d-flex justify-space-between" sx={{ width: "90%" }}>
                        <Typography variant="subtitle1">
                            Section name
                        </Typography>
                        <Box className="d-flex">
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[1].skills}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('common.skills')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[1].objective}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('questionBanks.objective')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[1].skills}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('common.skills')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[1].subjective}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('questionBanks.subjective')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[1].coding}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('questionBanks.coding')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[1].stack}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('questionBanks.stack')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[1].duration}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('common.duration')}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                        laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Box className="d-flex justify-space-between" sx={{ width: "90%" }}>
                        <Typography variant="subtitle1">
                            Section name
                        </Typography>
                        <Box className="d-flex">
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[2].skills}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('common.skills')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[2].objective}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('questionBanks.objective')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[2].skills}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('common.skills')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[2].subjective}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('questionBanks.subjective')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[2].coding}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('questionBanks.coding')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[2].stack}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('questionBanks.stack')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[2].duration}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('common.duration')}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Box className="d-flex justify-space-between" sx={{ width: "90%" }}>
                        <Typography variant="subtitle1">
                            Section name
                        </Typography>
                        <Box className="d-flex">
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[3].skills}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('common.skills')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[3].objective}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('questionBanks.objective')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[3].skills}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('common.skills')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[3].subjective}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('questionBanks.subjective')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[3].coding}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('questionBanks.coding')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[3].stack}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('questionBanks.stack')}</Typography>
                            </Box>
                            <Box className="d-flex flex-column" sx={{ mr: 3 }}>
                                <Typography variant='body2'>{questionList[3].duration}</Typography>
                                <Typography variant='caption' color="text.disabled">{t('common.duration')}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default AssessmentQuestions;