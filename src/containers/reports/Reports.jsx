import React, { useState } from "react";
import { Container, Box, Divider, Select, Button, MenuItem, InputLabel, Grid, TextField, FormControl } from '@mui/material';
import Banner from '../../_shared/components/banner/banner';
import { useTranslation } from 'react-i18next';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { useNavigate, useParams } from 'react-router-dom';

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

const reportsOnList = [
    {
        label: "Objective",
        value: "objective"
    },
    {
        label: "Subjective",
        value: "Subjective"
    },
    {
        label: "Coding",
        value: "Coding"
    },
    {
        label: "Stack",
        value: "Stack"
    }
]

const assessmentStatusList = [
    {
        label: "All Status",
        value: "allStatus"
    },
    {
        label: "Pass",
        value: "Pass"
    },
    {
        label: "Fail",
        value: "Fail"
    }
]

const Reports = () => {
    const { tenancyName } = useParams();
    const [tenants, setTenants] = useState('allTenants');
    const [reports, setReportsOn] = useState('objective');
    const [assessmentStatus, setAssessmentStatus] = useState('');
    const { t } = useTranslation();
    const breadcrumbs = [
        {
            name: "Dashboard",
            url: `/${tenancyName}/dashboard`
        },
        {
            name: "Reports",
            url: ""
        }
    ]
    const handleTenantChange = (event) => {
        setTenants(event.target.value);
    };
    const handleReportChange = (event) => {
        setReportsOn(event.target.value);
    };
    const handleAssessmentStatusChange = (event) => {
        setAssessmentStatus(event.target.value);
    };
    let navigate = useNavigate();
    const navigateToDashboards = () => {
        let path = `/${tenancyName}/dashboard`;
        navigate(path);
    };

    return (
        <Box >
            <Banner title={t('common.reports')} crumbs={breadcrumbs} />
            <Box sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
                <Button variant="outlined" color='primary' sx={{ fontSize: '16px' }}><FileDownloadOutlinedIcon />Download Master Report</Button>
            </Box>
            <Divider>
                OR
            </Divider>
            <Container maxWidth="xl">
                <Grid container spacing={2} sx={{ mb: 4, mt: 4 }}>
                    <Grid item xs={12} md={6} lg={4}>
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
                    <Grid item xs={12} md={6} lg={4}>
                        <FormControl fullWidth >
                            <InputLabel>Reports On</InputLabel>
                            <Select
                                value={reports}
                                label="Objective"
                                onChange={handleReportChange}
                            >
                                {reportsOnList.map((item) => (<MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>)
                                )}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <TextField label="Assessment Name" placeholder="Assessment Name" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <TextField label="Users Email" placeholder="Users Email" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <FormControl fullWidth >
                            <InputLabel>Assesment Status</InputLabel>
                            <Select
                                value={assessmentStatus}
                                label="All Status"
                                onChange={handleAssessmentStatusChange}
                            >
                                {assessmentStatusList.map((item) => (<MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>)
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label={t('commonForm.startDate')} />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={2}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label={t('commonForm.endDate')} />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                </Grid>
                <Box sx={{ backgroundColor: '#f4f4f4', height: '2px', my: 3 }}>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant='contained' color='secondary' sx={{ mr: 4 }} onClick={navigateToDashboards}>CANCEL</Button>
                    <Button variant="contained" sx={{ fontSize: '16px' }}><FileDownloadOutlinedIcon />Download Report</Button>
                </Box>
            </Container>
        </Box>
    )
}
export default Reports;