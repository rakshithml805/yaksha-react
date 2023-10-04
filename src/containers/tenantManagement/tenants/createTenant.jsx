import React, { useRef } from 'react';
import { Container, Box, Typography, Button, Grid, TextField, FormControl, Select, MenuItem, InputLabel, Divider } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../_shared/components/banner/banner';
import { useTranslation } from 'react-i18next';


export default function CreateTenant() {
    const { t } = useTranslation();
    const breadcrumbs = [
        {
            name: "Dashboard",
            url: "/dashboard"
        },
        {
            name: "Manage Tenants",
            url: "/tenants"
        },
        {
            name: "Onboard Tenant",
            url: ""
        }
    ];
    const [logo,setLogo]=React.useState()
    const [tenantName, setTenantName] = React.useState('');
    const [displayName, setDisplayName] = React.useState('');
    const [address1, setAddress1] = React.useState('');
    const [address2, setAddress2] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [state, setState] = React.useState('');
    const [websiteURL, setWebsiteURL] = React.useState('');
    const [importedFile, setImportedFile] = React.useState('');
    const imgUpload = useRef('');
    const tagsImg = event => {
        imgUpload.current.click();
    };
    const uploadFiles = event => {
        // const fileUploaded = event.target.files[0];
        const file = event.target.files[0];
        // tagsImg(fileUploaded);
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const dataURL = e.target.result;
                setLogo(dataURL)
            };
            reader.readAsDataURL(file);
        }
    };
   
    const handleTenantName = (e) => {
        setTenantName(e.target.value)
    }
    const handleDisplayName = (e) => {
        setDisplayName(e.target.value)
    }
    const handleAddress1 = (e) => {
        setAddress1(e.target.value)
    }
    const handleAddress2 = (e) => {
        setAddress2(e.target.value)
    }
    const handleWebUrl = (e) => {
        setWebsiteURL(e.target.value);
    }
    const handleImportedFile = (e) => {
        setImportedFile(e.target.value);
    }

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };
    const handleStateChange = (event) => {
        setState(event.target.value);
    };
    let navigate = useNavigate();
    const navigateToTenant = () => {
        let path = '/tenants';
        navigate(path);
    };
    const handleCreate = () => {
        // Log the form data to the console
        console.log('Form Data:');
        console.log('logo',logo)
        console.log('Tenant Name:', tenantName);
        console.log('Display Name:', displayName);
        console.log('Address 1:', address1);
        console.log('Address 2:', address2);
        console.log('Country:', country);
        console.log('State:', state);
        console.log('Website URL:', websiteURL);
        console.log('Imported File:', importedFile);

        // Reset the form fields by setting state variables to empty values
        setLogo('');
        setTenantName('');
        setDisplayName('');
        setAddress1('');
        setAddress2('');
        setCountry('');
        setState('');
        setWebsiteURL('');
        setImportedFile('');
        navigateToTenant();
    };
    return (
        <Box>
            <Banner title={t('onboardTenant.onboardTenant')} crumbs={breadcrumbs} />
            <Container maxWidth="xl">
                <Box sx={{ my: 4 }}>
                    <Grid container spacing={2} sx={{ mb: 4 }}>
                        <Grid item xs={4}>
                            <Box sx={{ mr: 3, py: 3, height: '100%' }} className="upload-img d-flex flex-column align-center justify-center">
                                <Button variant='text' color="secondary" onClick={tagsImg}>
                                    <FileUploadOutlinedIcon color='error' />
                                    <Typography variant="subtitle1" color='primary'>{t('onboardTenant.uploadTenantLogo')}</Typography>
                                </Button>
                                <Box sx={{ mt: 2 }} className="d-flex flex-column align-center justify-center">
                                    <Typography variant="caption" color='grey'>{t('commonForm.imgFileSize')}</Typography>
                                    <Typography variant="caption" color="grey">{t('commonForm.imgSupportFormat')}</Typography>
                                </Box>
                                <input type="file" accept='.jpg , .png , .jpeg' onChange={uploadFiles} ref={imgUpload} hidden></input>
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid container spacing={2} rowSpacing={4}>
                                <Grid item xs={6}>
                                    <TextField label={t('onboardTenant.tenantName')} variant="outlined" value={tenantName} onChange={handleTenantName} fullWidth required />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField label={t('onboardTenant.displayName')} variant="outlined" value={displayName} onChange={handleDisplayName} fullWidth required />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField label={t('onboardTenant.address1')} variant="outlined" value={address1} onChange={handleAddress1} fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField label={t('onboardTenant.address2')} variant="outlined" value={address2} onChange={handleAddress2} fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth required>
                                        <InputLabel>{t('onboardTenant.country')}</InputLabel>
                                        <Select
                                            value={country}
                                            label="Country"
                                            onChange={handleCountryChange}
                                        >
                                            <MenuItem value="India">India</MenuItem>
                                            <MenuItem value="America">America</MenuItem>
                                            <MenuItem value="Nepal">Nepal</MenuItem>
                                            <MenuItem value="Denmark">Denmark</MenuItem>
                                            <MenuItem value="Australia">Australia</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth required>
                                        <InputLabel>{t('onboardTenant.state')}</InputLabel>
                                        <Select
                                            value={state}
                                            label="State"
                                            onChange={handleStateChange}
                                        >
                                            <MenuItem value="India">India</MenuItem>
                                            <MenuItem value="America">America</MenuItem>
                                            <MenuItem value="Nepal">Nepal</MenuItem>
                                            <MenuItem value="Denmark">Denmark</MenuItem>
                                            <MenuItem value="Australia">Australia</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField label={t('onboardTenant.websiteURL')} variant="outlined" fullWidth value={websiteURL} onChange={handleWebUrl} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField label={t('onboardTenant.importUsers')} type='file' InputLabelProps={{ shrink: true }} onChange={handleImportedFile}
                                variant="outlined" accept=".xls , .xlsx" helperText="File Size less than 5MB , support xls,xlsx" fullWidth value={importedFile} />
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="text" sx={{ fontSize: '16px' }}><FileDownloadOutlinedIcon />{t('onboardTenant.downloadSampleTemplate')}</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Divider></Divider>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Button variant='contained' color='secondary' sx={{ mr: 4 }} onClick={navigateToTenant}>{t('common.cancel')}</Button>
                    <Button variant='contained' onClick={handleCreate}>{t('common.create')}</Button>
                </Box>
            </Container>
        </Box>
    )
}
