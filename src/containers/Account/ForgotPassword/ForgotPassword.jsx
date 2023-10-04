import React from 'react'
import { Box,Container, Button, TextField, Typography } from '@mui/material'
import loginBanner from '../../../assets/Yaksha-Login.png'
import logo from "../../../assets/yaksha.png";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useTranslation } from 'react-i18next';

export default function ForgotPassword() {
    const {t} = useTranslation();
    const [sendLink, setSendLink] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const sendMail = (event) => {
        setEmail(event.target.value);
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
                {!sendLink && (
                    <Box sx={{width: '85%'}}>
                        <Typography variant='h1' sx={{mb:3, textAlign: 'center'}}>{t('preLogin.forgotPassword')}</Typography>
                        <Typography variant='body1' color="text.secondary" sx={{mb:3, textAlign: 'center'}}>{t('preLogin.enterEmailInstruction')}</Typography>

                        <TextField sx={{ mb: 4 }} type='email' label={t('preLogin.email')} value={email} variant="outlined" required fullWidth onChange={sendMail}/>
                        
                        <Button onClick={()=> setSendLink(true)} variant="contained" sx={{width:'100%'}}>{t('preLogin.sendLink')}</Button>
                    </Box>
                )}
                {sendLink && (
                    <Box sx={{width: '85%'}}>
                        <Box className="d-flex justify-center align-center" sx={{mb:4}}>
                            <Box className="done-circle">
                                <DoneOutlinedIcon color='success' sx={{fontSize: "4rem"}} />
                            </Box>
                        </Box>
                        <Typography variant='h1' sx={{mb:3, textAlign: 'center'}}>{t('preLogin.emailSentSuccessfully')}</Typography>
                        <Typography variant='body2' color="primary" sx={{mb:3, textAlign: 'center'}}>{email}</Typography>
                        <Typography variant='body1' color="grey" sx={{mb:3, textAlign: 'center'}}>{t('preLogin.pleaseCheckEmail')}</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    </Container>
    )
}