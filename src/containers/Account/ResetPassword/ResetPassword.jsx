import React from 'react'
import { Box,Container, Button, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import loginBanner from '../../../assets/Yaksha-Login.png'
import logo from "../../../assets/yaksha.png";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useTranslation } from 'react-i18next';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
    const {t} = useTranslation();
    const [status, setStatus] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const showNewPassword = () => setShowPassword((show) => !show);
    const showConfirmPasswords = () => setShowConfirmPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    let navigate = useNavigate();
    const routeChange = () =>{ 
        let path = '/'; 
        navigate(path);
    }
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
                {!status && (
                    <Box sx={{width: '85%'}}>
                        <Typography variant='h1' sx={{mb:3, textAlign: 'center'}}>{t('preLogin.resetPassword')}</Typography>

                        <FormControl fullWidth variant="outlined" required sx={{ mb: 4 }}>
                            <InputLabel htmlFor="newPassword">{t('preLogin.newPassword')}</InputLabel>
                            <OutlinedInput id="newPassword" type={showPassword ? 'text' : 'password'} label={t('preLogin.newPassword')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton onClick={showNewPassword} onMouseDown={handleMouseDownPassword}>
                                        {showPassword ? <VisibilityOff color='primary' /> : <Visibility color='primary' />}
                                    </IconButton>
                                </InputAdornment>
                                }/>
                        </FormControl>

                        <FormControl fullWidth variant="outlined" required sx={{ mb: 4 }}>
                            <InputLabel htmlFor="confirmPassword">{t('preLogin.confirmPassword')}</InputLabel>
                            <OutlinedInput id="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} label={t('preLogin.confirmPassword')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton onClick={showConfirmPasswords} onMouseDown={handleMouseDownPassword}>
                                        {showConfirmPassword ? <VisibilityOff color='primary' /> : <Visibility color='primary' />}
                                    </IconButton>
                                </InputAdornment>
                                }/>
                        </FormControl>
                        
                        <Button onClick={()=> setStatus(true)} variant="contained" sx={{width:'100%'}}>{t('preLogin.updatePassword')}</Button>
                    </Box>
                )}
                {status && (
                    <Box sx={{width: '85%'}}>
                        <Box className="d-flex justify-center align-center" sx={{mb:4}}>
                            <Box className="done-circle">
                                <DoneOutlinedIcon color='success' sx={{fontSize: "4rem"}} />
                            </Box>
                        </Box>
                        <Typography variant='h1' sx={{mb:3, textAlign: 'center'}}>{t('preLogin.passwordChanged')}</Typography>
                        <Button onClick={routeChange} variant="contained" sx={{width:'100%'}}>{t('preLogin.login')}</Button>
                    </Box>
                )}
            </Box>
        </Box>
    </Container>
    )
}