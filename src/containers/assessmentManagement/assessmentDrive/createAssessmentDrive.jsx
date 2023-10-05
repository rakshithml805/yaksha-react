import React from 'react'
import { Box, Container, Grid, Autocomplete, TextField, Typography, Button, Divider, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Banner from '../../../_shared/components/banner/banner';
import ReactQuill from 'react-quill';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useNavigate,useParams } from 'react-router-dom';

export default function CreateAssessmentDrive() {
    const { tenancyName } = useParams();
  const { t } = useTranslation();
  const breadcrumbs = [
    {
      name: "Dashboard",
      url: `/${tenancyName}/dashboard`
    },
    {
      name: "Create Assesment Drive",
      url: ""
    },
  ];
  const tenants = [
    {
      id: 101,
      name: 'Yaksha'
    },
    {
      id: 102,
      name: 'CA'
    },
    {
      id: 103,
      name: 'NSEIT'
    },
    {
      id: 104,
      name: 'Cognizant'
    }
  ];
  const assessmentBankNames = [
    {
      id: 1,
      name: 'Assessment Bank 1'
    },
    {
      id: 2,
      name: 'Assessment Bank 2'
    },
    {
      id: 3,
      name: 'Assessment Bank 3'
    }
  ];
  const categoriesList = [
    {
      id: 1,
      name: 'All Categories'
    },
    {
      id: 2,
      name: 'Software Development'
    },
    {
      id: 3,
      name: 'Artificial Intelligence'
    },
  ];
  const assessmentNameList = [
    {
      id: 1,
      name: 'Assessment Name 1'
    },
    {
      id: 2,
      name: 'Assessment Name 2'
    },
    {
      id: 3,
      name: 'Assessment Name 3'
    }
  ]
  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],


    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],
    ['link', 'image']

  ];
  let navigate = useNavigate();
  const navigateToDashboards = () => {
    let path = `/${tenancyName}/dashboard`;
    navigate(path);
  };
  const module = {
    toolbar: toolbarOptions,
  }
  const [descriptionValue, setDescriptionValue] = React.useState('');
  const [instructionValue, setInstructionValue] = React.useState('');
  const [levels, setLevels] = React.useState([{ id: 1, level: '1' }]);
  const [levelCounter, setLevelCounter] = React.useState(1);

  const handleAddLevel = () => {
    const newLevelCounter = levels.length + 1;
    setLevelCounter(newLevelCounter);
    const newLevel = { id: newLevelCounter, level: `${newLevelCounter}` };
    setLevels([...levels, newLevel]);
  };

  const handleDeleteLevel = (id) => {
    setLevels((prevLevels) => {
      const updatedLevels = prevLevels.filter((level) => level.id !== id);
      // Update level values
      updatedLevels.forEach((level, index) => {
        level.level = `${index + 1}`;
      });
      return updatedLevels;
    });
  };


  return (
    <Box>
      <Banner title={t('createAssessmentDrive.createAssessmentDrive')} crumbs={breadcrumbs} />
      <Container maxWidth="xl">
        <Box sx={{ my: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Autocomplete
                disablePortal
                options={tenants}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} label={t('assessmentBanksList.selectTenant')} />}
              />
            </Grid>
            <Grid item xs>
              <TextField label={t('createAssessmentDrive.assessmentDriveName')} variant="outlined" fullWidth />
            </Grid>
          </Grid>
        </Box>
        <Grid container columnSpacing={4}>
          <Grid item xs={5}>
            <Box sx={{ mb: 4 }} >
              <Typography variant="h2" sx={{ mb: 1 }}>{t('common.description')}</Typography>
              <ReactQuill theme="snow" value={descriptionValue} onChange={setDescriptionValue} modules={module} className='quill-text'/>
            </Box>
            <Box >
              <Typography variant="h2" sx={{ mb: 1 }}>{t('testTracker.instruction')}</Typography>
              <ReactQuill theme="snow" value={instructionValue} onChange={setInstructionValue} modules={module} className='quill-text'/>
            </Box>
          </Grid>
          <Grid item xs={7}>
            {levels.map((level) => (
              <>
                <Box sx={{ padding: '20px', width: '100%', mb: 2 }} className='upload-img' key={level.id}>
                  <Box className="d-flex justify-space-between align-center" sx={{ mb: 2 }}>
                    <Typography variant='body2'>Level {level.level}</Typography>
                    {level.id > 1 && (
                      <IconButton aria-label="delete" color='error'>
                        <DeleteForeverOutlinedIcon onClick={() => handleDeleteLevel(level.id)} color='error' />
                      </IconButton>
                    )}
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Autocomplete
                        disablePortal
                        options={assessmentBankNames}
                        getOptionLabel={(option) => option.name}
                        className='form-control'
                        renderInput={(params) => <TextField {...params} label={t('createAssessmentBank.assessmentBankName')} />}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Autocomplete
                        disablePortal
                        options={categoriesList}
                        getOptionLabel={(option) => option.name}
                        className='form-control'
                        renderInput={(params) => <TextField {...params} label={t('commonForm.selectCategory')} />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Autocomplete
                        disablePortal
                        options={assessmentNameList}
                        getOptionLabel={(option) => option.name}
                        className='form-control'
                        renderInput={(params) => <TextField {...params} label={t('createAssessmentDrive.assessmentName')} />}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </>
            ))}
            <Grid item xs>
              <Button variant="outlined" onClick={handleAddLevel}>Add Level</Button>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }}></Divider>
        <Box className='d-flex justify-end align-center' sx={{ mb: 2 }}>
          <Button variant='contained' color='secondary' onClick={navigateToDashboards}>{t('common.cancel')}</Button>
          <Button variant="outlined" sx={{ backgroundColor: "white", mx: 2 }} onClick={navigateToDashboards}>{t('common.saveToDrafts')}</Button>
          <Button variant='contained' onClick={navigateToDashboards}>{t('common.publish')}</Button>
        </Box>
      </Container>
    </Box>
  )
}
