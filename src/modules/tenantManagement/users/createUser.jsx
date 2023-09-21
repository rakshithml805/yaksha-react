import React from 'react'
import { Box ,Container,Typography,Breadcrumbs,Grid,TextField,Switch,FormControlLabel,Button,Divider,Autocomplete} from '@mui/material';
import { NavLink,useNavigate} from 'react-router-dom';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';


export default function CreateUser() {
    let navigate = useNavigate();
    const navigateToUser =() => {
        let path = '/users'; 
        navigate(path);
    }
    const tenants=['Yaksha','CA','NSEIT','Cognizant'];
    const buisnessUnit = [
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
  return (
    <Box>
        <Box className="banner">
            <Container maxWidth="xl">
                <Box  sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Box>
                        <Breadcrumbs sx={{mb:1}}>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }} fontSize="small" color="secondary">
                                <NavLink color="inherit" to="/dashboard" >
                                    Dashboard
                                </NavLink>
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }} fontSize="small" color="secondary">
                                <NavLink color="inherit" to="/users">
                                    Users
                                </NavLink>
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }} fontSize="small" color="secondary">
                                <NavLink color="secondary" to="/create-upload-users">
                                    Onboard Users
                                </NavLink>
                            </Typography>
                        </Breadcrumbs>
                        <Typography variant='h5'>Onboard Users</Typography>
                    </Box>          
                </Box>            
            </Container>
        </Box>
        <Container maxWidth="xl">
            <Box sx={{mt:4}}>
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <Grid container spacing={2} rowGap={3}>
                            <Grid item xs={6}>
                            <Autocomplete
                                disablePortal
                                required
                                options={tenants}
                                renderInput={(params) => <TextField {...params} label="Select Tenant" />}
                            />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel control={<Switch/>} label="Enable Login" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="First Name" variant="outlined" fullWidth required/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="Last Name" variant="outlined" fullWidth required/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="Email" variant="outlined" fullWidth required/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="Phone" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item xs={6}>
                                <Autocomplete
                                    disablePortal
                                    required
                                    options={buisnessUnit}
                                    renderInput={(params) => <TextField {...params} label="Select Buisness Unit" />}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Autocomplete
                                    disablePortal
                                    required
                                    options={rolesList}
                                    renderInput={(params) => <TextField {...params} label="Select Role" />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                                    <Button variant='contained' color='secondary' sx={{mr:4}} onClick={navigateToUser}>CANCEL</Button>
                                    <Button variant='contained' onClick={navigateToUser}>ONBOARD USER</Button>  
                                </Box>  
                            </Grid>
                        </Grid>
                    </Grid>
                        <Divider orientation="vertical" flexItem sx={{mx:5}}>
                        OR
                    </Divider>
                    <Grid item xs={4}>
                        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between',height:'100%'}}>
                            <Typography variant='subtitle1' sx={{mb:5}}>Bulk Upload Users</Typography>
                            <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                                <TextField type="file" variant="outlined" fullWidth/>
                                <Typography variant="caption">File Size:Less than 5MB , support xls, xlsx</Typography>
                                <Button variant="text" sx={{fontSize:'16px',alignSelf: 'flex-end',mt:4}}><FileDownloadOutlinedIcon color="error"/>Download Sample Template</Button>
                            </Box>
                            <Box sx={{alignSelf: 'flex-end'}}>
                                <Button variant='contained' color='secondary' sx={{mr:4}} onClick={navigateToUser}>CANCEL</Button>
                                <Button variant='contained' onClick={navigateToUser}>ONBOARD USERS</Button>  
                            </Box>                          
                        </Box>                             
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </Box>
  )
}
