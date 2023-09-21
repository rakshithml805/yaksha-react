import React from 'react'
import { AppBar, Container, Box, Menu, MenuItem, Avatar, Button, IconButton, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import logo from "../../assets/yaksha.png";
import avatar from "../../assets/2.jpg";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

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
  
  let navigate = useNavigate();

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
      case "dashboard":
        navigate('/dashboard');
        break;
      case "reports":
        navigate('/reports');
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
  const location = useLocation();
    const hideHeaderForPaths = ['/','/forgotPassword'];
    if(hideHeaderForPaths.includes(location.pathname)) {
      return <></>;
    }
  return (
    <AppBar position="fixed" sx={{backgroundColor: 'white', minHeight:'64px', display: 'flex', flexDirection: "column", justifyContent: "center"}}>
      <Container maxWidth="xl">
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
              <Box sx={{mt:"5px"}}><img src={logo} alt="Yaksha" /></Box>
              <Box>
                <Button variant='text' color='primary' onClick={handleClick} value="dashboard">Dashboard</Button>
                <Button variant='text' color='primary' onClick={handleClick} value="assessments">Assessments <KeyboardArrowDownIcon /></Button>
                <Button variant='text' color='primary' onClick={handleClick} value="questions">Questions <KeyboardArrowDownIcon /></Button>
                <Button variant='text' color='primary' onClick={handleClick} value="tenants">Tenant Management <KeyboardArrowDownIcon /></Button>
                <Button variant='text' color='primary' onClick={handleClick} value="resourses">Manage Resourses <KeyboardArrowDownIcon /></Button>
                <Button variant='text' color='primary' onClick={handleClick} value="reports">Reports</Button>
              </Box>
              <Box>
                <IconButton color='primary'>
                  <NotificationsNoneIcon />
                </IconButton>
              <Button variant="text" onClick={handleClick} value="profile">
                <Avatar alt="" src={avatar} />
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', ml:1, mt:1}}>
                  <Typography variant='body1' color="text.primary" sx={{lineHeight: 1}}>Firstname Lastname</Typography>
                  <Typography variant='caption' color="text.disabled">Super Admin</Typography>
                </Box>
              </Button>
              </Box>
          </Box>
          <Menu id="assessments"
            anchorEl={assessment}
            open={openAssessment}
            onClick={handleClose}>
              <NavLink to="/assessment-banks">
                <MenuItem onClick={handleClose}>Assessment Banks</MenuItem>
              </NavLink>
              <NavLink to="/create-assessment-bank">
                <MenuItem onClick={handleClose}>Create Assessment Banks</MenuItem>
              </NavLink>
              <NavLink to="/create-assessment">
                <MenuItem onClick={handleClose}>Create Assessment</MenuItem>
              </NavLink>
              <NavLink to="/assessments-on-review">
                <MenuItem onClick={handleClose}>Assessments on Review</MenuItem>
              </NavLink>
              <NavLink to="/proctoring-configuration">
                <MenuItem onClick={handleClose}>Proctoring Configuration</MenuItem>
              </NavLink>
          </Menu>
          <Menu id="questions"
            anchorEl={question}
            open={openQuestion}
            onClick={handleClose}>
              <NavLink to="/question-banks">
                <MenuItem onClick={handleClose}>Question Banks</MenuItem>
              </NavLink>
              <NavLink to="/create-question-bank">
                <MenuItem onClick={handleClose}>Create Question Banks</MenuItem>
              </NavLink>
              <NavLink to="/create-question">
                <MenuItem onClick={handleClose}>Create Question</MenuItem>
              </NavLink>
              <NavLink to="/bulk-upload-questions">
                <MenuItem onClick={handleClose}>Bulk Upload Questions</MenuItem>
              </NavLink>
              <NavLink to="/bulk-upload-history">
                <MenuItem onClick={handleClose}>Bulk Upload History</MenuItem>
              </NavLink>
              <NavLink to="/questions-on-review">
                <MenuItem onClick={handleClose}>Questions on Review</MenuItem>
              </NavLink>
          </Menu>
          <Menu id="tenants"
            anchorEl={tenant}
            open={openTenant}
            onClick={handleClose}>
              <NavLink to="/tenants">
                <MenuItem onClick={handleClose}>Tenants</MenuItem>
              </NavLink>
              <NavLink to="/create-tennant">
                <MenuItem onClick={handleClose}>Create Tenant</MenuItem>
              </NavLink>
              <NavLink to="/users">
                <MenuItem onClick={handleClose}>Users</MenuItem>
              </NavLink>
              <NavLink to="/create-upload-users">
                <MenuItem onClick={handleClose}>Create / Upload Users</MenuItem>
              </NavLink>
          </Menu>
          <Menu id="resourses"
            anchorEl={resourse}
            open={openResourse}
            onClick={handleClose}>
              <NavLink to="/tags">
                <MenuItem onClick={handleClose}>Manage Tags</MenuItem>
              </NavLink>
              <NavLink to="/roles">
                <MenuItem onClick={handleClose}>Manage Roles</MenuItem>
              </NavLink>
          </Menu>
          <Menu id="profile"
            anchorEl={profile}
            open={openProfile}
            onClick={handleClose}>
              <NavLink to="/profile">
                <MenuItem>My Profile</MenuItem>
              </NavLink>
              <NavLink to="/account-settings">
                <MenuItem onClick={handleClose}>Account Settings</MenuItem>
              </NavLink>
              <NavLink to="/">
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </NavLink>
              
          </Menu>
      </Container>
    </AppBar>
  )
}

export default Header;