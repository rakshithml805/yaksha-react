import React, { useState } from 'react';
import Banner from '../../../components/banner/banner';
import { Box } from '@mui/material';

const breadcrumbs = [
    {
        name: "Dashboard",
        url: "/dashboard"
    },
    {
        name: "Manage Roles",
        url: "/roles"
    },
    {
        name: "Create Roles",
        url: ""
    }
]

const CreateRole = () => {
    return (
        <Box>
            <Banner title="Manage Roles" crumbs={breadcrumbs} />
        </Box>
    )
}
export default CreateRole;