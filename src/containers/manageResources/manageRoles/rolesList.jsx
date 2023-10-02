import React from 'react';
import Banner from '../../../components/banner/banner';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const breadcrumbs = [
    {
        name: "Dashboard",
        url: "/dashboard"
    },
    {
        name: "Manage Roles",
        url: ""
    }
]
const button = ['CREATE ROLE', "/create-roles"];

const roles = [
    {
        id: 101,
        roles: 'Super Administrator',
        type: 'C R U D',
        features: ["Tags", "roles", "Questions", "Question Banks"]
    },
    {
        id: 201,
        roles: 'Tenant Administrator',
        type: 'C R U D',
        features: ["Tags", "roles", "Questions", "Question Banks"]
    },
    {
        id: 301,
        roles: 'Authors',
        type: 'C R U',
        features: ["Questions", "Assessments"]
    },
    {
        id: 401,
        roles: 'Reviewer',
        type: 'M A X',
        features: ["Approve or Reject Questions", "Approve or Reject Assessments"]
    },
    {
        id: 501,
        roles: 'Evaluator',
        features: ["Evaluator Assessment Submitted"]
    },
    {
        id: 601,
        roles: 'Candidates',
        features: ["Browse Assessments", "Enroll Assessments", "Particpation in Hackathons"]
    },
]

const RoleList = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <Box>
            <Banner title="Manage Roles" crumbs={breadcrumbs} bannerButton={button} />
            <Box sx={{ mt: 4, mb: 4, ml: 4, mr: 4 }}>
                <Grid container spacing={3}>
                    {
                        roles.map((role) =>
                        (
                            <Grid item xs={12} sm={6} md={4} key={role.id}>
                                <Card sx={{ border: '1px solid #c4c4c4', height: '200px' }}>
                                    <CardContent sx={{ position: 'relative' }}>
                                        <Box>
                                            <Box sx={{ width: '70%' }}>
                                                <Typography variant='body2' color="text.secondary" sx={{ maxHeight: '44px', overflow: 'hidden' }}>{role.roles}</Typography>
                                            </Box>
                                            <Box className="p-absolute d-flex" sx={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>
                                                <EditOutlinedIcon color='warning' sx={{ cursor: 'pointer' }} onClick={() => navigate('/create-roles')} />
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                                            <Box className='d-flex flex-start'>
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    {
                                                        role.features.map((roleName) => (
                                                            <Box sx={{ display: 'flex' }}>
                                                                <Typography variant='caption' color="text.disabled">{role.type}</Typography>
                                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                                <Typography variant='caption'>{roleName}</Typography>
                                                            </Box>
                                                        ))
                                                    }
                                                </Box>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}
export default RoleList;