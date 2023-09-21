import React from 'react'
import { Box,Container,Button,Typography } from '@mui/material';
import forgotBanner from '../../../src/assets/Yaksha-Login_01.jpg'
import logo from "../../assets/yaksha.png";
import TextField from '@mui/material/TextField';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import { NavLink } from 'react-router-dom';


export default function ForgotPassword() {
    const [sendLink,setsendLink] = React.useState(false);
    const sendemail = () => {
        setsendLink(true);
    }
    const [showNewPassword, setShowNewPassword] = React.useState(false);
    const [showChangePassword, setshowChangePasssword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const changepassword =() => {
        setshowChangePasssword(true);
    }
  return (
    <>
        <Container maxWidth="xl" sx={{ display: 'flex',justifyContent: 'center',margin:'auto'}}>
            <Box sx={{ display: 'flex',justifyContent: 'space-between',width:'80%' }}>
                <Box>
                    <img src={forgotBanner}/>
                </Box>
                <Box sx={{ display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems:'center'}}>
                    <Box sx={{ mb: 3 }}>
                        <img src={logo} />
                    </Box>
                    { !sendLink ? (
                                    <Box>
                                        <Typography variant="h5" sx={{ mb: 4,textAlign:'center' }}>Recover your Password</Typography>
                                        <Typography variant="subtitle1" color="grey" sx={{ mb: 4 }}>Enter your Email and Instruction will be sent to you</Typography>
                                        <Box>
                                            <Box>
                                                <TextField sx={{ mb: 4 }} id="outlined-basic" label="Username" variant="outlined" required fullWidth/>
                                            </Box>
                                            <Button color='primary' variant="contained" sx={{width:'100%'}} onClick={sendemail}>SEND LINK</Button>
                                        </Box>
                                    </Box>
                        ) : 
                        (
                            <Box>
                                <Box sx={{display: 'flex',justifyContent:'center',
                                        border:'1px solid grey',width:'fit-content',
                                        padding:'10px',borderRadius:'30px',mx:'auto',mb:4}} >
                                    <CheckOutlinedIcon color='success' sx={{fontSize:'35px'}}/>
                                </Box>
                                <Typography variant="h5" sx={{ mb: 4 }}>Email has been Successfully sent to</Typography>
                                <Typography variant="subtitle2" color="primary" sx={{ mb: 4 , textAlign:'center',fontSize:'16px'}}>example@example.com</Typography>
                                <Typography variant="subtitle1" color="grey" sx={{ mb: 4 , textAlign:'center'}}>Please Check you Mail for further Instructions</Typography>
                            </Box>
                        )
                    }   
                    
                        {/* After User Clicks on Resent Link sent to email  */}

                    {/* { 
                        !showChangePassword ? (
                            <Box sx={{width:'60%'}}>
                        <Typography variant="h5" sx={{ mb: 4 , textAlign:'center'}}>Reset Your password</Typography>
                        <FormControl fullWidth variant="outlined" required sx={{ mb: 4 }}>
                            <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showNewPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowNewPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end">
                                    {showNewPassword ? <VisibilityOff color='primary' /> : <Visibility color='primary'/>}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="New Password"
                            />
                        </FormControl>
                        <FormControl fullWidth variant="outlined" required sx={{ mb: 4 }}>
                            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showConfirmPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end">
                                    {showConfirmPassword ? <VisibilityOff color='primary'/> : <Visibility color='primary'/>}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Confirm Password"
                            />
                        </FormControl>
                        <Button color='primary' variant="contained" sx={{width:'100%'}} onClick={changepassword}>RESET PASSWORD</Button>
                        </Box>             
                        ) : (
                            <Box>
                        <Box sx={{display: 'flex',justifyContent:'center',
                                        border:'1px solid grey',width:'fit-content',
                                        padding:'10px',borderRadius:'30px',mx:'auto',mb:4}}>
                                            <CheckOutlinedIcon color='success' sx={{fontSize:'35px'}}/>
                        </Box>
                        <Typography variant="h5" sx={{ mb: 4 , textAlign:'center'}}>Your Password is changed Successfully</Typography>
                        <Box sx={{margin:'auto',width:'fit-content'}}>
                            <Button color='primary' variant="contained"><NavLink to="/login" style={{color:"white"}}>LOGIN</NavLink></Button>
                        </Box>
                        </Box>
                        )
                    } */}
                </Box>
            </Box>
        </Container>
    </>
  )              
}