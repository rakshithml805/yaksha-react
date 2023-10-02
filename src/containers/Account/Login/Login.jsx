import { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate, useParams } from "react-router-dom";
import {
    Box, Button, Container, FormControl, FormControlLabel, IconButton, InputAdornment,
    InputLabel, Link, OutlinedInput, Switch, TextField
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import loginBanner from '../../../assets/Yaksha-Login.png';
import logo from "../../../assets/yaksha.png";
import { useFormik, FormikProvider, Field } from "formik";
import { getApi, postApi } from "../../../_api/_api";
import { apiIdentityUrl } from './../../../_api/_urls';

const Login = () => {
    const [state, setState] = useState({
        errorMessage: null
    });
    const { tenancyName } = useParams();
    const {t} = useTranslation();
    let navigate = useNavigate();

    const routeChange = () =>{ 
        let path = '/dashboard'; 
        navigate(path);
      }
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const formik = useFormik({
        initialValues: {
            userNameOrEmailAddress: "admin",
            password: "123qwe",
            rememberClient: true,
            tenancyName: tenancyName
        },
        onSubmit: async () => {
            try {
                resetErrorMessage();
                const req = {...formik.values};
                const { status, body } = await postApi(`${apiIdentityUrl}/TokenAuth/Authenticate`, req);
                if (status === 200) {
                    if (body.errorMessage) {
                        setState(prev => ({...prev, errorMessage: body.errorMessage}));
                        return;
                    }
                    // dispatch
                }
            } catch (error) {
              console.error(error);
            }
        }
    });
    const getCurrentLoginInfo = async () => {
        try {
           const { status, body } = await getApi(`${apiIdentityUrl}/services/platform/Session/GetCurrentLoginInformations`); 
        } catch (error) {
            
        }
    }
    useEffect(() => {
        if (tenancyName) {
            formik.setFieldValue("tenancyName", tenancyName);
        }
    }, [tenancyName]);

    const resetErrorMessage = () => setState(prev => ({...prev, errorMessage: null }));
  return (
    <Container maxWidth="xl">
        
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <FormikProvider value={formik} >
                <Box sx={{width: '65%'}}>
                    <img src={loginBanner} style={{width: '100%'}}/>
                </Box>
                <Box sx={{width: '35%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Box sx={{width: '130px', height:'50px', mb: 4}}>
                        <img src={logo} />
                    </Box>
                    <Box sx={{width: '85%'}}>
                        {state.errorMessage && (<>{state.errorMessage}</>)}
                        <Field name="userNameOrEmailAddress">
                            {({ field }) => (<>
                                <TextField {...field} 
                                sx={{ mb: 4 }} label={t('preLogin.username')} variant="outlined" fullWidth/>
                            </>)}
                        </Field>
                        <Field name="password">
                            {({ field }) => (<>
                                <FormControl fullWidth variant="outlined" required sx={{ mb: 4 }}>
                                <InputLabel htmlFor="password">{t('preLogin.password')}</InputLabel>
                                <OutlinedInput {...field} type={showPassword ? 'text' : 'password'} label={t('preLogin.password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                            {showPassword ? <VisibilityOff color='primary' /> : <Visibility color='primary' />}
                                        </IconButton>
                                    </InputAdornment>
                                    }/>
                            </FormControl>
                            </>)}
                        </Field>
                        
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4}}>
                            <FormControlLabel control={<Switch defaultChecked />} label={t('preLogin.rememberMe')}/>
                            <Link href="/forgotPassword" underline="none">{t('preLogin.forgotPassword')}</Link>
                        </Box>
                        <Button color='primary' onClick={formik.handleSubmit} variant="contained" sx={{width:'100%'}}>{t('preLogin.login')}</Button>
                    </Box>
                </Box>
            </FormikProvider>
        </Box>
    </Container>
  )
}

export default Login;

