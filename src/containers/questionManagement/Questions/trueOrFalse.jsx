import React from 'react';
import { Box,Typography, RadioGroup, FormControl, FormControlLabel, Radio, Button, Grid } from '@mui/material'
import { useTranslation } from 'react-i18next';

export default function TrueOrFalse() {
  const {t} = useTranslation();
  return (
    <>
    <Grid item xs={4}>
      <Box sx={{minHeight:'750px'}}>
        <Typography variant="h2">True or False</Typography>
        <FormControl sx={{mt:2}}>
            <RadioGroup>
                <FormControlLabel value="true" control={<Radio />} label={t('createQuestion.true')} />
                <FormControlLabel value="false" control={<Radio />} label={t('createQuestion.false')} />
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
