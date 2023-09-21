import React from 'react'
import { Box, Container, Breadcrumbs, Typography, Button, FormControl,FormLabel, Grid, RadioGroup, FormControlLabel, Radio, Chip } from '@mui/material';
import { NavLink,useNavigate } from 'react-router-dom';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { FileUploader } from "react-drag-drop-files";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './questionsBulkUpload.scss'

export default function QuestionsBulkUpload() {
  let navigate = useNavigate();
    const navigateToUploadHistory =() => {
        let path = '/bulk-upload-history'; 
        navigate(path);
    }
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
        <Box className="banner">
            <Container maxWidth="xl">
                <Box  sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Box>
                        <Breadcrumbs sx={{mb:1}}>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }} fontSize="small" color="secondary">
                                <NavLink color="inherit" to="/dashboard" >
                                    Dashboard
                                </NavLink>
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }} fontSize="small" color="secondary">
                                <NavLink color="inherit" to="/bulk-upload-questions">
                                    Bulk Upload Question
                                </NavLink>
                            </Typography>
                        </Breadcrumbs>
                        <Typography variant='h5'>Bulk Upload Question</Typography>
                    </Box>   
                    <Button variant="outlined" color='secondary' onClick={navigateToUploadHistory}>UPLOAD HISTORY</Button>       
                </Box>           
            </Container>
        </Box>
        <Container maxWidth="xl">
          <FormControl sx={{width:'100%',mb:'3'}}>
            <RadioGroup sx={{width:'80%'}}>
           <Box sx={{my:4}}>
              <Grid container>
                <Grid item xs={3} sx={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                  <FormControlLabel value="Objective" control={<Radio />} label="Objective" onClick={handleQuestionChange}/>
                  <Button variant="text" sx={{padding:'0px'}}><FileDownloadOutlinedIcon color="error"/>Download Sample Template</Button>
                </Grid>
                <Grid item xs={3} sx={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                  <FormControlLabel value="Subjective" control={<Radio />} label="Subjective" onClick={handleQuestionChange}/>
                  <Button variant="text" sx={{padding:'0px'}}><FileDownloadOutlinedIcon color="error"/>Download Sample Template</Button>
                </Grid>
                <Grid item xs={3} sx={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                  <FormControlLabel value="Coding" control={<Radio />} label="Coding" onClick={handleQuestionChange}/>
                  <Button variant="text" sx={{padding:'0px'}}><FileDownloadOutlinedIcon color="error"/>Download Sample Template</Button>
                </Grid>
                <Grid item xs={3} sx={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                  <FormControlLabel value="Stack" control={<Radio />} label="Stack" onClick={handleQuestionChange}/>
                  <Button variant="text" sx={{padding:'0px'}}><FileDownloadOutlinedIcon color="error"/>Download Sample Template</Button>
                </Grid>
              </Grid>
            </Box>
          </RadioGroup>
        </FormControl>
        <Box className="file-upload-container">
          <FileUploader handleChange={handleChange} name="file" types={fileTypes} classes="file-upload-field" label="Drag and Drop File Here or Click here" disabled={questionType === ""}/>
          <CloudUploadOutlinedIcon className='upload-icon'/>
          <Box className="d-flex justify-space-between file-details">
            <Typography variant='caption' color='#99a1a6'>Only .xls and .xlsx files are allowed</Typography>
             {file ?  <Chip icon={<CloseOutlinedIcon  onClick={removeFile}/>}  label={`${file.name}`}/> : ""}
          </Box>
        </Box>
        <Box sx={{display:'flex',justifyContent:'flex-end',mt:2}}>
          <Button variant='contained' color='secondary' sx={{mr:4}}>CANCEL</Button>
          <Button variant='contained'>UPLOAD</Button>  
        </Box> 
      </Container>
    </Box>
  )
}
