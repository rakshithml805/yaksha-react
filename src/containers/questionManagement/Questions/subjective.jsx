import React from 'react'
import {  Box,Typography, RadioGroup, FormControl, FormControlLabel, Radio, Button,Grid } from '@mui/material'
import { useTranslation } from 'react-i18next';

export default function Subjective() {
  const {t} = useTranslation();
  return (
    <>
      <Grid item xs={4}>
        <Box sx={{minHeight:'750px'}}>
          <Typography variant="h2">{t('createQuestion.subjective')}</Typography>
          <FormControl sx={{my:3}}>
              <RadioGroup>
                  <FormControlLabel value="text" control={<Radio />} label={t('commonForm.textArea')} />
                  <FormControlLabel value="file" control={<Radio />} label={t('commonForm.fileUpload')} />
              </RadioGroup>
          </FormControl>
        </Box>
        <Box className="d-flex justify-end">
            <Button variant="contained" color='secondary' sx={{mr:3}}>{t('common.cancel')}</Button>
            <Button variant="contained">{t('common.create')}</Button>
        </Box>
      </Grid>
    </>
  )
}
