import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
    Box, Button, Container, FormControl, FormControlLabel, IconButton, InputAdornment,
    InputLabel, Link, OutlinedInput, Switch, TextField, Typography
} from '@mui/material';
import { Field, FormikProvider, useFormik } from "formik";
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { getApi, postApi } from "../../../_api/_api";
import { Role } from '../../../_shared/helper';
import { FETCH_USER_DETAILS } from "../../../_store/actions/actions";
import loginBanner from '../../../assets/Yaksha-Login.png';
import logo from "../../../assets/yaksha.png";
import { apiIdentityUrl, apiYakshaUrl } from './../../../_api/_urls';

const Login = () => {
    const loggedInUserDetailsStore = useSelector((state) => state.loggedInUserDetails.data);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        errorMessage: null,
        currentLoginInfo: null, userRolePermissions: null, allRoles: null
    });
    const { tenancyName } = useParams();
    const {t} = useTranslation();
    let navigate = useNavigate();

    const routeChange = () => navigate(`/${tenancyName}/dashboard`);
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    // const emailValidate = Yup.string().matches(commonYupValidations.emailR, 'Enter valid Email').required('Email is required')
    // .min(8, 'Atleast 8 characters')
    // .max(50, 'Only 50 characters are allowed')

    const emailValidate = Yup.string().required('Email is required')

    const loginSchema = Yup.object().shape({
        userNameOrEmailAddress: emailValidate,
        password: Yup.string()
          .required("Password should not be empty")
          .max(30),
      });

    const formik = useFormik({
        initialValues: {
            userNameOrEmailAddress: "",
            password: "",
            rememberClient: true,
            tenancyName: tenancyName
        },
        validationSchema: loginSchema,
        onSubmit: async () => {
            try {
                resetErrorMessage();
                const req = {...formik.values};
                const { status, body } = await postApi(`${apiIdentityUrl}/TokenAuth/Authenticate`, req);
                if (status >= 400 && status <= 599) {
                    console.log("Something went wrong..!!!");
                    return;
                }
                if (status === 200) {
                    if (body.errorMessage) {
                        setState(prev => ({...prev, errorMessage: body.errorMessage}));
                        return;
                    }
                    sessionStorage.setItem("accessToken", body.accessToken);
                    localStorage.setItem('tenancyName', tenancyName);
                    dispatch({ type: FETCH_USER_DETAILS })
                    // loadInitialData();
                }
            } catch (error) {
              console.error(error);
            }
        }
    });
    const loadInitialData = async () => {
        const currentLoginInfo = await fetchCurrentLoginInfo();
        const userRolePermissions = await fetchUserRolePermissions();
        const allRoles = await fetchAllRoles();
        setState(prev => ({...prev, currentLoginInfo, userRolePermissions, allRoles }));
    }
    const fetchCurrentLoginInfo = async () => {
        try {
           const { status, body } = await getApi(`${apiIdentityUrl}/services/platform/Session/GetCurrentLoginInformations`); 
           if (status === 200) {
            return body;
           }
        } catch (error) {
            console.error(error); 
        }
    }
    
    const fetchUserRolePermissions = async () => {
        try {
           const { status, body } = await getApi(`${apiYakshaUrl}/services/yaksha/User/GetUserRolePermissions`); 
           if (status === 200) {
            return body;
           }
        } catch (error) {
            console.error(error); 
        }
    }
    const fetchAllRoles = async () => {
        try {
           const { status, body } = await getApi(`${apiYakshaUrl}/services/yaksha/Role/GetAllRoles`); 
           if (status === 200) {
            return body;
           }
        } catch (error) {
            console.error(error); 
        }
    }
    useEffect(() => {
        if (tenancyName) {
            formik.setFieldValue("tenancyName", tenancyName);
        }
    }, [tenancyName]);

    const resetErrorMessage = () => setState(prev => ({...prev, errorMessage: null }));
    useEffect(() => {
        if (loggedInUserDetailsStore) {
            routeChange()    
        }
    }, [loggedInUserDetailsStore]);

    useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            formik.handleSubmit()
            event.preventDefault();
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, []);


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
                            {({ field, meta }) => (<>
                                <TextField {...field} 
                                sx={{ mb: 4 }} label={t('preLogin.username')} variant="outlined" fullWidth />

                                {meta.touched && meta.error && (
                                    <Typography sx={{color: '#FF4128'}} variant='caption'>
                                    {meta.error}
                                    </Typography>
                                )}

                            </>)}
                        </Field>
                        <Field name="password">
                            {({ field, meta }) => (<>
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
                            {meta.touched && meta.error && (
                                <Typography sx={{color: '#FF4128'}} variant='caption'>
                                {meta.error}
                                </Typography>
                            )}
                            </>)}
                        </Field>
                        
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4}}>
                            <FormControlLabel control={<Switch defaultChecked />} label={t('preLogin.rememberMe')}/>
                            <Link href="forgot-password" underline="none">{t('preLogin.forgotPassword')}</Link>
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

