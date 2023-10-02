import React from 'react'
import { Box, Container, Typography, Button, FormControl,FormLabel, Grid, RadioGroup, FormControlLabel, Radio, Chip } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { FileUploader } from "react-drag-drop-files";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './questionsBulkUpload.scss';
import Banner from '../../components/banner/banner';
import { useTranslation } from 'react-i18next';

export default function QuestionsBulkUpload() {

  const {t} = useTranslation();
  const breadcrumbs = [
    {
        name: "Dashboard",
        url: "/dashboard"
    },
    {
        name: "Bulk Upload Questions",
        url: ""
    }
]
  const button = ['Upload History', "/bulk-upload-history"];

    const [questionType, setQuestionType] = React.useState('');

  const handleQuestionChange = (event) => {
    setQuestionType(event.target.value);

  };
  const fileTypes = ["xls", "xsls"];
  const [file, setFile] = React.useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  const removeFile = () => {
    setFile(null)
  }
  return (
    <Box>
      <Banner title={t('bulkUploadQuestion.bulkUploadQuestion')} crumbs={breadcrumbs} bannerButton={button} />
        <Container maxWidth="xl">
          <FormControl sx={{width:'100%',mb:'3'}}>
            <RadioGroup sx={{width:'80%'}}>
           <Box sx={{my:4}}>
              <Grid container>
                <Grid item xs={3} sx={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                  <FormControlLabel value="Objective" control={<Radio />} label="Objective" onClick={handleQuestionChange}/>
                  <Button variant="text" sx={{padding:'0px'}}><FileDownloadOutlinedIcon color="error"/>{t('common.downloadSampleTemplate')}</Button>
                </Grid>
                <Grid item xs={3} sx={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                  <FormControlLabel value="Subjective" control={<Radio />} label="Subjective" onClick={handleQuestionChange}/>
                  <Button variant="text" sx={{padding:'0px'}}><FileDownloadOutlinedIcon color="error"/>{t('common.downloadSampleTemplate')}</Button>
                </Grid>
                <Grid item xs={3} sx={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                  <FormControlLabel value="Coding" control={<Radio />} label="Coding" onClick={handleQuestionChange}/>
                  <Button variant="text" sx={{padding:'0px'}}><FileDownloadOutlinedIcon color="error"/>{t('common.downloadSampleTemplate')}</Button>
                </Grid>
                <Grid item xs={3} sx={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                  <FormControlLabel value="Stack" control={<Radio />} label="Stack" onClick={handleQuestionChange}/>
                  <Button variant="text" sx={{padding:'0px'}}><FileDownloadOutlinedIcon color="error"/>{t('common.downloadSampleTemplate')}</Button>
                </Grid>
              </Grid>
            </Box>
          </RadioGroup>
        </FormControl>
        <Box className="file-upload-container">
          <FileUploader handleChange={handleChange} name="file" types={fileTypes} classes="file-upload-field" label="Drag and Drop File Here or Click here" />
          <CloudUploadOutlinedIcon className='upload-icon'/>
          <Box className="d-flex justify-space-between file-details">
            <Typography variant='caption' color='#99a1a6'>{t('commonForm.onlyXlsAndXlsxFilesAreAllowed')}</Typography>
             {file ?  <Chip icon={<CloseOutlinedIcon  onClick={removeFile}/>}  label={`${file.name}`}/> : ""}
          </Box>
        </Box>
        <Box sx={{display:'flex',justifyContent:'flex-end',mt:2}}>
          <Button variant='contained' color='secondary' sx={{mr:4}}>{t('common.cancel')}</Button>
          <Button variant='contained'>{t('common.upload')}</Button>  
        </Box> 
      </Container>
    </Box>
  )
}
