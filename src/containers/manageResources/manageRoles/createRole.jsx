import React, { useState } from 'react';
import { Box } from '@mui/material';
import Banner from '../../../_shared/components/banner/banner';

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