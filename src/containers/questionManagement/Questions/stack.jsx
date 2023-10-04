import React from 'react'
import { Box, Typography, Grid, TextField, InputLabel, FormControl, Select, OutlinedInput, MenuItem, Checkbox, ListItemText, Button } from '@mui/material'
import { useTranslation } from 'react-i18next';

export default function Stack() {
    const {t} = useTranslation();
    const languageList = [
        {
            id:1,
            title:'Java'
        },
        {
            id:2,
            title:'Javascript'
        },
        {
            id:3,
            title:'Python'
        },
        {
            id:4,
            title:'C++'
        },
    ]
    const [language, setLanguage] = React.useState([]);
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
      };
      const [environment, setEnvironment] = React.useState([]);
    const handleEnvironmentChange = (event) => {
        setEnvironment(event.target.value);
      };

    
  return (
    <>
        <Grid item xs={4}>
            <Box sx={{minHeight:'750px'}}>
                <Typography variant="h2" sx={{mb:2}}>{t('createQuestion.selectStackEnvironment')}</Typography>
                <Grid container columnGap={2} rowGap={3}>
                    <Grid item xs={12} >
                        <FormControl fullWidth>
                        <InputLabel>{t('createQuestion.toolChain')}</InputLabel>
                        <Select
                            value={language}
                            label={t('createQuestion.toolChain')}
                            onChange={handleLanguageChange}
                        >
                            {languageList.map ((language) => (
                                <MenuItem key={language.id} value={language.title}>{language.title}</MenuItem>
                            ))}
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>{t('createQuestion.codingEnvironment')}</InputLabel>
                            <Select
                                value={environment}
                                label={t('createQuestion.codingEnvironment')}
                                onChange={handleEnvironmentChange}
                            >
                                <MenuItem  value="Container">{t('createQuestion.container')}</MenuItem>
                                <MenuItem  value="Virtual Machine">{t('createQuestion.virtualMachine')}</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label={t('createQuestion.stackName')} variant="outlined" disabled value={language + " Stack"} fullWidth/>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField  label={t('createQuestion.totalNumberofTestCases')} variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField  label={t('createQuestion.score')} variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label={t('createQuestion.stackPathsToHide')} variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label={t('createQuestion.gitTemplateURL')} variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label={t('createQuestion.scanConfigXML')} variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined">{t('createQuestion.validateXML')}</Button>
                    </Grid>
                </Grid>
            </Box>
            <Box className="d-flex justify-end">
                <Button variant="contained" color='secondary' sx={{mr:3}}>{t('common.cancel')}</Button>
                <Button variant="contained">{t('common.create')}</Button>
            </Box>
        </Grid>
    </>
  )
}
