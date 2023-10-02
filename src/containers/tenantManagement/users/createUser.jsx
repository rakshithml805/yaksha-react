import React from 'react'
import { Box, Container, Typography, Grid, TextField, Switch, FormControlLabel, Button, Divider, Autocomplete } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Banner from '../../../components/banner/banner';
import { useTranslation } from 'react-i18next';

const breadcrumbs = [
    {
        name: "Dashboard",
        url: "/dashboard"
    },
    {
        name: "All Users",
        url: "/users"
    },
    {
        name: "Onboard Users",
        url: ""
    },
]

export default function CreateUser() {
    const { t } = useTranslation();
    let navigate = useNavigate();
    const navigateToUser = () => {
        let path = '/users';
        navigate(path);
    }
    const tenants = ['Yaksha', 'CA', 'NSEIT', 'Cognizant'];
    const buisnessUnitList = [
        'Engineer',
        'Manager',
        'Development',
        'Team Lead',
    ];
    const rolesList = [
        'Admin',
        'User',
        'Reviewer',
        'Publisher',
    ];
    const [tenant, setTenant] = React.useState(null);
    const [login, setLogin] = React.useState(false);
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [buisnessUnit, setBuisnessUnit] = React.useState(null);
    const [role, setRole] = React.useState(null);

    const handleLoginChange = () => {
        setLogin(!login);
    }
    const handleTenantChange = (_, newValue) => {
        setTenant(newValue);
    }
    const handlefirstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const handleBuisnessUnitChange = (_, newValue) => {
        setBuisnessUnit(newValue);
    }
    const handleRoleChange = (_, newValue) => {
        setRole(newValue);
    }
    const handleCreate = () => {
        console.log(tenant);
        console.log(login);
        console.log(firstName);
        console.log(email);
        console.log(phone);
        console.log(buisnessUnit);
        console.log(role);
        setLogin(false);
        setTenant(null);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setBuisnessUnit(null);
        setRole(null);
        navigateToUser();
    };
    return (
        <Box>
            <Banner title={t('createUser.onboardUsers')} crumbs={breadcrumbs} />
            <Container maxWidth="xl">
                <Box sx={{ mt: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={7}>
                            <Grid container spacing={2} rowGap={3}>
                                <Grid item xs={6}>
                                    <Autocomplete
                                        disablePortal
                                        required
                                        options={tenants}
                                        value={tenant}
                                        onChange={handleTenantChange}
                                        renderInput={(params) => <TextField {...params} label={t('commonForm.selectTenant')} />}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControlLabel control={<Switch onChange={handleLoginChange} />} label={t('commonForm.enableLogin')} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField label={t('common.firstName')} value={firstName}
                                        onChange={handlefirstNameChange} variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField label={t('common.lastName')} value={lastName}
                                        onChange={handleLastNameChange} variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField label={t('common.email')} value={email}
                                        onChange={handleEmailChange} variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField label={t('common.phone')} value={phone}
                                        onChange={handlePhoneChange} variant="outlined" fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <Autocomplete
                                        disablePortal
                                        required
                                        options={buisnessUnitList}
                                        value={buisnessUnit}
                                        onChange={handleBuisnessUnitChange}
                                        renderInput={(params) => <TextField {...params} label={t('commonForm.selectBuisnessUnit')} />}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Autocomplete
                                        disablePortal
                                        required
                                        options={rolesList}
                                        value={role}
                                        onChange={handleRoleChange}
                                        renderInput={(params) => <TextField {...params} label={t('commonForm.selectRole')} />}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Button variant='contained' color='secondary' sx={{ mr: 4 }} onClick={navigateToUser}>{t('common.cancel')}</Button>
                                        <Button variant='contained' onClick={handleCreate}>{t('createUser.onboardUsers')}</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider orientation="vertical" flexItem sx={{ mx: 5 }}>
                            OR
                        </Divider>
                        <Grid item xs={4}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
                                <Typography variant='subtitle1' sx={{ mb: 5 }}>{t('createUser.bulkUploadUSers')}</Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <TextField type="file" variant="outlined" fullWidth />
                                    <Typography variant="caption">{t('commonForm.FilesizeLessThan5MBSupport')}</Typography>
                                    <Button variant="text" sx={{ fontSize: '16px', alignSelf: 'flex-end', mt: 4 }}><FileDownloadOutlinedIcon color="error" />{t('common.downloadSampleTemplate')}</Button>
                                </Box>
                                <Box sx={{ alignSelf: 'flex-end' }}>
                                    <Button variant='contained' color='secondary' sx={{ mr: 4 }} onClick={navigateToUser}>{t('common.cancel')}</Button>
                                    <Button variant='contained' onClick={navigateToUser}>{t('createUser.onboardUsers')}</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}
