import React, { useState } from 'react';
import { Container, Box, Divider, Select, Button, Typography, MenuItem, InputLabel, Grid, TextField, FormControl, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const tenantsList = [
    {
        id: 1,
        label: "All Tenants",
        value: "allTenants"
    },
    {
        id: 2,
        label: "Other Users",
        value: "otherUsers"
    },
    {
        id: 3,
        label: "IBM",
        value: "IBM"
    },
    {
        id: 4,
        label: "WIPRO",
        value: "WIPRO"
    }
]

const assessmentBankList = [
    {
        id: 1,
        label: "Assessment Bank Name",
        value: "selectAssessmentBank"
    },
    {
        id: 2,
        label: "Other Users",
        value: "otherUsers"
    },
    {
        id: 3,
        label: "IBM",
        value: "IBM"
    },
    {
        id: 4,
        label: "WIPRO",
        value: "WIPRO"
    }
]

const AssessmentInformation = () => {
    var toolbarOptions = [ 
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        
    
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
    
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
    
        ['clean'],
        ['link', 'image']
        
    ];

    const { t } = useTranslation();
    const [tenants, setTenants] = useState('allTenants');
    const [assessmentBank, setAssessmentBank] = useState('selectAssessmentBank');
    const [tagValue, setTagValue] = React.useState('category');
    const [questionValue, setQuestionValue] = React.useState('');
    const module = {
        toolbar: toolbarOptions,
      }
    const handleTenantChange = (event) => {
        setTenants(event.target.value);
    };
    const selectTag = (event) => {
        setTagValue(event.target.value);
    }

    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} sx={{ mb: 4, mt: 4 }}>
                <Grid item xs={12} md={6} lg={3}>
                    <FormControl fullWidth required>
                        <InputLabel>{t('commonForm.selectTenant')}</InputLabel>
                        <Select
                            value={tenants}
                            label="All Tenants"
                            onChange={handleTenantChange}
                        >
                            {tenantsList.map((item) => (<MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>)
                            )}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <FormControl fullWidth required>
                        <InputLabel>{t('assessmentsOnReview.selectAssessmentBank')}</InputLabel>
                        <Select
                            value={assessmentBank}
                            label="All Tenants"
                            onChange={handleTenantChange}
                        >
                            {assessmentBankList.map((item) => (<MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>)
                            )}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <FormControl>
                        <RadioGroup row name="tags" defaultValue="Category" className='d-flex align-center' value={tagValue} onChange={selectTag}>
                            <FormControlLabel control={<Radio />} value="category" label={t('createAssessment.standardAssessment')} sx={{ mr: 5 }} />
                            <FormControlLabel value="skill" control={<Radio />} label={t('createAssessment.adaptiveAssessment')} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <TextField label="Assessment Name" placeholder="Assessment Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <FormControl fullWidth required>
                        <InputLabel>{t('commonForm.selectCategory')}</InputLabel>
                        <Select
                            value={tenants}
                            label="All Tenants"
                            onChange={handleTenantChange}
                        >
                            {tenantsList.map((item) => (<MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>)
                            )}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={6} height="250px">
                    <Box sx={{ height: '25%' }}>
                        <Typography variant="h2" sx={{ mb: 1 }}>{t('createAssessment.description')}</Typography>
                        <ReactQuill theme="snow" value={questionValue} onChange={setQuestionValue} modules={module} className='quill-text' />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6} height="250px">
                    <Box sx={{ height: '50%' }}>
                        <Typography variant="h2" sx={{ mb: 1 }}>{t('createAssessment.instruction')}</Typography>
                        <ReactQuill theme="snow" value={questionValue} onChange={setQuestionValue} modules={module} className='quill-text' />
                    </Box>
                </Grid>
                <Divider></Divider>
            </Grid>
        </Container>

    )
}
export default AssessmentInformation;