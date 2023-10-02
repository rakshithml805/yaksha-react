import React from 'react'
import { Box, Typography, Grid, FormControl, TextField, Button } from '@mui/material'
import { useTranslation } from 'react-i18next';

export default function DragAndDrop() {

    const {t} = useTranslation();
    const [fields, setFields] = React.useState([
        { id: 1, value: '', placeholder: 'Option 1' },
        { id: 2, value: '', placeholder: 'Option 2' },
        { id: 3, value: '', placeholder: 'Option 3' },
        { id: 4, value: '', placeholder: 'Option 4' },
      ]);
    const maxFields = 3;

    const addField = () => {
    if (fields.length < maxFields + 4) {
        const newId = Math.max(...fields.map((field) => field.id), 0) + 1;
        setFields([...fields, { id: newId, value: '',placeholder: `Option ${newId}`}]);
    }
    };

    const handleChange = (id, value) => {
    const updatedFields = fields.map((field) =>
        field.id === id ? { ...field, value } : field
    );
    setFields(updatedFields);
    };
  return (
    <>
        <Grid item xs={4}>
        <Box sx={{minHeight:'750px'}}>
                <Typography variant="h2">{t('createQuestion.dragAndDrop')}</Typography>
                <FormControl sx={{width:'100%'}}>
                    <Box sx={{mt:2}}>
                        <Grid container rowGap={3}>
                            {fields.map((field) =>(
                                <Grid item xs={12} className="d-flex align-center" key={field.id}>
                                    <TextField label={field.placeholder} variant="outlined" fullWidth value={field.value} onChange={(e) => handleChange(field.id, e.target.value)}/>
                                </Grid>
                            ))}
                            <Grid item xs>
                            {fields.length <= maxFields + 2 && (
                                <Button variant="outlined" onClick={addField}>{t('createQuestion.addOptions')}</Button>
                            )}
                            </Grid>
                        </Grid>
                    </Box>
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
