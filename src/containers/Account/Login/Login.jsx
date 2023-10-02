import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
    Box, Button, Container, FormControl, FormControlLabel, IconButton, InputAdornment,
    InputLabel, Link, OutlinedInput, Switch, TextField
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import loginBanner from '../../../assets/Yaksha-Login.png';
import logo from "../../../assets/yaksha.png";

export default function Login() {
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
  return (
    <Container maxWidth="xl">
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Box sx={{width: '65%'}}>
                <img src={loginBanner} style={{width: '100%'}}/>
            </Box>
            <Box sx={{width: '35%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Box sx={{width: '130px', height:'50px', mb: 4}}>
                    <img src={logo} />
                </Box>
                <Box sx={{width: '85%'}}>
                    <TextField sx={{ mb: 4 }} type='email' label={t('preLogin.username')} variant="outlined" required fullWidth/>
                    <FormControl fullWidth variant="outlined" required sx={{ mb: 4 }}>
                        <InputLabel htmlFor="password">{t('preLogin.password')}</InputLabel>
                        <OutlinedInput id="password" type={showPassword ? 'text' : 'password'} label={t('preLogin.password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                    {showPassword ? <VisibilityOff color='primary' /> : <Visibility color='primary' />}
                                </IconButton>
                            </InputAdornment>
                            }/>
                    </FormControl>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4}}>
                        <FormControlLabel control={<Switch defaultChecked />} label={t('preLogin.rememberMe')}/>
                        <Link href="/forgotPassword" underline="none">{t('preLogin.forgotPassword')}</Link>
                    </Box>
                    <Button color='primary' onClick={routeChange} variant="contained" sx={{width:'100%'}}>{t('preLogin.login')}</Button>
                </Box>
            </Box>
        </Box>
    </Container>
  )
}

