import React from 'react'
import { Box, Typography, FormControl, Grid,Checkbox,TextField,Button} from '@mui/material'
import { useTranslation } from 'react-i18next';

export default function MatchTheFollowing() {

    const {t} = useTranslation();
    const [fields, setFields] = React.useState([
        { id: 1, questionvalue: '',answervalue:'', placeholderQuestion: 'Question 1',placeholderAnswer:'Answer 1' },
        { id: 2, questionvalue: '',answervalue:'', placeholderQuestion: 'Question 2',placeholderAnswer:'Answer 2' },
        { id: 3, questionvalue: '',answervalue:'', placeholderQuestion: 'Question 3',placeholderAnswer:'Answer 3' },
        { id: 4, questionvalue: '',answervalue:'', placeholderQuestion: 'Question 4',placeholderAnswer:'Answer 4' },
      ]);
    const maxFields = 3;

    const addField = () => {
    if (fields.length < maxFields + 4) {
        const newId = Math.max(...fields.map((field) => field.id), 0) + 1;
        setFields([...fields, { id: newId, questionvalue: '',answervalue:'',placeholderQuestion:`Question ${newId}`,placeholderAnswer:`Answer ${newId}`}]);
    }
    };

    const handleQuestionChange = (id, questionvalue) => {
        const updatedFields = fields.map((field) =>
            field.id === id ? { ...field, questionvalue } : field
        );
        setFields(updatedFields);
    };
    const handleAnswerChange = (id, answervalue) => {
        const updatedFields = fields.map((field) =>
            field.id === id ? { ...field, answervalue } : field
        );
        setFields(updatedFields);
    };
  return (
    <>
        <Grid item xs={4}>
            <Box sx={{minHeight:'750px'}}>
            <Typography variant="h2">{t('createQuestion.matchTheFollowing')}</Typography>
                <FormControl sx={{width:'100%'}}>
                    <Box sx={{my:1}}>
                        <Grid container rowGap={2}>
                            {fields.map((field) =>(
                                <Box key={field.id} sx={{padding:'10px',width:'100%'}} className='upload-img'>
                                    <Grid item xs={12} sx={{mb:2}}>
                                        <TextField id="outlined-basic" label={field.placeholderQuestion} 
                                            variant="outlined" fullWidth value={field.questionvaluevaluevalue} 
                                            onChange={(e) => handleQuestionChange(field.id, e.target.value)} className='form-control'/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField id="outlined-basic" label={field.placeholderAnswer} 
                                        variant="outlined" fullWidth value={field.answervaluevaluevalue} 
                                        onChange={(e) => handleAnswerChange(field.id, e.target.value)} className='form-control'/>
                                    </Grid>
                                </Box>  
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
                <Button variant="contained">{t('createQuestion.addTestCase')}</Button>
            </Box>
        </Grid>

    </>
  )
}
