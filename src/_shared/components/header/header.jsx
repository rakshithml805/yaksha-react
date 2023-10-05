import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useMatch, useNavigate, useParams } from 'react-router-dom';
import { postApi } from '../../../_api/_api';
import { apiIdentityUrl } from '../../../_api/_urls';
import { handleClearLoginState } from '../../../_store/reducer/loggedInUserDetails';
import avatar from "../../../assets/2.jpg";
import logo from "../../../assets/yaksha.png";
import useUserRolePermissions from '../../userRolePermissions';
import { ListItem } from '@mui/material';

const Header = () => {
  const dispatch = useDispatch();  
  const { tenancyName } = useParams();
  const loggedInUserDetailsStore = useSelector((state) => state.loggedInUserDetails.data);
  const { currentLoginInfo, userRolePermissions } = loggedInUserDetailsStore;
  const { result: userRolePermission } = userRolePermissions;
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
        navigate(`/${tenancyName}/dashboard`);
        break;
      case "reports":
        navigate(`/${tenancyName}/reports`);
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
  
  const handleLogout = async () => {
    try {
      handleClose();
      const { status } = await postApi(`${apiIdentityUrl}/services/platform/UserLogout/UserLogout`, {});
      if (status === 200) {
          // clear redux          
          dispatch(handleClearLoginState());
          navigate(`/${tenancyName}/login`);
          return;
      } 
    } catch (error) {
      console.error(error);
    }
  }
  const menuObj = useUserRolePermissions();

  const hasMenuAccess = (item) => {
    if (item.roles.find(ele => ele === userRolePermission.userRole && (item.isMenu))) {
      return true;
    }
    return false;
  }
  const renderMenuItems = (item) => {
    return hasMenuAccess(item) ? <NavLink to={item.to}>
    <MenuItem onClick={handleClose}>{item.label}</MenuItem>
  </NavLink> : ""
  }
  const hasAccessToMainMenu = (row) => {
    return row.filter(item => item.roles.find(ele => ele === userRolePermission.userRole)).length ? true : false;
  }
  return (
    <AppBar position="fixed" sx={{backgroundColor: 'white', minHeight:'64px', display: 'flex', flexDirection: "column", justifyContent: "center"}}>
      <Container maxWidth="xl">
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
              <Box sx={{mt:"5px"}}><img src={logo} alt="Yaksha" /></Box>
              <Box>
                <Button variant='text' color='primary' onClick={handleClick} value="dashboard">Dashboard</Button>
                
                { hasAccessToMainMenu(menuObj.assesmentMenu) && <>
                  <Button variant='text' color='primary' onClick={handleClick} value="assessments">Assessments <KeyboardArrowDownIcon /></Button>
                </>}

                {hasAccessToMainMenu(menuObj.questionsMenu) && (<>
                  <Button variant='text' color='primary' onClick={handleClick} value="questions">Questions <KeyboardArrowDownIcon /></Button>
                </>)}

                {hasAccessToMainMenu(menuObj.tenantsMenu) && (<>
                  <Button variant='text' color='primary' onClick={handleClick} value="tenants">
                    {userRolePermission.userRole === 'TenantAdmin' ? 'User Management' : 'Tenant Management'} <KeyboardArrowDownIcon />
                  </Button>
                </>) }

                { hasAccessToMainMenu(menuObj.resoursesMenu) && (<>
                  <Button variant='text' color='primary' onClick={handleClick} value="resourses">Manage Resourses <KeyboardArrowDownIcon /></Button>
                </>)}

                { hasAccessToMainMenu(menuObj.reportsMenu) && (<>
                  <Button variant='text' color='primary' onClick={handleClick} value="reports">Reports</Button>
                </>)}

              </Box>
              <Box>
                <IconButton color='primary'>
                  <NotificationsNoneIcon />
                </IconButton>
              <Button variant="text" onClick={handleClick} value="profile">
                <Avatar alt="" src={avatar} />
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', ml:1, mt:1}}>
                  <Typography variant='body1' color="text.primary" sx={{lineHeight: 1}}>{currentLoginInfo?.user?.name} {currentLoginInfo?.user?.surname}</Typography>
                  <Typography variant='caption' color="text.disabled">{userRolePermission && userRolePermission.userRole}</Typography>
                </Box>
              </Button>
              </Box>
          </Box>
          <Menu id="assessments"
            anchorEl={assessment}
            open={openAssessment}
            onClick={handleClose}>
              {menuObj.assesmentMenu && menuObj.assesmentMenu.map(item => renderMenuItems(item))}
          </Menu>
          <Menu id="questions"
            anchorEl={question}
            open={openQuestion}
            onClick={handleClose}>
              {menuObj.questionsMenu && menuObj.questionsMenu.map(item => renderMenuItems(item))}
          </Menu>
          <Menu id="tenants"
            anchorEl={tenant}
            open={openTenant}
            onClick={handleClose}>
              {menuObj.tenantsMenu && menuObj.tenantsMenu.map(item => renderMenuItems(item))}
          </Menu>
          <Menu id="resourses"
            anchorEl={resourse}
            open={openResourse}
            onClick={handleClose}>
              {menuObj.resoursesMenu && menuObj.resoursesMenu.map(item => renderMenuItems(item))}
          </Menu>
          <Menu id="profile"
            anchorEl={profile}
            open={openProfile}
            onClick={handleClose}>
              {menuObj.profileMenu && menuObj.profileMenu.map(item => renderMenuItems(item))}
              <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>              
          </Menu>
      </Container>
    </AppBar>
  )
}

export default Header;