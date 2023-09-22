import React from 'react';
import { Container, Box, Typography,Button,Grid,TextField,FormControl,Select,MenuItem,InputLabel} from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/banner/banner';


export default function  CreateTenant() {
    const breadcrumbs = [
        {
            name: "Dashboard",
            url: "/dashboard"
        },
        {
            name: "Teanants",
            url: "/tenants"
        },
        {
            name: "Onboard Teanant",
            url: ""
        }
    ]
    const imageUploadContainer ={
        position:'absolute',
        top:'0',
        backgroundColor:'#f4f4f4',
        width:'100%',
        height:'100%',
        padding:'20px',
        borderRadius:'10px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center'
    }
    const imagefield = {
        height:'100%',
        width:'100%',
        cursor:'pointer'
    };
    const [country, setCountry] = React.useState('');
    const [state, setState] = React.useState('');

    const handleCountryChange = (event) => {
      setCountry(event.target.value);
    };
    const handleStateChange = (event) => {
        setState(event.target.value);
      };
      let navigate = useNavigate();
    const navigateToTenant = () =>{
        let path = '/tenants'; 
        navigate(path);
    };
  return (
    <Box>
        <Banner title="Onboard Tenant" crumbs={breadcrumbs} />
        <Container maxWidth="xl">
            <Box sx={{my:4}}>
                <Grid container spacing={2} sx={{mb:4}}>
                    <Grid item xs={4}>
                    <Box sx={{height:'100%',position:'relative'}}>
                        <Box sx={{opacity:'0',height:'100%',position:'relative',zIndex:'1'}}>
                            <input type="file" accept='.jpg , .png , .jpeg' style={imagefield}></input>
                        </Box>
                        <Box sx={imageUploadContainer} className="upload-img">
                            <Box sx={{display:'flex'}}>
                                <FileUploadOutlinedIcon color='error'/>
                                <Typography variant="subtitle1" color='secondary' sx={{mb:5}}>Upload Tenanat Logo</Typography>
                            </Box>
                            <Typography variant="caption">File size less than 1 MB, Support png, jpeg.jpg </Typography>
                        </Box>
                    </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container spacing={2} rowSpacing={4}>
                            <Grid item xs={6}>
                                <TextField label="Tenant Name" variant="outlined" fullWidth required/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="Display Name" variant="outlined" fullWidth required/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="Address 1" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="Address 2" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth required>
                                    <InputLabel>Country</InputLabel>
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
                                    <InputLabel>State</InputLabel>
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
                        <TextField  label="Website URL" variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField  label="Import Users" type='file' InputLabelProps={{shrink: true}} 
                        variant="outlined" accept=".xls , .xlsx" helperText="File Size less than 5MB , support xls,xlsx" fullWidth/>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="text" sx={{fontSize:'16px'}}><FileDownloadOutlinedIcon/>Download Sample Template</Button>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{backgroundColor:'#f4f4f4',height:'2px',my:3}}>
            </Box> 
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                    <Button variant='contained' color='secondary' sx={{mr:4}} onClick={navigateToTenant}>CANCEL</Button>
                    <Button variant='contained' onClick={navigateToTenant}>CREATE</Button>  
            </Box> 
        </Container>
    </Box>
  )
}
