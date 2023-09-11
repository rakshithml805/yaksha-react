import React from 'react'
import { AppBar, Container, Box, Menu, MenuItem, Avatar, Link, Button, IconButton, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import logo from "../../assets/yaksha.png";
import avatar from "../../assets/2.jpg";

const Header = () => {
  const [assessment, setAssessment] = React.useState(null);
  const [question, setQuestion] = React.useState(null);
  const [tenant, setTenant] = React.useState(null);
  const [resourse, setResourse] = React.useState(null);
  const [profile, setProfile] = React.useState(null);

  const openAssessment = Boolean(assessment);
  const openQuestion = Boolean(question);
  const openTenant = Boolean(tenant);
  const openResourse = Boolean(resourse);
  const openProfile = Boolean(profile);


  const handleClick = (event) => {
    switch(event.currentTarget.value){
      case "assessments":
        setAssessment(event.currentTarget);
        break;
      case "questions":
        setQuestion(event.currentTarget);
        break;
      case "tenants":
        setTenant(event.currentTarget);
        break;
      case "resourses":
        setResourse(event.currentTarget);
        break;
      case "profile":
        setProfile(event.currentTarget);
        break;
      default:
    }
  };
  const handleClose = () => {
    setAssessment(null);
    setQuestion(null);
    setTenant(null);
    setResourse(null);
    setProfile(null);
  };

  return (
    <AppBar position="fixed" sx={{backgroundColor: 'white', minHeight:'64px', display: 'flex', flexDirection: "column", justifyContent: "center"}}>
      <Container maxWidth="xl">
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
              <Link href="/" sx={{mt:"5px"}}><img src={logo} alt="Yaksha" /></Link>
              <Box>
                <Button variant='text' href='/' color='primary'>Dashboard</Button>
                <Button variant='text' color='primary' onClick={handleClick} value="assessments">Assessments <KeyboardArrowDownIcon /></Button>
                <Button variant='text' color='primary' onClick={handleClick} value="questions">Questions <KeyboardArrowDownIcon /></Button>
                <Button variant='text' color='primary' onClick={handleClick} value="tenants">Tenant Management <KeyboardArrowDownIcon /></Button>
                <Button variant='text' color='primary' onClick={handleClick} value="resourses">Manage Resourses <KeyboardArrowDownIcon /></Button>
                <Button variant='text' color='primary'>Reports</Button>
              </Box>
              <Box>
                <IconButton color='primary'>
                  <NotificationsNoneIcon />
                </IconButton>
              <Button variant="text" onClick={handleClick} value="profile">
                <Avatar alt="" src={avatar} />
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', ml:1, mt:1}}>
                  <Typography variant='button' sx={{lineHeight: 1}}>Firstname Lastname</Typography>
                  <Typography variant='caption'>Super Admin</Typography>
                </Box>
              </Button>
              </Box>
          </Box>
          <Menu id="assessments"
            anchorEl={assessment}
            open={openAssessment}
            onClose={handleClose}>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Assessment Banks</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Create Assessment Banks</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Create Assessment</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Assessments on Review</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Proctoring Configuration</MenuItem>
          </Menu>
          <Menu id="questions"
            anchorEl={question}
            open={openQuestion}
            onClose={handleClose}>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Question Banks</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Create Question Banks</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Create Question</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Bulk Upload Questions</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Bulk Upload History</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Questions on Review</MenuItem>
          </Menu>
          <Menu id="tenants"
            anchorEl={tenant}
            open={openTenant}
            onClose={handleClose}>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Tenants</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Create Tenant</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Users</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Create / Upload Users</MenuItem>
          </Menu>
          <Menu id="resourses"
            anchorEl={resourse}
            open={openResourse}
            onClose={handleClose}>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Manage Tags</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Manage Roles</MenuItem>
          </Menu>
          <Menu id="profile"
            anchorEl={profile}
            open={openProfile}
            onClose={handleClose}>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>My Profile</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Account Settings</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize: '0.9em'}}>Logout</MenuItem>
          </Menu>
      </Container>
    </AppBar>
  )
}

export default Header;